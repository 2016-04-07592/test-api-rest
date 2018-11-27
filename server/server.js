var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });


var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    CompletedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook Dinner'
});
newTodo.save().then((doc) => {
        console.log('Saved todo', doc);
    },
    (err) => {
        console.log('Unable to save todo', err);
    }
);