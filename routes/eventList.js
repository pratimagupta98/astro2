const express = require("express");
const router = express.Router();


const {
    add_eventList,
    EventListAdmin,
    dlt_eventList,
    getone_eventList,
    edit_eventlist

} = require("../controller/eventList");



router.post("/admin/add_eventList", add_eventList);

router.get("/admin/EventListAdmin", EventListAdmin);
router.get("/admin/getone_eventList/:id", getone_eventList);
router.get("/admin/dlt_eventList/:id", dlt_eventList);
router.post("/admin/edit_eventlist/:id", edit_eventlist);




module.exports = router;

