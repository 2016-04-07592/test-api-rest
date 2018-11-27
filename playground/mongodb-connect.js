//const MongoClient = require('mongodb').MongoClient;

const mongodb = require('mongodb');

const { MongoClient, ObjectID } = mongodb;

// var id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {

    if (err) {
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('succesfully connected to the Mongo Server');

    // const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {

    //     if (err) {
    //         return console.log('Oops something have happended' + err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    // db.collection('Users').insertOne({

    //     name: 'Joseph',
    //     age: 25,
    //     location: 'Dar es salaam'

    // }, (err, result) => {

    //     if (err) {
    //         console.log('Ops something Happended' + err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    //     console.log(result.ops[0]._id.getTimestamp())
    // });


    client.close();
});