# 📝 Task Manager App

A full-stack task management application built with **React** (Vite) on the frontend and **Express** with **MongoDB** on the backend.

---

## 🔧 Tech Stack

### 🚀 Frontend
- [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))
- [Bootstrap 5](https://getbootstrap.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Icons](https://react-icons.github.io/react-icons/)

### 🔙 Backend
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) (MongoDB ODM)
- [CORS](https://www.npmjs.com/package/cors)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon) (dev dependency)

---

## 📸 Screenshot

![Screenshot (28)](https://github.com/user-attachments/assets/a0a78495-fbb7-4d61-8eb8-5f99a14b516c)



## 📁 Project Structure

root/
├── backend/
│ ├── Controllers/
│ ├── Models/
│ ├── Routes/
│ ├── .env
│ └── index.js
└── frontend/task-manager
├── src/
│ ├── api.js
│ ├── utils.js
│ ├── App.jsx
│ └── Taskmanager.jsx


---

## ⚙️ Getting Started

### Clone the repository
```bash
git clone https://github.com/vivekkmrpaswan/MERN-Task-Manager-App-deploy.git


API Endpoints (Sample)
Method	        Endpoint	            Description
GET	             /tasks	                Get all tasks
POST	         /tasks	                Create new task
PUT	             /tasks/:id	            Update a task
DELETE	         /tasks/:id	            Delete a task


✅ Features

Create, update, and delete tasks

Real-time toast notifications

Responsive UI with Bootstrap 5

Persistent data with MongoDB
