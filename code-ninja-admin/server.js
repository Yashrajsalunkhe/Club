const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Authenticate user
  // For simplicity, assuming a static user
  if (username === 'admin' && password === 'password') {
    req.session.user = username;
    res.redirect('/dashboard');
  } else {
    res.send('Invalid credentials');
  }
});

app.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/');
  }
  res.render('dashboard');
});

// Add more routes for managing events, users, content

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
