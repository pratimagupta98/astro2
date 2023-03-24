const express = require("express");
const router = express.Router();


const {
    admin_Addevent,
    get_adminevent

} = require("../controller/addEvent");



router.post("/admin/admin_Addevent", admin_Addevent);

router.get("/admin/get_adminevent", get_adminevent);


module.exports = router;

