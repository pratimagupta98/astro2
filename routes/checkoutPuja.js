const express = require("express");
const router = express.Router();


const {
    add_PoojaChkOut,
    userBookedPujalist,
    bookedPujaList,
     updatePujaStatus,
     dltBookedPuja
} = require("../controller/checkoutPuja");



router.post("/user/add_PoojaChkOut", add_PoojaChkOut);
router.get("/user/userBookedPujalist/:id", userBookedPujalist);
router.get("/admin/bookedPujaList", bookedPujaList)
 router.post("/admin/updatePujaStatus/:id",updatePujaStatus);
 router.get("/admin/dltBookedPuja/:id", dltBookedPuja)


module.exports = router;

