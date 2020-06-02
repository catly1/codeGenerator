const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const key = require('./config/keys');

const codes = require('./routes/codes');

const app = express();
const PORT = process.env.PORT || 8080; 

mongoose.connect(process.env.MONGODB_URI || key.mongoURI, {
    useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/', codes);

app.listen(PORT, () => {
    console.log(`Server is starting at PORT: ${PORT}`);
});