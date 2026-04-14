require('dotenv').config();
const app = require('./app');
const db = require('./config/db');

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