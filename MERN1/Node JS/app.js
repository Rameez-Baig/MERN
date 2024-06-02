const express = require('express');

//express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req,res) =>{
    res.sendFile('./Chapter_3/3_index.html', {root: __dirname});
});

app.get('/about', (req,res) =>{
    res.sendFile('./Chapter_3/about.html', {root: __dirname});
});

// redirects
app.get('/about-us', (req,res) =>{
    res.redirect('/about');
});

// add page
app.use((req,res) =>{
    res.status(404).sendFile('./Chapter_3/404.html', {root: __dirname});
});