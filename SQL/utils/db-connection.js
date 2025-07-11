const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Manju@123',
    database: 'testdb'
});

connection.connect (err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected to the database!');

    const createQuery = `CREATE TABLE IF NOT EXISTS Students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)
    )`

    connection.execute(createQuery, (err) => {
        if (err) {
            console.error(err);
            connection.end();
            return;
        }
        console.log('Table created successfully!');
    });
});

module.exports = connection;