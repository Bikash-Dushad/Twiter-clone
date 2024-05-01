const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const textSchema = new Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},
{
    timestamps: true
});
const Text = mongoose.model('Text', textSchema);

module.exports = Text;