const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: { type: String, required: true },
    active: { type: Boolean, required: true },
    lastlogin: { type: Date, required: true },
    FullName: { type: String },
    drinklimit: { type: String },
    FavouriteBrand: { type: String },
    PhoneNumber: { type: String }
},
    {
        timestamps: true,
    });

// const User = mongoose.model('User', userSchema);
let Users = null;
//const Event = mongoose.model('Event', eventSchema);

try {
    Users = mongoose.model('User')
} catch (error) {
    Users = mongoose.model('User', eventSchema)
}
module.exports = Users;