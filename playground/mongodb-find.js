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

    db.collection('Todos').find({ _id: new ObjectID('5bf2bf8dbdd31c2560a46b84') }).toArray().then(
        (docs) => {
            console.log(':::::::Todos Data:::::');
            console.log(JSON.stringify(docs, undefined, 2));
        },
        (err) => {

            console.log('something has happened' + err);
        }
    );


    //client.close();
});