const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');

request('https://www.worldometers.info/coronavirus/',cb);

console.log('Web scrapping Intro');

function cb(err, res, html){
    if(err){
        console.error(err);
    }else{
        handleHtml(html);
    }

}
console.log('COVID DATA DISPLAY');

function handleHtml(html){
    let selTool = cheerio.load(html);

    let spans = selTool('#maincounter-wrap .maincounter-number span');
    
    let totalCases = selTool(spans[0]).text();
    let deathCases = selTool(spans[1]).text();
    let recoveredCases = selTool(spans[2]).text();
    console.log(chalk.gray('Total COVID Cases: ',totalCases));
    console.log(chalk.red('Total Death Cases: ',deathCases));
    console.log(chalk.green('Total Recovered Cases: ',recoveredCases));
}
