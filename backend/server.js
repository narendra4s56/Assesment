const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post('/api/signup', (req, res) => {
  const { fullName, phone, email, password, company, agency } = req.body;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).send({ message: 'User already exists' });
  }

  const newUser = { fullName, phone, email, password, company, agency };
  users.push(newUser);

  console.log('User registered:', newUser);
  res.status(200).send({ message: 'Signup successful' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).send({ error: 'Invalid email or password' });
  }

  res.send({ message: 'Login successful', user });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
