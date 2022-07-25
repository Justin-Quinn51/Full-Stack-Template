const mongoose = require('mongoose')
const testSchema = new mongoose.Schema({
    item1 : {
        type: String,
    },
    item2 : {
        type: String
    }
})

module.exports = mongoose.model('testModel', testSchema,
'test_collection')
