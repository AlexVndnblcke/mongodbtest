module.exports = (app)=>{

let path = require('path');

app.get('/',(req,res)=>{
    res.setHeader('Content-type','text/html');
    res.statusCode = 200;
    res.sendFile(path.resolve(__dirname+'/../www/index.html'));
});

app.get('/dist/bundle.js',(req,res)=>{
    res.setHeader('Content-type','application/json');
    res.statusCode = 200;
    res.sendFile(path.resolve(__dirname+'/../dist/bundle.js'));
});

};
