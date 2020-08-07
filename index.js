const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes'));

//setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`OOPs!! Error in running server: ${err}`);
        return;
    }
    console.log(`Great!! Server is up and running at: ${port}`);
});