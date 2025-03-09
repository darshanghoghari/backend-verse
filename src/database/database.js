require('dotenv').config();
const { connect, connection } = require('mongoose');

const databaseConnection = async () => {
    try {
        await connect(process.env.MONGODB_URL);
        console.log("Database Connected.....");

    } catch (error) {
        console.log("MongoDB Connection Error : ", error);
        return;
    }
};

module.exports = databaseConnection;
