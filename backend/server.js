const express = require('express');
const cors = require('cors');
const dontenv = require('dotenv');
const connectDB = require('./config/db');

dontenv.config()
connectDB();
const userRoutes = require('./routes/userRoutes')
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/tickets', ticketRoutes);
app.use('/api/user', userRoutes)

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});

