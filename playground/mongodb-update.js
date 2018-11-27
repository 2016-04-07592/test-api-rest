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

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bfc4edb5fff589ce7fb7908')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {

        //console.log(`The document after update is :::::::::::::::::: ${result} ::::::::::::::::: `);
        console.log(result);
    });

    //client.close();
});