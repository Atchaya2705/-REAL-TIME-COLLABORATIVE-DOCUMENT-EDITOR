const express = require('express');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const Document = require('./models/Document');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB with error handling
mongoose.connect('mongodb://127.0.0.1:27017/collab-docs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Create HTTP server
const server = app.listen(PORT, () => 
  console.log(`Server running on http://localhost:${PORT}`));

// Socket.IO setup
const io = new Server(server, { 
  cors: { 
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Rest of your socket.io code remains the same...
io.on('connection', socket => {
  // ... (keep existing socket.io code)
});