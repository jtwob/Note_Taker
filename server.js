const express = require("express");
const app = express();
const PORT = 8080;

const apiRoutes = require("./routes/apiRoutes");
const clientRoutes = require("./routes/clientRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", clientRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));