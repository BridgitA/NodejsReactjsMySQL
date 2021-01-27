import mysql from 'mysql';

export const getConnection = async () => {
    let conn = mysql.createConnection({
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "root",
    "database": "nodelogin"
    })
    await conn.connect( (err) => {
        if (err) {
            console.log('Connection Error:', err);
            return;
        }
        console.log('Connection Successful');
    });
    return conn
};