import mongoose from 'mongoose';

const {
    USER_APP_MONGODB_HOST,
    USER_APP_MONGODB_DATABASE
} = process.env

console.log(USER_APP_MONGODB_DATABASE)
console.log(USER_APP_MONGODB_HOST)

const MONGODB_URI = `${USER_APP_MONGODB_HOST}/${USER_APP_MONGODB_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log('database connected: ', db.connection.name))
    .catch(err => console.log(err))