import axios from 'axios';
import { mockData } from "./mock-data"

const getAccessToken = async () => {
  // look for accessToken
  const accessToken = localStorage.getItem('access_token')
  // if there is no access token in localstoreage
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
  }
}

export const getEvents = async () => {
  return mockData
}

export const extractLocations = events => {
  let extractLocations = events.map(event => event.location)
  let locations = [...new Set(extractLocations)]
  return locations
}