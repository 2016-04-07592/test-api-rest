//const MongoClient = require('mongodb').MongoClient;

const mongodb = require('mongodb');

const { MongoClient, ObjectID } = mongodb;

var id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {

    if (err) {
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Succesfully connected to the Mongo Server');

    const db = client.db('TodoApp');

    //delete many
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Something to do' }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {

        console.log(result);
    });

    //client.close();
});