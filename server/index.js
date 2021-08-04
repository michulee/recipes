// https://npmcompare.com/compare/axios,knex,orm,sequelize,swagger-express
// axios vs sequelize

// https://www.youtube.com/watch?v=Hl7diL7SFw8&ab_channel=PedroTech
// command to start express 'node index.js'

// nodemon is like live server
// "start": "nodemon index.js"
// now we can use command 'npm start'
const express = require('express');
const app = express();

// to get access to json body directly to send below in Postman via POST req
/**
 * {
*      'title': 'Cookie',
*      'caption': 'This is a cookie',
*      'text': 'Delicious cookie',
 * }
 */
app.use(express.json());

const db = require('./models');


const postRouter =  require('./routes/Posts');
app.use('/posts', postRouter);

// const dotenv = require("dotenv");
// dotenv.config({ path: "../.env" });

// connect MySQL db with code using sequelize
// in config.json update credentials to db so it can connect
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    })
}).catch((error) => {
    console.log(error.message);
})

// app.listen(3001, () => {
//     console.log('Server running on port 3001');
// })

// sequelize init

