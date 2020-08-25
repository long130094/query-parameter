// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
let list = [
  "Go market", "cooking", "clean disk", "studing"
]

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});
app.get("/todos", (req, res) => {
  let q = req.query.q;
  let matchList = list.filter((list) =>{
    return list.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("./index.pug",{
    list: matchList,
    question: q
  });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
