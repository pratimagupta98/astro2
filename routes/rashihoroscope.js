const express = require("express");
const router = express.Router();
 

const {
    add_Rhscope,
    get_Rhscope,
    getone_Rhscope,
    edit_Rhscope,
    dlt_Rhscope
} = require("../controller/rashihoroscope");



router.post("/admin/add_Rhscope", add_Rhscope);
router.get("/admin/get_Rhscope", get_Rhscope);
router.get("/admin/getone_Rhscope/:id",  getone_Rhscope)
router.post("/admin/edit_Rhscope/:id",  edit_Rhscope);
router.get("/admin/dlt_Rhscope/:id",  dlt_Rhscope);


module.exports = router;

