const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());


app.get('/', (req, res, next) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})