const poppeteer = require('puppeteer');
const sss = require('lodash/array');

const LAUNCH_PUPPETEER_OPTS = {
    args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--window-size=1920x1080'
    ],
};

const PAGE_PUPPETEER_OPTS = {
    networkIdle2Timeout: 5000,
<<<<<<< HEAD
    waitUntil: {
        waitUntil: ['load','domcontentloaded','networkidle0','networkidle2']
    },
    timeout: 3000000
=======
    waitUntil: 'networkidle2',
    timeout: 10000000
>>>>>>> 88ceaddfeee7fa5e3734432fa8ed071e7c7c32ef
  };

  module.exports = class getHTMLinfo {
    constructor(){
        this.browser = null;
        this.initBrowser= this.initBrowser.bind(this);
    };
    async initBrowser (){
       this.browser = await poppeteer.launch(LAUNCH_PUPPETEER_OPTS);
    }
   async getPageContent(url) {
     // сделать поиск с параметрам нормальных имён. Даешь селекторы , но максимально прими
     //тивные названия параметров а не как в попитире, и сделать всё расширяемым через классы
     // и ф-ции но с принципами наверно 'единственной ответсвенности сделать или еще какие'
       try{
       await this.initBrowser();
        let page = await this.browser.newPage();
        await page.goto(url,PAGE_PUPPETEER_OPTS);
        // let waits= await page.waitForSelector('.hm-icon');
        const buttonHamburger = await page.$('.hm-icon');
         buttonHamburger.click();
        let waitOpenHamburger = await page.waitForSelector('#hmenu-customer-name');
      //   let blad = await page.$$eval('.hmenu-item', async bla => {
      //     let arrOfCats =[]; 
      //     for(let items of bla){
      //   let name =  await items.$eval('div',div => 
      //         div.innerText === 'Electronics'? arrOfCats.push(div.innerText): null
      //       );
      //   }
        
      //   return arrOfCats;
      // });
      // let blad = await page.$$eval('.hmenu-item > div',bla => bla.filter(
      //   elems => elems.textContent === 'Electronics'
      //     // return elems.textContent;
      //     // if(elems.textContent === 'Electronics'){
      //     //   return elems.textContent;
          
      //   //  return elems.innerText === 'Electronics' ? elems.innerText : ''
        
      // ));
      let getWhatMeNeed = await page.evaluate(()=>
        Array.from(document.querySelectorAll('.hmenu-item > div'),
                a => {
                  return a.textContent === 'Electronics'? a.parentElement.getAttribute('href'): undefined;
                // return a.textContent;
                }
                // a.querySelector('div').innerHTML === 'Electronics'? 
                // a.getAttribute('href') : undefined
                    
        )
      )
      for (let i = 0; i<getWhatMeNeed.length; i++){
        console.log(getWhatMeNeed[i]);
      }
      // console.log(blad[4]);
      // let anotherVals = async ()=>{
      //   let arrOfCats =[]; 
      //   for(let items of blad){
      // let name =  await items.$eval('div',div => {
      //       // div.innerText === 'Electronics'? arrOfCats.push(div.innerText): null
      //       // div.innerText === 'Electronics'? div.innerText: null
      //       console.log(div.innerText)
      //     }
      //     );
      //     // arrOfCats.push(name);
      // }
      
      // // return arrOfCats;
      // }
    
  
    //  await page.$$eval('.hmenu-item', async bla => {console.log(await bla[2].innerText)});
        // let blad = await page.$$eval('.hmenu-item',bla => sss.map(bla,item => item.$eval('div',async div=>{let name = await div.innerText;return name})));
        // console.log(bla);
        // let getAllProductCategories = _.map(bla,item => item.$eval('div',async div=>{let name = await div.innerText;return name}));
        // item.map(elem=>elem.$eval('div',div=>div.innerText))) await page.$$eval('.hmenu-item');item => item.map(elem=>elem.$eval('div',div=>div.innerText))
        // Now i search categories that me need(Electronics), but if future me need search all categories 
        // let SortCategories = await getAllProductCategories.filter(cat=>cat.innerText === 'Electronics');
        // let content = await page.content();
        //  console.log(anotherVals.length);
         return' blad.length';
       } catch(e) {
         throw new Error(e.message);
       }
   }
}; 

//  module.exports = class getHTMLinfo {
//     constructor(){
//         // this.init = function(initBrowser){return initBrowser};
//         // this.brows =  this.init.bind(this,(async ()=>(await poppeteer.launch(LAUNCH_PUPPETEER_OPTS)))()); 
//         // this.browser = async function(){
//         //     try {
//         //         return await poppeteer.launch(LAUNCH_PUPPETEER_OPTS);
//         //     }
//         //      catch (e){
//         //         throw new Error(chalk.red(e.message));
//         //      }
//         // };
//         this.initBrowser =this.initBrowser.bind(this);
//         this.browser = null;
//     };
//    async initBrowser (){
//     this.browser = await poppeteer.launch(LAUNCH_PUPPETEER_OPTS);
//     }
//    async getPageContent(url) {
//        try{
//         await this.initBrowser();
//         let page = await this.browser.newPage();
//         await page.goto(url,PAGE_PUPPETEER_OPTS);
//         // await page.evaluate(() => {
//         //     document.querySelector('a[id="nav-hamburger-menu"]').click();
//         //   });
    
//         // await page.setViewport({ width: 1868, height: 978 })
  
//         // await page.waitForSelector('#navbar > #nav-belt > .nav-left > #nav-hamburger-menu > .hm-icon');
//         // let pageclick =  await page.click('#navbar > #nav-belt > .nav-left > #nav-hamburger-menu > .hm-icon');
//         //  await page.waitFor(6000);
//         // page.waitForNavigation()
//         // let elem = await page.$('#hmenu-content');
//         // let selector = await page.$('div["id=hmenu-customer-profile"]');вв....
      
//         // let elem = selector.asElement();
//         // await elem.click()
//         let content = await page.content();
//         return  content;
//        } catch(e) {
//          throw new Error(e.message);
//        }
//    }
// }; 
// module.exports =  LAUNCH_PUPPETEER_OPTS;
// module.exports =  PAGE_PUPPETEER_OPTS; 