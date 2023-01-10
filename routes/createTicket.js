const express = require("express");
const router = express.Router();
 

const {
    addTicket,
    ticketList,
    TicketbyUser,
    dltFaq,
    getOneTicket,
    ticketReply,
    listbyticketNo
   
} = require("../controller/createTicket");

 
 
 router.post("/user/addTicket", addTicket);
router.get("/admin/ticketList", ticketList);
router.get("/user/TicketbyUser/:id", TicketbyUser);
router.get("/user/getOneTicket/:id", getOneTicket);
router.post("/user/ticketReply/:ticketNo", ticketReply);
router.get("/user/listbyticketNo/:ticketNo", listbyticketNo);




module.exports = router;

