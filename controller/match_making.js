 
const matchMaking = require("../models/match_making.js");
var sdkClient = require("../sdk");
var $ = require( "jquery" );
var btoa = require('btoa');
var request = require('request');

// exports.match_making_detailed_report = async (req, res) => {
// var request = require('request');

     

//     const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
//     const axios = require('axios')
//     url="https://json.astrologyapi.com/v1/match_horoscope"
//     axios.post(url, 
//        formUrlEncoded({
//       "From": req.body.From,   //USER
//       "To": req.body.To,       //ASTRO
//       "userid":req.body.userid,
//       "astroid" :req.body.astroid,

//       "CallerId":'080-473-59942',
//       "CallerType": 'promo',
//       // "Status" :"Status",
//       // "StartTime":"StartTime",
//       // "EndTime" :"EndTime",
//       // "Duration" :"Duration",
//       // "Price" :"Price",
//       // "RecordingUrl":"RecordingUrl"

//     }),
  

//     {   
//         withCredentials: true,
//         headers: {
//             "Accept":"application/x-www-form-urlencoded",
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//       },
//       )
      

//       .then(async(response) => {
//          console.log(`statusCode: ${res.statusCode}`)
//          console.log("RES",response)
//          var requestBody = {
//           From: req.body.From,   //USER
//         To: req.body.To,       //ASTRO
//         userid:req.body.userid,
//         astroid :req.body.astroid,
      
//          }

//      res.json({
//       status:"success",
//       data:response.data,
//       userid:req.body.userid,
//       astroid :req.body.astroid,
      
//      })
//        let result = await make_call.create(requestBody)
//        console.log("CREATED DATA",result)
//       })
//       .catch((error) => {
//         console.error(error)

    
    
//      })

//   }



  



 
//  exports.match_making_detailed_report = async (req, res) => {
//   var jsdom = require('jsdom');
//   const { JSDOM } = jsdom;
//   const { window } = new JSDOM();
//   const { document } = (new JSDOM('')).window;
//   global.document = document;
  
//   var $ = jQuery = require('jquery')(window);

//   var api = 'custom_match_profiles';
//   var userId = '622026';
//   var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
 
// // var data = {
// //   m_day: req.body.m_day,
// //   m_month: req.body.m_month,
// //   m_year: req.body.m_year,
// //   m_hour: req.body.m_hour,
// //   m_min: req.body.m_min,
// //   m_lat: 19.132,
// //   m_lon: 72.342,
// //   m_tzone: 5.5,
// //   f_day: 03,
// //   f_month:req.body.f_month,
// //   f_year: req.body.f_year,
// //   f_hour: req.body.f_hour,
// //   f_min:req.body.f_min,
// //   f_lat: 19.132,
// //   f_lon: 72.342,
// //   f_tzone: 5.5,
// // };
 
// var data = {
//   m_day:req.body.m_day,
//   m_month: req.body.m_month,
//   m_year: req.body.m_year,
//   m_hour: req.body.m_hour,
//   m_min: req.body.m_min,
//   m_lat: req.body.m_lat,
//   m_lon: req.body.m_lon,
//   m_tzone:req.body.m_tzone,
//   f_day: req.body.f_day,
//   f_month: req.body.f_month,
//   f_year: req.body.f_year,
//   f_hour: req.body.f_hour,
//   f_min: req.body.f_min,
//   f_lat: req.body.f_lat,
//   f_lon: req.body.f_lon,
//   f_tzone:req.body.f_tzone,
// };
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
// res.status(200).json({
//   status:true,
//   msg:"success",
//   data :resp
// })
// }, function(err){
// console.log(err);
// });
// }


exports.match_making_report = async (req, res) => {
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
data:JSON.stringify(       )
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
 
exports.dailyHoroscope = async (req, res) => {

  //Zodiac sign
var zodiacName = req.body.zodiacName;
var timezone = 5.5;
var userId = '622026';
var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
//Daily Horoscope APIs need to be called
var resource = "sun_sign_prediction/daily/" + `${zodiacName}`;
 //call dailyHoroCall method for daily predictions
var dailyHoroData = sdkClient.dailyHoroCall(
  resource,
  zodiacName,
  timezone,
  function (error, result) {
    if (error) {
      console.log("Error returned!!");
      res.status(405).json({
        error
        })
  
    } else {
      console.log("Response has arrived from API server --");
      console.log(JSON.parse(result));
        
res.status(200).json({
  status:true,
  msg:"success",
  // data :result
  data: JSON.parse(result)
})
        
     }
  }
);
}


exports.weeklyHoroscope = async (req, res) => {

  //Zodiac sign
var zodiacName = req.body.zodiacName;
var timezone = 5.5;
var userId = '622026';
var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
//Daily Horoscope APIs need to be called
 
var resource = "horoscope_prediction/weekly/" + `${zodiacName}`;

 //call dailyHoroCall method for daily predictions
var dailyHoroData = sdkClient.dailyHoroCall(
  resource,
  zodiacName,
  timezone,
  function (error, result) {
    if (error) {
      console.log("Error returned!!");
      res.status(405).json({
        error
        })
    } else {
      console.log("Response has arrived from API server --");
      console.log(JSON.parse(result));
        
res.status(200).json({
  status:true,
  msg:"success",
  // data :result
  data: JSON.parse(result)
})
        
     }
  }
);
}


exports.monthlyHoroscope = async (req, res) => {

  //Zodiac sign
var zodiacName = req.body.zodiacName;
var timezone = 5.5;
var userId = '622026';
var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
//Daily Horoscope APIs need to be called
 
 
var resource = "horoscope_prediction/monthly/" +  `${zodiacName}`
 //call dailyHoroCall method for daily predictions
var dailyHoroData = sdkClient.dailyHoroCall(
  resource,
  zodiacName,
  timezone,
  function (error, result) {
    if (error) {
      console.log("Error returned!!");
      res.status(405).json({
        error
        })
    } else {
      console.log("Response has arrived from API server --");
      console.log(JSON.parse(result));
        
res.status(200).json({
  status:true,
  msg:"success",
  // data :result
  data: JSON.parse(result)
})
        
     }
  }
);
}


exports.ChineseHoroscope = async (req, res) => {
  var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = (new JSDOM('')).window;
  global.document = document;
  
  var $ = jQuery = require('jquery')(window);

  var api = 'chinese_zodiac';
  var userId = '622026';
  var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
 


  var data = {
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    hour: req.body.hour,
    min: req.body.min,
    lat: req.body.lat,
    lon: req.body.lon,
    tzone: req.body.tzone,
  };
 
//https://json.astrologyapi.com/v1/match_making_report
var request = $.ajax({
 // url: "https://json.astrologyapi.com/v1/match_making_report",
  url: "https://json.astrologyapi.com/v1/"+`${api}`,
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
res.status(405).json({
err
})
});
}












//var userId = '621972';
// var apiKey = '3babf3f8325166341e70506b10fc2a8e';


exports.ManglikDosh = async (req, res) => {
  var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = (new JSDOM('')).window;
  global.document = document;
  
  var $ = jQuery = require('jquery')(window);

  var api = 'manglik';
  var userId = '622026';
  var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
 


 
  var data = {
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    hour: req.body.hour,
    min: req.body.min,
    lat: req.body.lat,
    lon: req.body.lon,
    tzone: req.body.tzone,
  };
//https://json.astrologyapi.com/v1/match_making_report
var request = $.ajax({
 // url: "https://json.astrologyapi.com/v1/match_making_report",
  url: "https://json.astrologyapi.com/v1/"+`${api}`,
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
res.status(405).json({
err
})
});
}

exports.kalsharpDosh = async (req, res) => {
  var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = (new JSDOM('')).window;
  global.document = document;
  
  var $ = jQuery = require('jquery')(window);

  var api = 'kalsarpa_details';
  var userId = '622026';
  var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
 


  var data = {
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    hour: req.body.hour,
    min: req.body.min,
    lat: req.body.lat,
    lon: req.body.lon,
    tzone: req.body.tzone,
  };
//https://json.astrologyapi.com/v1/match_making_report
var request = $.ajax({
 // url: "https://json.astrologyapi.com/v1/match_making_report",
  url: "https://json.astrologyapi.com/v1/"+`${api}`,
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
res.status(405).json({
err
})
});
}

exports.PitriDosh = async (req, res) => {
  var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = (new JSDOM('')).window;
  global.document = document;
  
  var $ = jQuery = require('jquery')(window);

  var api = 'pitra_dosha_report';
  var userId = '622026';
  var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
 
 
  var data = {
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    hour: req.body.hour,
    min: req.body.min,
    lat: req.body.lat,
    lon: req.body.lon,
    tzone:req.body.tzone,
  };
//https://json.astrologyapi.com/v1/match_making_report
var request = $.ajax({
 // url: "https://json.astrologyapi.com/v1/match_making_report",
  url: "https://json.astrologyapi.com/v1/"+`${api}`,
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
res.status(405).json({
err
})
});
}


exports.geo_detail = async (req, res) => {
  var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = (new JSDOM('')).window;
  global.document = document;
  
  var $ = jQuery = require('jquery')(window);

  var api = 'geo_details';
  var userId = '622026';
  var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
 
 
  var data = {
    place:  req.body.place,
    maxRows: 6,
 
 };
//https://json.astrologyapi.com/v1/match_making_report
var request = $.ajax({
 // url: "https://json.astrologyapi.com/v1/match_making_report",
  url: "https://json.astrologyapi.com/v1/"+`${api}`,
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
res.status(405).json({
err
})
});
}

exports.time_zone= async (req, res) => {
  var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { window } = new JSDOM();
  const { document } = (new JSDOM('')).window;
  global.document = document;
  
  var $ = jQuery = require('jquery')(window);

  var api = 'timezone';
  var userId = '622026';
  var apiKey = '82aa85420d5fdfd9eda55f0f4c69cb0a';
 
 
  var data = {
    country_code:  req.body.country_code,
    isDst: true,
 };
//https://json.astrologyapi.com/v1/match_making_report
var request = $.ajax({
 // url: "https://json.astrologyapi.com/v1/match_making_report",
  url: "https://json.astrologyapi.com/v1/"+`${api}`,
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
res.status(405).json({
err
})
});
}