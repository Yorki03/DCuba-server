const mysql = require('mysql');

const mysqlConnet = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

mysqlConnet.connect(function(err){
    if(err){
        console.error(err);        
    }else{
        console.log('Database conectada');        
    }
});

module.exports = mysqlConnet;