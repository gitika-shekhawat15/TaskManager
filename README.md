# TaskFlow

A full-stack **Task Management System** built with the MERN stack, featuring JWT authentication, role-based access control, and a clean responsive UI.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js + Vite + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT + Bcrypt |
| Validation | express-validator |
| API Docs | Postman Collection |

---

## Features

- User registration & login with JWT authentication
- Password hashing with bcrypt
- Role-based access control (user vs admin)
- CRUD APIs for tasks
- Input validation & sanitization
- Protected frontend routes
- Responsive pink-themed UI
- Admin seed script

---

## Project Structure

```
taskflow/
├── backend/
│   ├── src/
│   │   ├── config/         # Database connection
│   │   ├── controllers/    # Auth & Task logic
│   │   ├── middleware/     # JWT auth, role check, validation
│   │   ├── models/         # User & Task schemas
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Admin seed script
│   │   └── validations/    # Input validation rules
│   ├── .env.example
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── api/            # Axios instance
│   │   ├── components/     # Navbar, TaskCard, TaskForm
│   │   ├── context/        # Auth context
│   │   ├── pages/          # Login, Register, Dashboard
│   │   └── services/       # API service calls
│   └── .env.example
│
├── TaskFlow.postman_collection.json
└── README.md
```

---

##  Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/gitika-shekhawat15/TaskManager
cd taskflow
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create .env file and add your values (see .env section below)
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
# Create .env file and add your values
npm run dev
```
## Environment Variables

### Backend `.env`
```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/taskflow
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
```

### Frontend `.env`
```
VITE_API_URL=http://localhost:5000/api/v1
```

### 4. Create Admin User
```bash
cd backend
npm run seed:admin
```
Admin credentials:
- **Email:** `admin@taskflow.com`
- **Password:** `admin123`

---

## API Endpoints

### Auth Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/auth/register` | Register new user | No |
| POST | `/api/v1/auth/login` | Login user | No |
| GET | `/api/v1/auth/me` | Get current user | Yes |

### Task Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/tasks` | Create task | Yes |
| GET | `/api/v1/tasks` | Get tasks | Yes |
| GET | `/api/v1/tasks/:id` | Get single task | Yes |
| PUT | `/api/v1/tasks/:id` | Update task | Yes |
| DELETE | `/api/v1/tasks/:id` | Delete task | Yes |

---

## Role Based Access

| Action | User | Admin |
|--------|------|-------|
| Register/Login | Yes | Yes |
| Create task | Own only | All |
| View tasks | Own only | All users |
| Update task | Own only | Any task |
| Delete task | Own only | Any task |
---

## Database Schema

### User
```json
{
  "name": "String (required)",
  "email": "String (required, unique)",
  "password": "String (hashed, bcrypt)",
  "role": "String (user | admin)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Task
```json
{
  "title": "String (required)",
  "description": "String",
  "status": "todo | in-progress | completed",
  "priority": "low | medium | high",
  "user": "ObjectId (ref: User)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

##  Security Practices

- Passwords hashed with **bcrypt** (salt rounds: 12)
- **JWT tokens** with expiry
- Input validation with **express-validator**
- **Helmet.js** for HTTP security headers
- **CORS** restricted to frontend origin
- **Rate limiting** on API routes
- Role-based route protection

---

## Scalability Note

This project is designed with scalability in mind:

- **Modular structure** — new modules can be added easily
- **JWT stateless auth** — scales horizontally across multiple servers
- **MongoDB** — scales with sharding and replication
- **Environment-based config** — easy deployment to any environment

### Future Improvements
-  **Docker** — containerize backend & frontend
-  **Redis** — cache frequently accessed data
- **Load Balancer** — distribute traffic (Nginx)
- **Microservices** — split auth & task services
-  **Logging** — Winston + Morgan for production logs

---

## API Documentation

Import `TaskFlow.postman_collection.json` in Postman to test all APIs.

---

##  Author

Built with ❤️ by Gitika for internship assignment.