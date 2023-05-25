import mongoose from 'mongoose';


async function conn(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/my_database');
        console.log('Database is Connected')
    }catch(err){
        console.log('error',err)
    }
}


export default conn;