import mongoose from 'mongoose'

const Connection = async(username, password) =>{
    const URL = `mongodb://${username}:${password}@chatapp-shard-00-00.jt0sl.mongodb.net:27017,chatapp-shard-00-01.jt0sl.mongodb.net:27017,chatapp-shard-00-02.jt0sl.mongodb.net:27017/WHATSAPPCLONE?ssl=true&replicaSet=atlas-2zzmxc-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{ useUnifiedTopology : true , useNewUrlParser : true })
        console.log('Database Connected successfully');
    }
    catch(error){
        console.log('Error while connecting to mongoDB', error);
    }
}

export default Connection;