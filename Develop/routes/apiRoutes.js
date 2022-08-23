const router = require("express").Router();
const db = require("../develop/db/db.json");
const fs = require("fs");
const path = require("path");
var uniqid = require("uniqid");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    console.log("get notes");

    let data = fs.readFileSync("./db/db.json", "utf8");

    res.json(JSON.parse(data));
  });
};

// post requests
app.post("/api/notes", (req, res) => {
  const newNote = {
    ...req.body,
    id: uniqid(),
  };

  console.log("post request");

  let data = fs.readFileSync("./db/db.json", "utf8");

  const dataJSON = JSON.parse(data);

  //push new note in db.json
  dataJSON.push(newNote);

  //writes notes data to db.json
  fs.writeFile("./db/db.json", JSON.stringigy(dataJSON), (err, text) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Hi", text);
  });

  console.log("Success, added a new note");

  res.json(data);
});
