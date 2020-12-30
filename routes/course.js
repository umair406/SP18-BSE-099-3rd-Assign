var express = require('express');
var router = express.Router();
var Course = require('../models/Course');
/* GET home page. */
router.get('/', async function (req, res, next) {
    let courses = await Course.find();
    res.render('index', {title: 'Node JS Data App', courses: courses});
});

router.get('/create', function (req, res) {
    res.render('create', {title: 'Node JS Data App'});
});

router.post('/store', async function (req, res) {
    let course = new Course();
    course.crfirstName = req.body.crfirstName;
    course.crlastName = req.body.crlastName;
    course.crPhone = req.body.crPhone;
    await course.save();
    res.redirect('/');
});

router.get('/:id/edit', async function (req, res) {
    let course = await Course.findById(req.params.id);
    res.render('edit', {title: 'Node JS Data App', course: course});
});

router.post('/:id/update', async function (req, res) {
    let course = await Course.findByIdAndUpdate(req.params.id,req.body);
    res.redirect('/');
});

router.get('/:id/delete', async function (req, res) {
    let course = await Course.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;
