//CRUD operations

const { MongoClient, ObjectID } = require('mongodb')
// const {MongoClient, ObjectId} = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    if (!db) {
        throw new Error('ops!! something went wrong, while coonecting to datbase!')
    }

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // })

    //     db.collection('tasks').insertMany([{
    //         description: 'Clean the House',
    //         completed:true
    //     },
    // {
    //     description: 'complete this api by tonight',
    //     completed:false
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('ops! cant insert document!' )
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('tasks').findOne({
    //     _id: new
    //         ObjectID("5c95159a5219a125e1ed2341")
    // }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5c9514320ad8af2499ad4392")
    // }, 
    // {
    //         $inc: {
    //             age: 1
    //         },


    //     }).then((result) => {
    //         // console.log(result)
    //         db.collection('users').findOne({
    //             _id: new
    //                 ObjectID("5c9514320ad8af2499ad4392")
    //         }, (error, user) => {
    //             console.log(user)
    //         })
    //     }).catch((error) => {
    //         console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('users').deleteMany({
    //     age: 32
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: "Clean the House"
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

})