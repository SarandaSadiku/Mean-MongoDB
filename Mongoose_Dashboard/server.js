// 1. Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// Create express app
var app = express();

// Use bodyParser to parse data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true}));
// 2. Set up file tree, including views:
// Tell server where views are and what templaing engine I'm using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// 5. Connect database to server
// Create connection to database
var connection = mongoose.connect("mongodb://localhost/dog_db");

// 5+ Create model for our data(dogs)
//  Create dog schema and attach it as a model to our database
var DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});
// Mongoose automatically looks for  the plural version of your model name, so a Dog model in mongoose looks for 'dogs' in Mongo.
var Dog = mongoose.model('Dog', DogSchema);


// 4+ Add routes
// Routes go here !
app.get('/', function(req, res){
    Dog.find({}, function(err, results){
        res.render('index', {dogs: results });

    });
});

// New route to create a dog in database, redirect to /
app.post('/', function(req, res){
    // Create a new dog
    Dog.create(req.body, function(err, result){
        res.redirect('/');
    });
});
app.get('/new', function(req, res){
    res.render('new');
});

app.get('/:id/edit', function(req, res){
    Dog.find({ _id: req.params.id }, function(err, response){
        if(err) {console.log(err);}

        res.render('edit', {dog : response [0]});

    });
});

app.post('/:id', function(req, res){
    Dog.update({_id: req.params.id }, req.body, function(err, result){
        res.redirect('/');
    });
});

app.post('/:id/delete', function(req, res){
    Dog.remove({_id: req.params.id }, function(err, result){
        if(err) {console.log(err); }
        res.redirect('/');
    });
});

app.get('/:id', function(req, res){
    Dog.find({ _id: req.params.id }, function(err, response){
        if(err) {console.log(err); }
        res.render('show', { dog: response[0]});

    });
});


app.listen(port, function(){
    console.log('Running on ', port);
});
