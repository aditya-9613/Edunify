import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const database = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})


export async function dbConnection(){
    const connect = await database.getConnection()
    console.log(connect);
}



dbConnection();