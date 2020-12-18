const router = require("express").Router();
const path = require("path");

/**
 * serves the client the index.html page
 */
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

/**
 * serves the client the notes.html page
 */
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;