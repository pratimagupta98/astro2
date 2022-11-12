const twilio = require('twilio');




// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.make_call = async (req, res) => {
client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+8461809095',
         from: '+12537852505'
       },function(err,call){
if(err){
  console.log("ERR",err)
}else{
  console.log("CALL",call.sid)
}
       })
      }
      //.then(call => console.log(call.sid));


//       const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
// const authToken = 'your_auth_token'; // Your Auth Token from www.twilio.com/console

// const twilio = require('twilio');
// const client = new twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Hello from Node',
//     to: '+12345678901', // Text this number
//     from: '+12345678901', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));
