const express = require('express');
const mysql = require('mysql2'); 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: '7301W@si#',
    database: 'signupform'
});

app.post('/Signup', (request, response) => {
    const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
    const values = [
        request.body.name,
        request.body.email,
        request.body.password
    ];

    db.query(sql, [values], (err, result) => { 
        if (err) {
            return response.status(500).json(err);
        }
        response.status(200).json({ message: 'User registered successfully' });
    });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
