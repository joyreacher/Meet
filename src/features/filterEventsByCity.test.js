import { loadFeature, defineFeature } from 'jest-cucumber'

// used to load a Gherkin file
const feature = loadFeature('./src/features/filterEventsByCity.feature')

// used to define the code for that file (feature)
defineFeature(feature, test => {
  
})