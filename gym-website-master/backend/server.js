const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pulseup',
  port: 3307 // or 3306 depending on XAMPP
});

db.connect(err => {
  if (err) {
    console.error('❌ DB connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to register user' });
      }
      res.json({ message: 'User registered successfully!' });
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
