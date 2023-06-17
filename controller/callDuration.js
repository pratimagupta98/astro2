const callDuration = require("../models/callDuration");
const resp = require("../helpers/apiResponse");
const { findOne } = require("../models/addEvent");
const Astrologer = require("../models/astrologer");
const User = require("../models/users");

exports.addCallDuration = async (req, res) => {
    const { userId, astroId, status } = req.body;

    try {
        // Finding the astrologer
        const astro = await Astrologer.findOne({ _id: astroId });

        // Getting the call charge
        console.log("call charge", astro.callCharge)
        const getastrochrge = astro.callCharge
        const astroCallCharge = astro.callCharge * 5;
        console.log("astroCallCharge", astroCallCharge)
        const user = await User.findOne({ _id: userId });
        const userAmount = user.amount;
        console.log("userAmount", userAmount)
        const onemincharge = astro.callCharge
        const amountToDeduct = astroCallCharge;
        let waitTym = userAmount / getastrochrge
        console.log("waitTym", waitTym)

        if (amountToDeduct <= userAmount) {
            const updatedAmount = userAmount - onemincharge;
            user.amount = updatedAmount;

            const newCallDuration = new callDuration({
                duration: 60, // One minute duration
                userId: userId,
                astroId: astroId,
                status: status
            });

            await Promise.all([user.save(), newCallDuration.save()]);

            res.status(200).json({ message: 'Call duration added successfully' });
        } else {
            res.status(400).json({ message: 'Insufficient balance for the call' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: 'Internal server error' });
    }
};



exports.intetakeNotification = async (req, res) => {
    await intakeNotification.find().populate("userId").populate("chatIntekId").populate("astroId")
        .sort({ createdAt: -1 })
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
};


// const axios = require('axios');
// const cron = require('node-cron');
// const database = require('./database'); // Import your database module or ORM

// exports.updateWaitTym = async () => {
//     try {
//         const astrologers = await database.getAllAstrologers();

//         for (const astro of astrologers) {
//             const currentWaitTym = astro.waitTym;
//             if (currentWaitTym > 0) {
//                 const updatedWaitTym = currentWaitTym - 1;
//                 await database.updateAstrologerWaitTym(astro.id, updatedWaitTym);
//                 console.log(`Wait time for astrologer ${astro.id} updated: ${updatedWaitTym} minutes`);
//             }
//         }
//     } catch (error) {
//         console.log("Error occurred:", error.message);
//     }
// };

// Schedule the cron job to run every minute
// cron.schedule('* * * * *', async () => {
//     await exports.updateWaitTym();
// });
