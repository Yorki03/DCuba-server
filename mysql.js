const mysql = require('mysql');

const mysqlConnet = mysql.createConnection({
    host: 'bdfvcntvbhlnemcbt0jk-mysql.services.clever-cloud.com',
    user: 'utivgecoiu63o20h',
    password: 'mQHl5JsNTRVjg8dtGngU',
    database: 'bdfvcntvbhlnemcbt0jk'
});

mysqlConnet.connect(function(err){
    if(err){
        console.error(err);        
    }else{
        console.log('Database conectada');        
    }
});

module.exports = mysqlConnet;