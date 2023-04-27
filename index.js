const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'./public')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./html/index.html'));
});


app.listen(port,() => {
    console.log(`SERVER LISTENING PORT ${port}`);
});