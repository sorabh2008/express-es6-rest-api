const mongoosse = require('mongoose');
const {Schema} = mongoosse;

const bookModel = new Schema(
    {
        name: {type: String},
        price: {type: Number},
        author: {type: String},
        unit: {type: String},
        currency: {type: String}
    }
);

module.exports = mongoosse.model('book', bookModel);