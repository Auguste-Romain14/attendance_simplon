var express = require("express");
var router = express.Router();
const attendanceController = require("../controllers/attendanceController");

/* GET home page. */
router.get("/", attendanceController.index);
router.post("/", attendanceController.store);

module.exports = router;
