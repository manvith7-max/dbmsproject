const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', require('./routes/authRoutes'));
app.use('/blocks', require('./routes/blockRoutes'));
app.use('/rooms', require('./routes/roomRoutes'));
app.use('/facilities', require('./routes/facilityRoutes'));
app.use('/payments', require('./routes/paymentRoutes'));

app.get('/api-status', (req, res) => {
    res.json({ message: 'Hostel Management API Running' });
});

if (require.main === module) {
    const port = process.env.PORT || 3000;
    db.connect(err => {
        if (err) {
            console.error('Database connection failed:', err);
            process.exit(1);
        }
        console.log('Database connected successfully');
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    });
}

module.exports = app;