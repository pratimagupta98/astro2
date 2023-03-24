const express = require("express");
const router = express.Router();


const {
    add_eventList,
    EventList

} = require("../controller/eventList");



router.post("/admin/add_eventList", add_eventList);

router.get("/admin/EventList", EventList);


module.exports = router;

