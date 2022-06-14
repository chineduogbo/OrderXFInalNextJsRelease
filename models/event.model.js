const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const eventSchema = new Schema(
    {
        eventname: { type: String, required: true },
        username: { type: String, required: true },
        userid: { type: String, required: true },
        active: { type: Boolean },
        lat: {
            type: String
        },
        lon: {
            type: String
        },
        DateCreated: { type: Date, required: true },
        eventaddress: { type: String },
        Stock: [{
            Name: { type: String },
            Quantity: { type: String },
            Price: { type: String },
            Category: { type: String }
        }],
        Table: [{
            Name: { type: String },
            WaiterUsername: { type: String },
            Lat: {
                type: String
            },
            Lon: {
                type: String
            }
        }],
        LinkedEvent: [{
            Name: { type: String },
            EventName: { type: String },
            EventUserName: { type: String }
        }],
        Waiter: [{
            Name: { type: String },
            WaiterUsername: { type: String },
        }]
    },
    {
        timestamps: true,
    }
);

let events = null;
//const Event = mongoose.model('Event', eventSchema);

try {
    events = mongoose.model('Event')
} catch (error) {
    events = mongoose.model('Event', eventSchema)
}
module.exports = events;