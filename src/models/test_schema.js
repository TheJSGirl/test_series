const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TestSchema = new Schema({
    type: String,
    testTime: Number,
    testCost: Number,
    questionsEn: [
            {
            ques_title: String,
            ques_des  : String,
            opt_A     : String,
            opt_B     : String,
            opt_C     : String,
            opt_D     : String       
        }
    ],
     questionsHn: [
            {
            ques_title: String,
            ques_des  : String,
            opt_A     : String,
            opt_B     : String,
            opt_C     : String,
            opt_D     : String       
        }
    ]
});

const Test  = mongoose.model('test1', TestSchema);

module.exports = Test;