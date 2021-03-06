const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors')

// connect database
connectDB();


// init middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.use('/api/contact', require('./routes/contact'));







// server static assets on prod
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));