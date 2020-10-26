const rp = require("request-promise");
const express = require("express");
const app = express();
let baseUrl = `https://www.instagram.com/explore/tags`;

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello Vicky");
});

app.get("/:keyword", (req, res) => {
  const { keyword } = req.params;

  rp(`${baseUrl}/${keyword}/`)
    .then((html) => {
      let hashtags = scrapeHashtags(html);
      hashtags = removeDuplicates(hashtags);
      hashtags = hashtags.map((ele) => "#" + ele);
      return res.status(200).send(hashtags);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

const scrapeHashtags = (html) => {
  var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
  var matches = [];
  var match;

  while ((match = regex.exec(html))) {
    matches.push(match[1]);
  }

  return matches;
};

const removeDuplicates = (arr) => {
  let newArr = [];

  arr.map((ele) => {
    if (newArr.indexOf(ele) == -1) {
      newArr.push(ele);
    }
  });

  return newArr;
};
