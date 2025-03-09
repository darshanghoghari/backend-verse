require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT;
const databaseConnection = require('./src/database/database');
const contactRoute = require('./src/routes/contact.routes');


app.use(express.json());
const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Enjoy Server service"
    })
})

app.use('/contact', contactRoute);

databaseConnection().then(
    () => {
        app.listen(PORT, () => {
            console.log(`Server Running On ${PORT}`);
        })
    }
).catch((e) => {
    console.log(e);
});