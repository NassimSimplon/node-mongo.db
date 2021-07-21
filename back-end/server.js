const express = require("express");
const app = express();
const cors = require("cors");
const body = require("body-parser");
const db = require("./config/db.js");
db();
app.use(express.json());
const fabriqueRouter = require("./routes/fabriqueRoute");
app.use(cors());
app.use("/app/fabrique", fabriqueRouter);

// config server

const PORT = process.env.PORT || "4000";

app.listen(PORT, () => {
  console.log(`server yekhdem ${PORT}`);
});
