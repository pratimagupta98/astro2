const express = require("express");
const router = express.Router();
 

const {
    add_VideoChannel,channelList,getoneChannl,dltVideoChannl
} = require("../controller/videoChannel");

//Paths
router.post("/user/add_VideoChannel", add_VideoChannel);
router.get("/user/channelList", channelList);
router.get("/user/getoneChannl/:id", getoneChannl
);
router.post("/user/dltVideoChannl", dltVideoChannl);




 

module.exports = router;
 