import { User } from "@/models/user";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, { dbName:'work_manager' });
        console.log('Database connected')

        // Printing connection host
        // console.log(connection)
        console.log('Connected with the host ', connection.host)

        // Testing and creating new user
        // const user = new User({
        //     name: 'Aayush Tiwari',
        //     email: 'aayush@gmail.com',
        //     password: 'testpassword',
        //     about: 'This is only for testing'
        // })

        // await user.save()
        

    } catch (error) {
        console.log('Error occured while connecting to the database')
    }
}