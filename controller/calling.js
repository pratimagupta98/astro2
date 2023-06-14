const Astrologer = require("../models/astrologer");

const resp = require("../helpers/apiResponse");
const User = require("../models/users");



exports.voiceCalling = async (req, res) => {
    const astrodetail = await Astrologer.findOne({ astroid: req.body.id })
    console.log("astrodetail", astrodetail)
    const getchrge = astrodetail.callCharge
    const userdetail = await User.findOne({ userid: req.body.id })
    console.log("userdetail", userdetail)

    const useramt = userdetail.amount
    const astpmc = useramt / getchrge
    console.log("astpmc", astpmc)


    var moment = require('moment')
    var crntym = moment().format('YYYY-MM-DD hh:mm:ss')
    console.log("crntym", crntym)


}  