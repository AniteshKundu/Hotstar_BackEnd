const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const contentRoutes = require('./routes/content');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/content', contentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
