const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const orderSchema = new Schema(
    {
        Eventname: { type: String, required: true },
        EventUsername: { type: String, required: true },
        UserName: { type: String, required: true },


        addons: [{ type: String }],
        order: [
            {
                StockName: { type: String },
                quantity: { type: String },
                orderdescription: { type: String },
                Price: { type: DECIMAL },
                DateOrdered: { type: Date }
            }
        ],
        DateOpened: { type: Date },
        DateClosed: { type: Date },
        Active: { type: Boolean },
        WaiterUserName: { type: String }
    },
    {
        timestamps: true,
    }
);

// const Order = mongoose.model('Order', orderSchema);

let Orders = null;
//const Event = mongoose.model('Event', eventSchema);

try {
    Orders = mongoose.model('Order')
} catch (error) {
    Orders = mongoose.model('Order', eventSchema)
}
module.exports = Orders;

