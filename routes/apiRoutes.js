const router = require("express").Router();
const fs = require("fs");

router.get("/notes", (req, res) => {
    fs.readFile("../db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
    console.log("get /api/notes successfull!");
});

router.post("/notes")

module.exports = router;