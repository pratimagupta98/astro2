
const make_call = require("../models/make_call.js");

 
exports.make_call = async (req, res) => {
var request = require('request');

    key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
    sid="sveltosetechnologies2"
    token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e	"
    from=req.body.from     
    to=req.body.to
    
 

    const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    const axios = require('axios')
    url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls/connect.json"
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


  exports.callStatus = async (req, res) => {
    var request = require('request');
    
        key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
        sid="sveltosetechnologies2"
        token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e	"
        from=req.body.from     
        to=req.body.to
        
     
    
        const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
        const axios = require('axios')
        url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls"+"a2f80c3aec91e3747a14198d32ae16bu"+".json"
        axios.get(url, 
           formUrlEncoded({
       
    
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
        
    
    
  //         .then(async(response) => {
  //           console.log(`statusCode: ${res.statusCode}`)
  //           console.log("RES",response)
       
  // })
  //         .catch((error) => {
  //           console.error(error)
  //         })
  .then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
      }