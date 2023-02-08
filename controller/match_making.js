 
const matchMaking = require("../models/match_making.js");
var sdkClient = require("sdk");

var btoa = require('btoa');
exports.make_Making = async (req, res) => {
var request = require('request');

     

    const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    const axios = require('axios')
    url="https://json.astrologyapi.com/v1/match_horoscope"
    axios.post(url, 
       formUrlEncoded({
      "From": req.body.From,   //USER
      "To": req.body.To,       //ASTRO
      "userid":req.body.userid,
      "astroid" :req.body.astroid,

      "CallerId":'080-473-59942',
      "CallerType": 'promo',
      // "Status" :"Status",
      // "StartTime":"StartTime",
      // "EndTime" :"EndTime",
      // "Duration" :"Duration",
      // "Price" :"Price",
      // "RecordingUrl":"RecordingUrl"

    }),
  

    {   
        withCredentials: true,
        headers: {
            "Accept":"application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
        }
      },
      )
      // request(options, function (error, response, body) {
      //   if (response) {
      //     var toparse = response.body;
      //     res.status(200).send(toparse);
      //   }
      //   if (error) {
      //     res.status(400).send(error);
      //   }
      // });


      .then(async(response) => {
         console.log(`statusCode: ${res.statusCode}`)
         console.log("RES",response)
         var requestBody = {
          From: req.body.From,   //USER
        To: req.body.To,       //ASTRO
        userid:req.body.userid,
        astroid :req.body.astroid,
      
         }
        
     // res.json({data:response.data})
 //    res.send(JSON.stringify(response.data));

     res.json({
      status:"success",
      data:response.data,
      userid:req.body.userid,
      astroid :req.body.astroid,
      
     })
      // var serverRes = response.body
      // return serverRes
     
   
       let result = await make_call.create(requestBody)
       console.log("CREATED DATA",result)
    
      
      })
     
      .catch((error) => {
        console.error(error)

    
    //   .then((res) => {
    //   console.log(`statusCode: ${res.statusCode}`)
    //   console.log(res)
    //   res.send(response.body);
    //   var serverRes = response.body
    //   return serverRes
    // })
    // let result = await make_call.create(data)

    // .catch((error) => {
    //   console.error(error)
     })

  }



  var $ = require( "jquery" );


// exports.match_horoscope = async (req, res) => {
//   var jsdom = require('jsdom');
//   const { JSDOM } = jsdom;
//   const { window } = new JSDOM();
//   const { document } = (new JSDOM('')).window;
//   global.document = document;
  
//   var $ = jQuery = require('jquery')(window);
//   var api = 'planets';
// var userId = '621855';
// var apiKey = 'b7286553ee49b95a0087d81b3a9d99e0';
// var data = {
// day:12,
// month:3,
// year:1992,
// hour:2,
// min:23,
// lat:19.132,
// lon:72.342,
// tzone:5.5
// };
// var request = $.ajax({
// url: "https://json.astrologyapi.com/v1/match_horoscope"+`${api}`,
// method: "GET",
// dataType:'json',
// headers: {
// "authorization": "Basic " + btoa(`${userId}`+":"+`${apiKey}`),
// "Content-Type":'application/json'
// },
// data:JSON.stringify(data)
// });
 
//     var $ = require("jquery")(window);

//     //  function getLocationFromIp() {
//     //   var request =   $.ajax({
//     //       url: "https://json.astrologyapi.com/v1/match_horoscope"+`${api}`,
//     //         type: "POST",
//     //         dataType: "json",
//     //         headers: {
//     //           "authorization": "Basic " + btoa(`${userId}`+":"+`${apiKey}`),
//     //           "Content-Type":'application/json'
//     //           },
//     //           data:JSON.stringify(data)
//     //           });
//     //     //     success: function() {
//     //     //         console.log("success!")
//     //     //     },
//     //     //     error: function() {
//     //     //         console.log("error", arguments[2])
//     //     //     }
//     //     // });
//     // }
//     // var ip = getLocationFromIp();
//     // console.log(ip);
// //}
// //);
// request.then( function(resp){
// console.log(resp);
// }, function(err){
// console.log(err);
// });
// }

// 55555555555555
// exports.match_horoscope = async (req, res) => {
//   var jsdom = require('jsdom');
//   const { JSDOM } = jsdom;
//   const { window } = new JSDOM();
//   const { document } = (new JSDOM('')).window;
//   global.document = document;
  
//   var $ = jQuery = require('jquery')(window);
//   var api = 'planets';
// var userId = '621972';
// var apiKey = '3babf3f8325166341e70506b10fc2a8e';
// var data = {
//   day:12,
//   month:3,
//   year:1992,
//   hour:2,
//   min:23,
//   lat:19.132,
//   lon:72.342,
//   tzone:5.5
// };
// //https://json.astrologyapi.com/v1/match_making_report
// var request = $.ajax({
//   url: "https://json.astrologyapi.com/v1/"+`${api}`,
// method: "POST",
// dataType:'json',
// headers: {
// "authorization": "Basic " + btoa(`${userId}`+":"+`${apiKey}`),
// "Content-Type":'application/json' 
// },
// data:JSON.stringify(data)
// });
 
// request.then( function(resp){
// console.log(resp);
// }, function(err){
// console.log(err);
// });
// }
 //6666666666


 exports.match_making = async (req, res) => {
  var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = (new JSDOM('')).window;
  global.document = document;
  
  var $ = jQuery = require('jquery')(window);

  var api = 'match_making_report';
  var userId = '622026';
  var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
//   var api = 'planets';
// var userId = '621972';
// var apiKey = '3babf3f8325166341e70506b10fc2a8e';


// var data = {
//   day:12,
//   month:3,
//   year:1992,
//   hour:2,
//   min:23,
//   lat:19.132,
//   lon:72.342,
//   tzone:5.5
// };
var data = {
  m_day: req.body.m_day,
  m_month: req.body.m_month,
  m_year: req.body.m_year,
  m_hour: req.body.m_hour,
  m_min: req.body.m_min,
  m_lat: 19.132,
  m_lon: 72.342,
  m_tzone: 5.5,
  f_day: 03,
  f_month:req.body.f_month,
  f_year: req.body.f_year,
  f_hour: req.body.f_hour,
  f_min:req.body.f_min,
  f_lat: 19.132,
  f_lon: 72.342,
  f_tzone: 5.5,
};
//https://json.astrologyapi.com/v1/match_making_report
var request = $.ajax({
  url: "https://json.astrologyapi.com/v1/match_making_report",
method: "POST",
dataType:'json',
headers: {
"authorization": "Basic " + btoa(`${userId}`+":"+`${apiKey}`),
"Content-Type":'application/json' 
},
data:JSON.stringify(data)
});
 
request.then( function(resp){
console.log(resp);
res.status(200).json({
  status:true,
  msg:"success",
  data :resp
})
}, function(err){
console.log(err);
});
}

exports.dailyhoroscope = async (req, res) => {

  //Zodiac sign
var zodiacName = "aries";
var timezone = 5.5;
var userId = '622026';
var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
//Daily Horoscope APIs need to be called
//var resource = "sun_sign_prediction/daily/" + `${zodiacName}`;

// call dailyHoroCall method for daily predictions
// var dailyHoroData = sdkClient.dailyHoroCall(
//   resource,
//   zodiacName,
//   timezone,
//   function (error, result) {
//     if (error) {
//       console.log("Error returned!!");
//     } else {
//       console.log("Response has arrived from API server --");
//       console.log(result);
//     }
//   }
// );
// }

var request = $.ajax({
  url: "https://json.astrologyapi.com/v1/horoscope_prediction/daily/next/:aries",
method: "POST",
dataType:'json',
headers: {
"authorization": "Basic " + btoa(`${userId}`+":"+`${apiKey}`),
"Content-Type":'application/json' 
},
//data:JSON.stringify(data)
});
 
request.then( function(resp){
console.log(resp);
res.status(200).json({
  status:true,
  msg:"success",
  data :resp
})
}, function(err){
console.log(err);
});
}