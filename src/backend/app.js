const rp = require('request-promise');
const cheerio = require('cheerio');
const express = require('express')
const app = express()
const port = 3000

//npm run start-backend
app.get('/data', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


 
let keyWord = "developers"
 
let URL = `https://www.instagram.com/explore/tags/${keyWord}/`
 
rp(URL)
    .then((html) => {
        let hashtags = scrapeHashtags(html);
        hashtags = removeDuplicates(hashtags);
        hashtags = hashtags.map(ele => "#" + ele)
        console.log(hashtags);
    })
    .catch((err) => {
        console.log(err);
    });
 
const scrapeHashtags = (html) => {  
    var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    var matches = [];
    var match;
 
    while ((match = regex.exec(html))) {
        matches.push(match[1]);
    }
 
    return matches;
}
 
const removeDuplicates = (arr) => {
    let newArr = [];
 
    arr.map(ele => {
        if (newArr.indexOf(ele) == -1){
            newArr.push(ele)
        }
    })
    
    return newArr;
}
