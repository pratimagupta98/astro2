const express = require("express");
const router = express.Router();


const {
    admin_Addevent,
    get_adminevent,
    admin_getone_event,
    admin_edit_event,
    admin_dlt_event


} = require("../controller/addEvent");



router.post("/admin/admin_Addevent", admin_Addevent);

router.get("/admin/get_adminevent", get_adminevent);
router.get("/admin/admin_getone_event/:id", admin_getone_event);
router.post("/admin/admin_edit_event/:id", admin_edit_event);
router.get("/admin/admin_dlt_event/:id", admin_dlt_event);



module.exports = router;

