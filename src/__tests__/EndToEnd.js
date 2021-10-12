import puppeteer from 'puppeteer'

describe('show/hide an event details', () => {
  let browser, page
  beforeAll( async () => {
    jest.setTimeout(30000)
    browser = await puppeteer.launch()
    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250,
    //   ignoreDefaultArgs: ['--disable-extensions']
    // })
    page = await browser.newPage()
    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.Event')
  })
  afterAll(() => {
    browser.close()
  })

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.Event .event-icon-show')
    expect(eventDetails).toBeNull()
  })

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .event-icon-hide')
    const eventDetails = await page.$('.Event .event-icon-show')
    expect(eventDetails).toBeDefined()
  })

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .event-icon-show')
    const eventDetails = await page.$('.Event .event-details')
    // toBeNull matcher is used to ensure the extra details element no longer exists
    expect(eventDetails).toBeNull()
  })
})