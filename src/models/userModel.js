const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favorite: { type: [String] }
},
{
    timestamps: true
},
{
    versionKey: false
});

const user = mongoose.model('users', userSchema);

module.exports = user