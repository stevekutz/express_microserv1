const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const posts = {};

 app.get('/posts' , (req, res) => {
    res.send(post);
 });

 app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    psots[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
 
 });

 app.listen(4000, () => {
    console.log("listening on port 4000");
 })