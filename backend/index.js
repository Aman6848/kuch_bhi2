// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// In-memory database (replace this with a real database in production)
const users = [];

// Your /api/enroll route
app.post('/api/enroll', (req, res) => {
  const { name, age, batch } = req.body;

  // Validate input
  if (age < 18 || age > 65) {
    return res.status(400).json({ error: 'Invalid age' });
  }

  // Save to database (in-memory storage for this example)
  const user = { id: users.length + 1, name, age, batch };
  users.push(user);

  // Mock payment processing (CompletePayment function)
  // Note: You don't need to implement this function
  const paymentResponse = CompletePayment(user);

  // Return response to frontend
  res.json({ success: true, paymentResponse });
});

// Your default route
app.get('/', (req, res) => {
  res.send('Hello, this is the Yoga Class Admission API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
