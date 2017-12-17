const express = require('express');
const app = express();
const path = require('path');
// const routes = require('./routes/index');
// const volleyball = require('volleyball');
// app.use(volleyball);

const Port = 3000;

//serve up static files
app.use(express.static('bower_components'));
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// handle every other route with index.html, which will contain
// a script tag to our application's JavaScript file(s).

// app.get('/users', function(request, response) {
//     var user = {
//         name: 'sandy',
//         email: 'sandytran@gmail.com',
//         phone: '5556669999',
//         dob: '122019'
//     }
//     res.send(user)
// })

app.get('/information', function(request, response) {
    let information = {
        info: 'heard the st are gold there, maybe I can fly you out this place someday, chasing dreams like im in novican~',
        hasValue: true,
        timeStamp: new Date()
    }
    response.json({ payload: information })
})

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
});

//listen on port 3000
app.listen(process.env.PORT || Port, function () {
    console.log("Listening On 3000...");
});
