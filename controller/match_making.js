 
const matchMaking = require("../models/match_making.js");

exports.make_Making = async (req, res) => {
var request = require('request');

     

    const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    const axios = require('axios')
    url="https://json.astrologyapi.com/v1/match_birth_details"
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




  
var api = 'planets';
var userId = '621855';
var apiKey = 'b7286553ee49b95a0087d81b3a9d99e0';
var data = {
day:12,
month:3,
year:1992,
hour:2,
min:23,
lat:19.132,
lon:72.342,
tzone:5.5
};
var request = $.ajax({
url: "https://json.astrologyapi.com/v1/"+api,
method: "POST",
dataType:'json',
headers: {
"authorization": "Basic " + btoa(userId+":"+apiKey),
"Content-Type":'application/json'
},
data:JSON.stringify(data)
});

request.then( function(resp){
console.log(resp);
}, function(err){
console.log(err);
});

