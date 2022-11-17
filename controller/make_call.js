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



exports.make_call = async (req, res) => {

    key="d909e2e0120d0bcbd2ef795dd19eb2e97c2f8d78d8ebb6d4"
    sid="sveltosetechnologies2"
    token="856371fe6a97e8be8fed6ab14c95b4832f82d1d3116cb17e	"
    from="7000420819"
    to="8103988072"


    const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    const axios = require('axios')
    url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Calls/connect"
    axios.post(url, 
       formUrlEncoded({
      "From": 7000420819,
      "To": 8103988072,
      "CallerId":'080-473-59942',
      "CallerType": 'promo',
    }),
    {   
        withCredentials: true,
        headers: {
            "Accept":"application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
        }
      },
      )
    .then((res) => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })

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
