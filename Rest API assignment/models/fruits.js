const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create fruits Schema & model
const fruitsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    //rank: {
     //   type: String
    //},
    quantity: {
        type: Number
        
    }
    // add in geo location
});

const fruits = mongoose.model('fruits', fruitsSchema);

module.exports = fruits;
