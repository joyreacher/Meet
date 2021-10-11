import axios from 'axios';
import { mockData } from "./mock-data"
import NProgress from 'nprogress'

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
  .catch(error => error.json)
  return result
}
export const getEvents = async () => {
  NProgress.start()
  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done()
    return mockData
  }
  // check for token - if present call api/get-events
  const token = await getAccessToken()
  if(token) {
    removeQuery()
    const url = `https://dy6gly1nj9.execute-api.us-east-2.amazonaws.com/dev/api/get-events/${token}`
    const result = await axios.get(url)
    if(result.data) {
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
  if(window.history.pushState && window.location.pathname) {
    newurl = window.location.protocol + "//" + window.location.host + window.location.pathname
    window.history.pushState("", "", newurl)
  } else {
    newurl = window.location.protocol + '//' + window.location.host
    window.history.pushState("","", newurl)
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
  let extractLocations = events.map(event => event.location)
  let locations = [...new Set(extractLocations)]
  return locations
}