module.exports = async (page, scenario, vp) => {
    await page.goto(scenario.url);
    await page.waitForTimeout(1000);  
   
     await page.type('#email', 'george@hire10x.ai');  
     await page.type('#password', 'George@1999');  
     await page.click('#login-button');              
     await page.waitForNavigation();
     
  };
  