import puppeteer from 'puppeteer'

describe('show/hide an event details', () => {
  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch()
    
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/')

    await page.waitForSelector('.Event')
    
    const eventDetails = await page.$('.Event .event-details')
    expect(eventDetails).toBeNull()
    browser.close()
  })
})