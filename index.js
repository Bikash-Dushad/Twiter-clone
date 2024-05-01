const express = require('express')
const app = express()
const port = 4001;
require('./config/mongoose');
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extended: true}));
app.use(cookieParser())


app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/', require('./routes'))

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})