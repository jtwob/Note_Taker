const router = require("express").Router();
const { text } = require("express");
const fs = require("fs");

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
    console.log("get /api/notes successfull!");
});

router.get("/notes/script", (req, res) => {
    fs.readFile("./public/assets/js/index.js", "utf8", (err, data) => {
        if (err) throw err;
        res.type('.js');
        res.send(data);
    })
})

router.get("/notes/css", (req, res) => {
    fs.readFile("./public/assets/css/styles.css", "utf8", (err, data) => {
        if (err) throw err;
        res.type('.css');
        res.send(data);
    })
})


router.post("/notes")

module.exports = router;