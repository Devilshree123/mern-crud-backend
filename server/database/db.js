import mongoose from "mongoose"


const connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crud-app.zhzbi0m.mongodb.net/?retryWrites=true&w=majority`
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log("database connected successfully")
    } catch (error) {
        console.log("error while connecting to database in db.js",error)
    }
}

export default connection;