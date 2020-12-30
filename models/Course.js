var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    crfirstName: String,
    crlastName: String,
    crPhone: Number
});

var Course = mongoose.model("Course",courseSchema);

module.exports = Course;