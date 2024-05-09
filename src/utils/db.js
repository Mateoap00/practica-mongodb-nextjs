import mongoose from 'mongoose';

async function db() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practicas');
        console.log('Connected!');
        return mongoose.connection;
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}

export default db;
