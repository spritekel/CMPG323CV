const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');
const PORT = process.env.PORT || '8080';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req,res,next) => {
    res.send('API status: Running')
});

app.post('api/email', (req,res,next) => {
    sendGrid.setApiKey('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');
    const msg = {
        to: 'kelvin.popovic@gmail.com',
        from: req.body.email,
        subject: 'Portfolio contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log('error:', err);
            res.status(401).json({
                success: false
            });
        });
});

app.listen(PORT, '0.0.0.0');  

