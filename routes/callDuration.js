const express = require("express");
const router = express.Router();

const {
  addCallDuration,
  deductBalance,
  changeToAvailable,
  userChathistory,
  astroChathistory,
  dltallChat
} = require("../controller/callDuration");

router.post("/user/addCallDuration", addCallDuration);
router.post("/user/deductChatBalance", deductBalance);
router.post("/user/changeStatus", changeToAvailable);
router.get("/user/userChathistory/:id", userChathistory);
router.get("/user/astroChathistory/:id", astroChathistory);
 router.get("/admin/dltallChat", dltallChat);
// router.get("/admin/dlt_event/:id", dlt_event);

module.exports = router;
