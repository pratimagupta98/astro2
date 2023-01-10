const express = require("express");
const router = express.Router();
 

const {
    addTicket,
    ticketList,
    getoneTicket,
    dltFaq
   
} = require("../controller/createTicket");

 
 
 router.post("/user/addTicket", addTicket);
router.get("/admin/ticketList", ticketList);
router.get("/user/getoneTicket/:id", getoneTicket);

module.exports = router;

