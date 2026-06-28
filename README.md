# IEEE Events Explorer 🎓

A modern, responsive React-based web application that allows students to explore, search, filter, and bookmark IEEE events in an intuitive and user-friendly interface.

---

## 🚀 Live Demo
👉 [https://ieee-events-explorer.vercel.app?](https://ieee-events-explorer.vercel.app/)

---

## 📌 Overview

IEEE Events Explorer is a frontend application built to simulate a real-world event browsing platform for students. It consumes dynamic JSON data and provides an interactive UI for discovering technical and non-technical events.

The application focuses on:
- Clean UI/UX
- Efficient state management
- Robust handling of messy API data
- Responsive design for all devices

---

## ✨ Features

- 🔍 **Search Events** by title
- 🏷️ **Filter Events** by categories (tech, workshop, networking, etc.)
- 📄 **Detailed Event View** with full information
- ⭐ **Bookmark System** (stored in localStorage)
- 📊 **Capacity Visualization Bar**
- ⚡ **Skeleton Loading UI**
- 🚫 **Cancelled Event Highlighting**
- 📱 **Fully Responsive Design**

---

## 🛠️ Tech Stack

- React.js (Frontend Framework)
- React Router DOM (Routing)
- JavaScript (ES6+)
- Vite (Build Tool)
- LocalStorage API
- CSS (Inline styling approach)


---
## 📁 Project Structure

```
src/
├── components/        Reusable UI components
├── pages/             Application pages (Feed, Detail, Bookmarks)
├── hooks/             Custom React hooks (API, bookmarks, debounce)
├── utils/             Helper functions & data normalization
├── App.jsx            Main routing configuration
└── main.jsx           Application entry point
```

## ⚙️ How It Works

1. Events are fetched from a remote JSON API
2. Data is normalized to handle inconsistencies
3. Users can search and filter events dynamically
4. Event details are displayed in a separate route
5. Bookmarked events are stored in browser localStorage

---

## 🧠 Key Learning Outcomes

- Handling real-world messy JSON data
- Building reusable React components
- Managing state with hooks
- Implementing performance optimizations (useMemo, debounce)
- Creating responsive UI layouts
- Working with routing and dynamic pages

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/ieee-events-explorer.git

# Navigate to project
cd ieee-events-explorer

# Install dependencies
npm install

# Start development server
npm run dev
🌐 Deployment

This project is deployed using Vercel:

👉 https://ieee-events-explorer.vercel.app

📌 Future Improvements
Authentication system
Backend integration
Event registration system
Admin dashboard for event management

👨‍💻 Author

Yarragunta Chandrakala
RV College of Engineering
Data Science

📄 License

This project is created for IEEE recruitment evaluation purposes.
