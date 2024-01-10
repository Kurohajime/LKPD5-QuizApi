const jobsheetController = require("../controllers/jobsheet-controllers");
const router = require("express").Router();

router.post("/one", jobsheetController.submitOne);
router.post("/may", jobsheetController.submitMany);

module.exports = router;
