const Bookevent = require("../models/bookevent");
const resp = require("../helpers/apiResponse");

exports.add_event = async (req, res) => {
    
    const { event_list,userid,date,country,state,city,mode,address,email,mobile} = req.body;

  const newBookevent= new Bookevent({
    event_list:event_list,
    userid:userid,
    date:date,
    country:country,
    state:state,
    city:city,
    mode:mode,
    address:address,
    email:email,
    mobile:mobile
   });
   
   
   newBookevent
       .save()
       .then((data) => resp.successr(res, data))
       .catch((error) => resp.errorr(res, error));
   }
  
 

exports.eventlist = async (req, res) => {
    await Bookevent.find()
      .sort({ createdAt: -1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.getone_event = async (req, res) => {
    await Bookevent.findOne({ _id: req.params.id })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.edit_event = async (req, res) => {
    await Bookevent.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    )
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  

  exports.dlt_event= async (req, res) => {
    await Bookevent.deleteOne({ _id: req.params.id })
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };
  