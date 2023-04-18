const express = require("express");
const router = express.Router();


const {
    add_chat_intake,
    intekListByastro,
    get_chat_intake,
    getone_user_chatintek,
    editContactus,
    dlt_ChatIntek,
    intekListByUser
} = require("../controller/chat_intake_form");



router.post("/user/add_chat_intake", add_chat_intake);
router.get("/admin/intekListByastro/:id", intekListByastro);
router.get("/admin/intekListByUser/:id", intekListByUser);

router.get("/admin/get_chat_intake", get_chat_intake);

router.get("/admin/getone_user_chatintek/:id", getone_user_chatintek)
// router.post("/admin/editContactus/:id",     editContactus);
router.get("/admin/dlt_ChatIntek/:id", dlt_ChatIntek)


module.exports = router;

