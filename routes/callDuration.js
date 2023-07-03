const express = require("express");
const router = express.Router();

const {
  addCallDuration,
  deductBalance,
  changeToAvailable,
  userChathistory,
  astroChathistory
} = require("../controller/callDuration");

router.post("/user/addCallDuration", addCallDuration);
router.post("/user/deductChatBalance", deductBalance);
router.post("/user/changeStatus", changeToAvailable);
router.get("/user/userChathistory/:id", userChathistory);
router.get("/user/astroChathistory/:id", astroChathistory);
// router.post("/admin/edit_event/:id", edit_event);
// router.get("/admin/dlt_event/:id", dlt_event);

module.exports = router;
