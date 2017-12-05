var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    id: Number,
    title: String,
    technologies: String,
    summary: String,
    category: String,
    images: [],
    links: [],
    'github-link': String
});

var Project = mongoose.model('Project', projectSchema);


router.get('/', function (req, res, next){
  Project.find({}, function (err, projects){
    if(err) {
      res.send(err);
    }
    console.log(projects);
    res.status(200).json(projects);
  });

});

router.get('/:id', function (req, res, next) {
  Project.findOne({_id: req.params.id}, function (err, project){
    if(err) {
      res.send(err);
    }
    res.status(200).json(project);
  });
});




module.exports = router;
