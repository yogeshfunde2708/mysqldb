var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
    host: 'localhost',
    database: 'mysqldb',
    user: 'root',
    password: 'Yogesh270801'
});

module.exports = connection;