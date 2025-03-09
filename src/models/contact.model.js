const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    contact: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v.toString()); // Ensures exactly 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit contact number!`
        }
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true, versionKey: false })


module.exports = mongoose.model("Contact", contactSchema);