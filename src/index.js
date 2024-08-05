// Setting up Express Server
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.user('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/multi-device-tool', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('Connected to MongoDB');
	app.listen(PORT, () => console.log('Server running on port ${PORT}'));
}).catch(err => console.log(err));
