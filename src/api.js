import axios from 'axios'
import { mockData } from './testData'
import NProgress from 'nprogress'
// const NProgress = lazy(() => import('nprogress'))
export const getAccessToken = async () => {
  // look for accessToken
  const accessToken = localStorage.getItem('access_token')
  // if there is no access token in localstoreage
  const tokenCheck = accessToken && (await checkToken(accessToken))
  if (!accessToken || tokenCheck.error) {
    // remove access-token
    await localStorage.removeItem('access-token')
    const searchParams = new URLSearchParams(window.location.search)
    const code = await searchParams.get('code')
    // if there is no code
    if (!code) {
      // call the get-auth end point
      const results = await axios.get('https://dy6gly1nj9.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url')
      const { authUrl } = results.data
      return (window.location.href = authUrl)
    }
    return code && getToken(code)
  }
  return accessToken
}
export const checkToken = async (accessToken) => {
  const result = await fetch(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`)
    .then(res => res.json())
    .catch(error => {
      console.log(error)
      return false
    })
  return result
}
export const getEvents = async () => {
  NProgress.start()
  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done()
    return mockData
  }
  // load data for when user is offline
  const testConnection = await checkOnlineStatus()
  if (!navigator.onLine || testConnection.status !== 200) {
    const data = localStorage.getItem('lastEvents')
    NProgress.done()
    return data ? JSON.parse(data).events : []
  }
  // check for token - if present call api/get-events
  const token = await getAccessToken()
  if (token) {
    removeQuery()
    const url = `https://dy6gly1nj9.execute-api.us-east-2.amazonaws.com/dev/api/get-events/${token}`
    const result = await axios.get(url)
    if (result.data) {
      const locations = extractLocations(result.data.events)
      localStorage.setItem('lastEvents', JSON.stringify(result.data))
      localStorage.setItem('locations', JSON.stringify(locations))
    }
    NProgress.done()
    return result.data.events
  }
}

const removeQuery = () => {
  let newurl
  if (window.history.pushState && window.location.pathname) {
    newurl = window.location.protocol + '//' + window.location.host + window.location.pathname
    window.history.pushState('', '', newurl)
  } else {
    newurl = window.location.protocol + '//' + window.location.host
    window.history.pushState('', '', newurl)
  }
}

// takes code and encodes it using encodeURIComponent then uses the encoded code to get your token
export const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code)
  const { access_token } = await fetch(`https://dy6gly1nj9.execute-api.us-east-2.amazonaws.com/dev/api/token/${encodeCode}`)
    .then(res => {
      return res.json()
    })
    .catch(error => error)
  access_token && localStorage.setItem('access_token', access_token)
  return access_token
}

export const extractLocations = events => {
  const extractLocations = events.map(event => event.location)
  const locations = [...new Set(extractLocations)]
  return locations
}

export const checkOnlineStatus = () => {
  const test = fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res)
    .catch(err => err)
  return test
}
