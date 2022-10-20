const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+"/frontend/index.html"));
});
router.get("/css_particle", (req, res) => {
  res.sendFile(path.join(__dirname+"/frontend/particle.css"));
});
router.get("/css_general", (req, res) => {
  res.sendFile(path.join(__dirname+"/frontend/general.css"));
});
router.get("/banner", (req, res) => {
  res.sendFile(path.join(__dirname+"/frontend/banner.png"));
});

app.use("/", router);
app.use("/css_particle", router);
app.use("/css_general", router);
app.use("/banner", router);
app.listen(process.env.port || 80);
