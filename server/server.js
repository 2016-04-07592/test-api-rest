var express = require('express');
var bodyParser = require('body-parser');


var { mongoose } = require('./db/mongoose.js')
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.listen(3000, () => {
    console.log('Started on port 3000');
});



























































// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });
// newTodo.save().then((doc) => {
//         console.log('Saved todo', doc);
//     },
//     (err) => {
//         console.log('Unable to save todo', err); 
//     }
// );  

// var newTodo = new Todo({

//     text: '   sisi  '

// });

// newTodo.save().then((doc) => {
//         console.log('saved todo succesfully ', JSON.stringify(doc, undefined, 3));

//     },
//     (err) => {
//         console.log('Something went wrong', err);
//     }
// );



// var addUser = new User({
//     email: '     jmic@gmail.com      '

// });

// addUser.save().then((doc) => {
//         console.log('The new user added', doc);
//     },
//     (err) => {
//         console.log('Something went wrong', err);
//     });