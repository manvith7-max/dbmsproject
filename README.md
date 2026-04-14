# Hostel Management Project

This project includes a Node.js backend, MySQL database connection, and a dark-themed frontend.

## Setup

1. Copy `.env.example` to `.env` and update your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=hostel_db
JWT_SECRET=your_jwt_secret
PORT=3000
```

2. Create the database and tables using `🏨 DATABASE CREATION.txt`.

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open the frontend:

- `http://localhost:3000/` for the dashboard
- `http://localhost:3000/login.html` for the login page

## Docker deployment

If you want to deploy the app with MySQL in containers, use Docker Compose.

1. Copy `.env.example` to `.env` and update the values if needed.
2. Run:

```bash
docker compose up --build
```

3. Open the website at:

- `http://localhost:3000/`

This will start:

- `app` on port `3000`
- MySQL on port `3306`

> If you use Docker Compose, set `DB_HOST=db` in your `.env` file so the Node app connects to the MySQL container.

## Notes

- The backend serves static files from `public/`.
- API endpoints are:
  - `POST /auth/register`
  - `POST /auth/login`
  - `GET /blocks`
  - `GET /rooms/empty`
  - `GET /rooms/allocated`
  - `GET /facilities`
  - `GET /payments`
- Use `JWT_SECRET` in `.env` for auth token generation.
