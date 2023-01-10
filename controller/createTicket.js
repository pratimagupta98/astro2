const Ticket = require("../models/createTicket");
const resp = require("../helpers/apiResponse");

exports.addTicket = async (req, res) => {
  const {userid, subject,desc,status,ticketNo} = req.body;

  create_randomString(9);
  function create_randomString(string_length) {
    (randomString = ""),
      (characters =
        "1234567890");
    for (var i, i = 0; i < string_length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomString;
  }
  const newTicket = new Ticket({
    userid:userid,
    
    subject: subject,
    desc:desc,
    status:status,
    ticketNo:randomString
  });
 
  newTicket
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }



exports.ticketList = async (req, res) => {
    await Ticket.find()
      .sort({ sortorder: 1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.dltTicket = async (req, res) => {
    await Ticket.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.getoneTicket = async (req, res) => {
    await Ticket.find({ userid: req.params.id })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };