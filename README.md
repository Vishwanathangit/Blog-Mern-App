# 📝 Blog MERN App

A full-featured Blog Application built with the **MERN Stack** and **Firebase Authentication**, allowing users to read blogs, like posts, and (admin only) create blogs.

## 🔗 Live URL
➡️ [Live on Render](https://blog-mern-app-e3cd.onrender.com/)

## 🛠 Tech Stack

**Frontend**:
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Firebase Authentication

**Backend**:
- Node.js
- Express.js
- MongoDB (Mongoose)

## 📁 Folder Structure

```
Blog-Mern-App/
├── backend/
│   └── index.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   ├── config/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
├── README.md
└── ...
```

### 🚀 Features
🔒 Firebase Authentication (Login/Signup)

📰 Blog List Page

❤️ Like System (with real-time updates)

✍️ Blog Creation (Admin only)

📞 Contact Form

📄 About Page

🎨 Responsive UI with Tailwind CSS

### ⚙️ Installation
Backend Setup
cd backend
npm install
# Create a .env file and add MONGO_URI
npm run dev

Frontend Setup
cd frontend
npm install
# Create a .env file with Firebase keys
npm run dev

## ✅ Admin Authentication
To allow blog creation, make sure the logged-in Firebase UID matches the VITE_FIREBASE_ADMIN_UID in your .env.
