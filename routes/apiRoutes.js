const router = require("express").Router();
const { text } = require("express");
const fs = require("fs");
const uniqid = require("uniqid");

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


router.post("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const allNotes = JSON.parse(data);
        allNotes.push({
            title: req.body.title,
            id: uniqid(),
            text: req.body.text,
        });
        fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
            if (err) throw err;
            return res.json({ msg: "successfully added" });
        });
    });
});

router.delete("/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const allNotes = JSON.parse(data);
        for (let i = 0; i < allNotes.length; i++) {
            if (allNotes[i].id === req.params.id) {
                allNotes.splice(i, 1);
            }
        }
        fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
            if (err) throw err;
            return res.json({ msg: "successfully deleted" });
        });
    })
})

module.exports = router;