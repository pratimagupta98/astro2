// //const twilio = require('twilio');




// // Download the helper library from https://www.twilio.com/docs/node/install
// // Find your Account SID and Auth Token at twilio.com/console
// // and set the environment variables. See http://twil.io/secure


// // const http = require('http');
// // const VoiceResponse = require('twilio').twiml.VoiceResponse;

// // http
// //   .createServer((req, res) => {
// //     // Create TwiML response
// //     const twiml = new VoiceResponse();

// //     twiml.say('Hello from your pals at Twilio! Have fun.');

// //     res.writeHead(200, { 'Content-Type': 'text/xml' });
// //     res.end(twiml.toString());
// //   })
// //   .listen(1337, '127.0.0.1');

// // console.log('TwiML server running at http://127.0.0.1:1337/');


// //exports.make_call = async (req, res) => {

// //   const accountSid = 'ACe1f44c47e56070de532ae55127e38795';
// //   const authToken = 'a84a0a5c3930c08cf3a1bd25a8ac3cbe';
// //   const client = require('twilio')(accountSid, authToken);
// //   console.log("CLIENT",client)

// // client.calls
// //       .create({
// //          url: 'http://demo.twilio.com/docs/voice.xml',
// //          to: '+918461809095',
// //          from: '+12537852505'
// //        },function(err,call){
// // if(err){
// //   console.log("ERR",err)
// // }else{
// //   console.log("CALL",call.sid)
// // }
// //        })
//     //  }

const make_call = require("../models/make_call.js");

// exports.make_call = async(req,res)=>{
// var request = require('request');

// var dataString = 'From=8103988072&To=7000420819&CallerId=08047359942';


// const data = {
//   Sid: req.body.Sid,
//   From:req.body.From,
//   To:req.body.To,
//   CallerId:req.body.CallerId,
//   CallerType: req.body.CallerType,
//  // Status:Status,
     
// }
// var options = {
//     url: 'https://<d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4>:<856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e><@api.exotel.com>/v1/Accounts/<sveltosetechnologies2>/Calls/connect',
//     method: 'POST',
//     body: dataString,
// };

// body: JSON.stringify({
//   "request": {
//     Sid: req.body.Sid,
//     From: req.body.From,
//     To:req.body.To,
//     CallerId: req.body.CallerId,
//     CallerType:req.body.CallerType,
//     Status:req.body.Status,
//     StartTime:req.body.StartTime,
//     EndTime :req.body.EndTime,
//     Duration:req.body.Duration,
//     Price:req.body.Price,
//     RecordingUrl:req.body.RecordingUrl
//   }
// })



// let result = await make_call.create(data);


// console.log("result",result)

// request(options, function (error, response) {
// if (error){
//  throw new Error(error);
//  res.json(error) ;
// console.log(response.body);
// }
// res.send(response.body);
// var serverRes = response.body
// return serverRes
// }); 


// // function callback(error, response, body) {
// //     if (!error && response.statusCode == 200) {
// //         console.log(body);
// //     }
// // }

// //  request(options, callback);

// }


//$$$$$$$$$$$$$$$
// exports.make_call = async (req, res) => {
// var request = require('request');

//     key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
//     sid="sveltosetechnologies2"
//     token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e	"
//     from="8103988072"
//     to="7000420819"
    

//     const options = {
//         Sid: sid,
//         From:from,
//         To:to,
//         CallerId:req.body.CallerId,
//         CallerType: req.body.CallerType,
//        // Status:Status,
           
//       }




//     const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
//     const axios = require('axios')
//     url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls/connect"
//     axios.post(url, 
//        formUrlEncoded({
//       "From": 7000420819,
//       "To": 8103988072,
//       "CallerId":'080-473-59942',
//       "CallerType": 'promo',
//     }),
  

//     {   
//         withCredentials: true,
//         headers: {
//             "Accept":"application/x-www-form-urlencoded",
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//       },
//       )
//       request(options, function (error, response, body) {
//         if (response) {
//           var toparse = response.body;
//           res.status(200).send(toparse);
//         }
//         if (error) {
//           res.status(200).send(error);
//         }
//       });
    
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
//     // })

//   }


//@@@@@@@@@@@@@@@


// exports.make_call = async(req,res) =>{
  
// }




exports.make_call= async(req,res) =>{

key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
sid="sveltosetechnologies2"
token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e	"
from="8103988072"
to="7000420819"
callerid = "08047359942"

  var request = require('request');
var dataString = 'From=8103988072&CallerId=08047359942&Url=http://my.exotel.com/Exotel/exoml/start_voice/926';
console.log("dataString",dataString)
var options = {
  //  url: 'https://<your_api_key>:<your_api_token><subdomain>/v1/Accounts/<your_sid>/Calls/connect',
  url: "https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls/connect",
    method: 'POST',
    body: dataString
};

console.log("options",options)

request(options, function (error, response) {
  if (error){
   throw new Error(error);
   //res.json(error) ;
 //console.log(response.body);
  }
  res.send(response.body);
  var serverRes = response.body
  console.log("SERVER",serverRes)
  return serverRes
}); 

// let result = await make_call.create(options);

}






















//       //.then(call => console.log(call.sid));


// //       const accountSid = 'ACe1f44c47e56070de532ae55127e38795'; // Your Account SID from www.twilio.com/console
// // const authToken = 'a84a0a5c3930c08cf3a1bd25a8ac3cbe'; // Your Auth Token from www.twilio.com/console

// // //const twilio = require('twilio');
// // const client = new twilio(accountSid, authToken);

// // client.messages
// //   .create({
// //     body: 'Hello from Node',
// //     to: '918461809095', // Text this number
// //     from: '+12537852505', // From a valid Twilio number
// //   })
  
// //   .then((message) => console.log("sent",message.sid));
