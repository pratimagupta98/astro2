const EventList = require("../models/eventList");
const resp = require("../helpers/apiResponse");

exports.add_eventList = async (req, res) => {

    const { event_name } = req.body;

    const newEventList = new EventList({
        event_name: event_name
    });


    newEventList
        .save()
        .then((data) => resp.successr(res, data))
        .catch((error) => resp.errorr(res, error));
}



exports.EventListAdmin = async (req, res) => {
    await EventList.find()
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


exports.dlt_eventList = async (req, res) => {
    await EventList.deleteOne({ _id: req.params.id })
        .then((data) => resp.deleter(res, data))
        .catch((error) => resp.errorr(res, error));
};
