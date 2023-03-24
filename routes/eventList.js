const express = require("express");
const router = express.Router();


const {
    add_eventList,
    EventListAdmin,
    dlt_eventList

} = require("../controller/eventList");



router.post("/admin/add_eventList", add_eventList);

router.get("/admin/EventListAdmin", EventListAdmin);
router.get("/admin/dlt_eventList/:id", dlt_eventList);



module.exports = router;

