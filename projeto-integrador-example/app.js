const express = require('express');
const app = express();
const router = require('./routers/index')

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/', router);


app.listen(3000, () => console.log('Server started on port 3000'));