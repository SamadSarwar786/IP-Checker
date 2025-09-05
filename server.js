//basic server js code
const express = require('express');
const app = express();
const ip = require('ip');
app.get('/', (req, res) => {
    const ipAddress = ip.address();
   res.send({
    message: 'Hello World',
    ip: ipAddress,
   })
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


