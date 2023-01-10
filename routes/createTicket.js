const express = require("express");
const router = express.Router();
 

const {
    addTicket,
    ticketList,
    TicketbyUser,
    dltFaq,
    getOneTicket
   
} = require("../controller/createTicket");

 
 
 router.post("/user/addTicket", addTicket);
router.get("/admin/ticketList", ticketList);
router.get("/user/TicketbyUser/:id", TicketbyUser);
router.get("/user/getOneTicket/:id", getOneTicket);


module.exports = router;

