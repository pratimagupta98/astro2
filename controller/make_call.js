
const make_call = require("../models/make_call.js");
const Astrologer = require("../models/astrologer");

const resp = require("../helpers/apiResponse");
const User = require("../models/users");

//chngee
// exports.make_call = async (req, res) => {
//   var request = require('request');
//   CircularJSON = require('circular-json')

//   key = "d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//   sid = "sveltosetechnologies2"
//   token = "856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"
//   from = req.body.from
//   to = req.body.to

//   const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
//   const axios = require('axios')
//   url = "https://" + key + ":" + token + "@api.exotel.in/v1/Accounts/" + sid + "/Calls/connect.json"
//   var requestBody =
//     axios.post(url,
//       formUrlEncoded({
//         "From": req.body.From,   //USER
//         "To": req.body.To,       //ASTRO
//         "userid": req.body.userid,
//         "astroid": req.body.astroid,
//         "walletId": req.body.walletId,
//         //  "CallerId": '011-411-68588',
//         "CallerId": '080-473-59942',


//         "CallerType": 'promo',
//         // "Status" :"Status",2
//         // "StartTime":"StartTime",
//         // "EndTime" :"EndTime",
//         // "Duration" :"Duration",
//         // "Price" :"Price",
//         // "RecordingUrl":"RecordingUrl"

//       }),

//       {
//         withCredentials: true,
//         headers: {
//           "Accept": "application/x-www-form-urlencoded",
//           "Content-Type": "application/x-www-form-urlencoded"
//         },
//         data: JSON.stringify(`statusCode: ${res.statusCode}`)
//       },
//     )
//       .then(async (response) => {
//         console.log(`statusCode: ${res.statusCode}`)
//         //   console.log("RES",response)
//         const str = CircularJSON.stringify(response.data);
//         console.log("str", str)
//         const getdata = JSON.parse(str)
//         console.log("getdata", JSON.parse(str))
//         //  res.send(JSON.parse(str))
//         var options = {
//           From: req.body.From,   //USER
//           To: req.body.To,       //ASTRO
//           userid: req.body.userid,
//           astroid: req.body.astroid,
//           Sid: getdata.Call?.Sid,
//           ParentCallSid: getdata.Call?.ParentCallSid,
//           DateCreated: getdata.Call?.DateCreated,
//           DateUpdated: getdata.Call?.DateUpdated,
//           AccountSid: getdata.Call?.AccountSid,
//           PhoneNumberSid: getdata.Call?.PhoneNumberSid,
//           Status: getdata.Call?.Status,
//           StartTime: getdata.Call?.StartTime,
//           EndTime: getdata.Call?.EndTime,
//           Duration: getdata.Call?.Duration,
//           Price: getdata.Call?.Price,
//           Direction: getdata.Call?.Direction,
//           AnsweredBy: getdata.Call?.AnsweredBy,
//           ForwardedFrom: getdata.Call?.ForwardedFrom,
//           CallerName: getdata.Call?.CallerName,
//           Uri: getdata.Call?.Uri,
//           RecordingUrl: getdata.Call?.RecordingUrl




//         }


//         await make_call.create(options, function (err, response) {
//           console.log("RES", options);
//           const str = CircularJSON.stringify(response.data);

//           //res.send(str)

//           res.json({
//             order: options,
//           });
//           if (err) {
//             res.json({
//               err: err,
//             });
//           }
//         }
//         )
//       })
//   // res.send(JSON.parse(str))
//   //    let result = await make_call.create(requestBody)
//   //    console.log("CREATED DATA",result)

//   //   })
//   //   .catch((error) => {
//   //   console.error(error)
//   //   res.send(error)
//   //  })
// }

//chnaginggg
// exports.make_call = async (req, res) => {
//   try {
//     // previous code
//     var request = require('request');
//     CircularJSON = require('circular-json')


//     key = "d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//     sid = "sveltosetechnologies2"
//     token = "856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"
//     from = req.body.from
//     to = req.body.to

//     const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
//     const axios = require('axios')
//     url = "https://" + key + ":" + token + "@api.exotel.in/v1/Accounts/" + sid + "/Calls/connect.json"
//     var requestBody =
//       axios.post(url,
//         formUrlEncoded({
//           "From": req.body.From,   //USER
//           "To": req.body.To,       //ASTRO
//           "userid": req.body.userid,
//           "astroid": req.body.astroid,
//           "walletId": req.body.walletId,
//           //  "CallerId": '011-411-68588',
//           "CallerId": '080-473-59942',
//           "CallerType": 'promo',
//         }),

//         {
//           withCredentials: true,
//           headers: {
//             "Accept": "application/x-www-form-urlencoded",
//             "Content-Type": "application/x-www-form-urlencoded"
//           },
//           //  data: JSON.stringify(`statusCode: ${res.statusCode}`)
//         },
//       )



//     // if (getdata.Call?.Status !== "failed") {
//     // Retrieve user's wallet information
//     const userWallet = await User.findOne({ _id: req.body.userid });
//     console.log("userWallet", userWallet)

//     // Check if user has enough funds
//     const astroWallet = await Astrologer.findOne({ _id: req.body.astroid });
//     let callPrice = astroWallet?.callCharge
//     if (userWallet.amount < callPrice) {
//       res.status(400).json({
//         status: false,
//         msg: "Insufficient funds"
//       })
//     } else {
//       // Deduct amount from user's wallet every second until the call ends
//       if (getdata.Call?.Status !== "failed") {
//         const response = await requestBody;
//         console.log(`statusCode: ${res.statusCode}`)
//         const str = CircularJSON.stringify(response.data);
//         console.log("str", str)
//         const getdata = JSON.parse(str)
//         console.log("getdata", JSON.parse(str))
//         let timer = setInterval(async () => {
//           userWallet.amount -= callPrice;
//           console.log("Remaining amount: ", userWallet.amount)
//           await userWallet.save();
//           const call = await make_call.findOne({ Sid: getdata.Call?.Sid });
//           if (call?.Status === "completed" || call?.Status === "failed") {
//             clearInterval(timer);
//           }
//         }, 1000); // 1000 ms = 1 second

//         // Create call information object
//         var options = {
//           From: req.body.From,   //USER
//           To: req.body.To,       //ASTRO
//           userid: req.body.userid,
//           astroid: req.body.astroid,
//           Sid: getdata.Call?.Sid,
//           // ...
//         };

//         // Save call information to database
//         const callInfo = await make_call.create(options);

//         // Send response to client
//         res.json({
//           order: callInfo // assuming the order object is defined by the callInfo returned by make_call.create()
//         });
//       } else {
//         throw new Error("Call failed");
//       }
//     }
//     // } else {
//     //   throw new Error("Call failed");
//     // }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: "Internal server error"
//     });
//   }
// };

//chnagging
exports.make_call = async (req, res) => {
  try {

    var request = require('request');
    CircularJSON = require('circular-json')


    key = "d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
    sid = "sveltosetechnologies2"
    token = "856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"
    from = req.body.from
    to = req.body.to

    const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    const axios = require('axios')
    url = "https://" + key + ":" + token + "@api.exotel.in/v1/Accounts/" + sid + "/Calls/connect.json"
    var requestBody =
      axios.post(url,
        formUrlEncoded({
          "From": req.body.From,   //USER
          "To": req.body.To,       //ASTRO
          "userid": req.body.userid,
          "astroid": req.body.astroid,
          "walletId": req.body.walletId,
          //  "CallerId": '011-411-68588',
          "CallerId": '080-473-59942',
          "CallerType": 'promo',
        }),

        {
          withCredentials: true,
          headers: {
            "Accept": "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: JSON.stringify(`statusCode: ${res.statusCode}`)
        },
      )

    const response = await requestBody;
    console.log(`statusCode: ${res.statusCode}`)
    const str = CircularJSON.stringify(response.data);
    console.log("str", str)
    const getdata = JSON.parse(str)
    console.log("getdata", JSON.parse(str))

    //   if (getdata.Call?.Status !== "failed") {
    //     var options = {
    //       From: req.body.From,   //USER
    //       To: req.body.To,       //ASTRO
    //       userid: req.body.userid,
    //       astroid: req.body.astroid,
    //       Sid: getdata.Call?.Sid,
    //       ParentCallSid: getdata.Call?.ParentCallSid,
    //       DateCreated: getdata.Call?.DateCreated,
    //       DateUpdated: getdata.Call?.DateUpdated,
    //       AccountSid: getdata.Call?.AccountSid,
    //       PhoneNumberSid: getdata.Call?.PhoneNumberSid,
    //       Status: getdata.Call?.Status,
    //       StartTime: getdata.Call?.StartTime,
    //       EndTime: getdata.Call?.EndTime,
    //       Duration: getdata.Call?.Duration,
    //       Price: getdata.Call?.Price,
    //       Direction: getdata.Call?.Direction,
    //       AnsweredBy: getdata.Call?.AnsweredBy,
    //       ForwardedFrom: getdata.Call?.ForwardedFrom,
    //       CallerName: getdata.Call?.CallerName,
    //       Uri: getdata.Call?.Uri,
    //       RecordingUrl: getdata.Call?.RecordingUrl
    //     }

    //     // Save call information to database
    //     const callInfo = await (await make_call.create(options))
    //     const getuserdetail = await User.findOne({ _id: req.body.userid })
    //     console.log("getuser", getuserdetail.amount)
    //     // Send response to client
    //     res.json({
    //       order: callInfo // assuming the order object is defined by the callInfo returned by make_call.create()
    //     });
    //   } else {
    //     throw new Error("Call failed");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({
    //     error: "Internal server error"
    //   });
    // }
    if (getdata.Call?.Status !== "failed") {
      // Retrieve user's wallet information
      const userWallet = await User.findOne({ _id: req.body.userid });
      // const getoneastro = await Astrologer.findOne({ _id: req.body.astroid })
      // console.log("astro", getoneastro)
      // const getminamt = getoneastro.min_amount
      // console.log("CALLCHARGE", getminamt)

      // Check if user has enough funds
      const callPrice = getdata.Call?.Price || 0;
      if (userWallet.amount < callPrice) {
        throw new Error("Insufficient funds");
      }

      // Deduct amount from user's wallet
      userWallet.amount -= callPrice;
      await userWallet.save();

      // Create call information object
      var options = {
        From: req.body.From,   //USER
        To: req.body.To,       //ASTRO
        userid: req.body.userid,
        astroid: req.body.astroid,
        Sid: getdata.Call?.Sid,
        // ...
      };

      // Save call information to database
      const callInfo = await (await make_call.create(options));

      // Send response to client
      res.json({
        order: callInfo // assuming the order object is defined by the callInfo returned by make_call.create()

      });
    } else {
      throw new Error("Call failed");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal server error"
    });
  }
};


//     //   .then((res) => {
//     //   console.log(`statusCode: ${res.statusCode}`)
//     //   console.log(res)
//     //   res.send(response.body);
//     //   var serverRes = response.body
//     //   return serverRes
//     // })
//     // let result = await make_call.create(data)

//     // .catch((error) => {
//     //   console.error(error)
//   })

//}


// exports.callStatus = async (req, res) => {

//     your_api_key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//     your_sid="sveltosetechnologies2"
//     your_api_token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"
//     subdomain= "@api.exotel.in"  
//     CallSid='080-473-59942'


//     var request = require("request");
//     var options = {
//       method: "GET",
//       url: `https://your_api_key:your_api_token/subdomain/v1/Accounts/your_sid/Calls/CallSid`,
//       headers: {
//         "Accept":"application/x-www-form-urlencoded",
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//       form: {}
//     };
//   console.log("options",options)
//     request(options, function (error, response, body) {
//       if (response) {
//         var toparse = response.body;
//         res.status(200).send(toparse);
//       }
//       if (error) {
//         res.status(200).send(error);
//       }
//     });
//   };




//   exports.callStatus = async (req, res) => {
//     key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//     sid="sveltosetechnologies2"
//     token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e	"
//     CallSid= "/v1/Accounts/sveltosetechnologies2/Calls/a2f80c3aec91e3747a14198d32ae16bu.json"
//     var request = require('request');
// var options = {
//   //  url: 'https://<your_api_key>:<your_api_token><subdomain>/v1/Accounts/<your_sid>/Calls/b6cfaf5f5cef3ca0fc937749ef960e25'
//  //   url:"https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls"+CallSid+""

// // url:"https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls"+"a2f80c3aec91e3747a14198d32ae16bu"+".json"
// url :"https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls"+"a2f80c3aec91e3747a14198d32ae16bu"+"?details=true"

// };
// console.log("options",options)

// console.log(`statusCode: ${res.statusCode}`)
// console.log("RES",response)

// // function callback(error, response, body) {
// //     if (!error && response.statusCode == 200) {
// //         console.log("BODY",body);
// //     }
// // }

// request(options, callback)
// //console.log("callback",callback)
//   }


// exports.callStatus = async (req, res) => {
//   var request = require('request');

//   key="90c1bddcdace6f704819ebc54d740ebbbdf37f2ad30a4e8f"
//   sid="astrologically3"
//   token="04d432d9144e8521e1e31f8297e3d199d3c73b8676c49df8"
//       from=req.body.from     
//       to=req.body.to



//       const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
//       const axios = require('axios')
//       url="https://api.exotel.com/v1/Accounts/sveltosetechnologies2/Calls/a2f80c3aec91e3747a14198d32ae16bu.json"
//       axios.get(url, {headers:{"Authorization":'Basic ZDkwOWUyZTAxMjBkMGJjYmQyZWY3OTVkZDE5ZWIyZTk3YzJmOGQ3OGQ4ZWJiNmQ0Ojg1NjM3MWZlNmE5N2U4YmU4ZmVkNmFiMTRjOTViNDgzMmY4MmQxZDMxMTZjYjE3ZQ=='}},
//          formUrlEncoded({


//         "CallerId":'080-473-59942',
//         "CallerType": 'promo',


//       }),
//       {   
//           withCredentials: true,
//           headers: {
//               "accept": "application/json",
//               "Content-Type": "application/x-www-form-urlencoded",
//               'Authorization': 'Basic ZDkwOWUyZTAxMjBkMGJjYmQyZWY3OTVkZDE5ZWIyZTk3YzJmOGQ3OGQ4ZWJiNmQ0Ojg1NjM3MWZlNmE5N2U4YmU4ZmVkNmFiMTRjOTViNDgzMmY4MmQxZDMxMTZjYjE3ZQ=='
//           }
//         },
//         )
//         .then(async(response) => {
//           console.log(`statusCode: ${res.statusCode}`)
//           console.log("RES",response)
//           res.status(200).json({
//             status:true,
//             msg:"success",
//             data : response.data,
//           })

//  })

// //         .catch((error) => {
// //           console.error(error)
// //         })
// // .then((res) => {
// //   console.log(`statusCode: ${res.statusCode}`)
// //   console.log(res)
// // })
//     }





//       curl -X GET 'https://api.exotel.com/v1/Accounts/sveltosetechnologies2/Calls/a2f80c3aec91e3747a14198d32ae16bu.json'
// -H 'Authorization: Basic ZDkwOWUyZTAxMjBkMGJjYmQyZWY3OTVkZDE5ZWIyZTk3YzJmOGQ3OGQ4ZWJiNmQ0Ojg1NjM3MWZlNmE5N2U4YmU4ZmVkNmFiMTRjOTViNDgzMmY4MmQxZDMxMTZjYjE3ZQ=='
// -H 'accept: application/json'


exports.callStatus = async (req, res) => {
  var request = require('request');

  key = "d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
  sid = "sveltosetechnologies2"
  token = "856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e"


  var options = {
    url: 'https://d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4:856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e@api.exotel.in/v1/Accounts/sveltosetechnologies2/Calls/9daef6e7629eed377ed91f2b732b174k.json'
  }
  //console.log("options",options)
  function callback(error, response, body) {
    if (response) {
      var toparse = response.body;
      res.status(200).send(toparse);
    }
    if (error) {
      res.status(200).send(error);
    }
  }
  request(options, callback);
}

exports.call_Status = async (req, res) => {
  await make_call.find().populate("userid").populate("astroid")
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};