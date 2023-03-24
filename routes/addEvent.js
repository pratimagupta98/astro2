const express = require("express");
const router = express.Router();


const {
    admin_Addevent,
    get_adminevent,
    admin_getone_event


} = require("../controller/addEvent");



router.post("/admin/admin_Addevent", admin_Addevent);

router.get("/admin/get_adminevent", get_adminevent);
router.get("/admin/admin_getone_event", admin_getone_event);



module.exports = router;

