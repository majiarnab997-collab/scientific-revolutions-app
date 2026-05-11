# 🔬 Scientific Revolutions App

An interactive full-stack web application that allows users to explore, create, and manage scientific revolution cards.
This project demonstrates full CRUD operations using a React frontend and a Flask + MySQL backend.

---

## 📦 Technologies

### Frontend:

* React (Vite)
* HTML5
* CSS

### Backend:

* Python (Flask)
* MySQL
* Flask-CORS

### Other Tools:

* Fetch API (Frontend ↔ Backend communication)
* Git & GitHub

---

## 📁 Project Structure

```
SCIENTIFIC_REVOLUTIONS
│
├── scientific_revolutions_app
│   │
│   ├── backend
│   │   ├── app.py
│   │   └── requirements.txt
│   │
│   ├── frontend
│   │   ├── public
│   │   ├── src
│   │   │   ├── compound
│   │   │   │   ├── AddNewCard
│   │   │   │   ├── Card
│   │   │   │   ├── CardList
│   │   │   │   ├── EditCard
│   │   │   │   ├── ErrorMessage
│   │   │   │   ├── Explore
│   │   │   │   ├── FakeAccount
│   │   │   │   ├── FetchMoreDetails
│   │   │   │   ├── Header
│   │   │   │   ├── Home
│   │   │   │   ├── LogIn
│   │   │   │   ├── LogOut
│   │   │   │   ├── ProtectedRoute
│   │   │   │   ├── ReadMoreDetails
│   │   │   │   ├── ScientificCard
│   │   │   │   └── ShowingSearchResults
│   │   │   │
│   │   │   ├── App.jsx
│   │   │   ├── main.jsx
│   │   │   ├── App.css
│   │   │   └── index.css
│   │   │
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── vite.config.js
│   │
│   └── (node_modules ignored)
│
├── .gitignore
├── README.md
```

---

## 🚀 Features

* 🔐 Login & Logout system (Authentication-ready structure)
* 🛡️ Protected Routes for secure access
* 🏠 Home page with application introduction
* 📋 View all scientific cards
* ➕ Add new cards
* ✏️ Edit existing cards
* 🗑️ Delete cards
* 🔍 Search functionality
* ❌ "No Results Found" handling with navigation options
* 🌐 Explore page (Wikipedia-style experience)
* 🔗 External trusted links
* ⚡ Real-time updates (no page reload)
* 🖼️ Image support for each card

---

## 🧠 Project Overview

This application works like a **mini Wikipedia-style platform** focused on scientific revolutions.

* Users can browse and explore scientific topics
* If no data is found, users are guided to:

  * Go to Explore page
  * Add a new card
* The Explore section provides trusted external resources (like Wikipedia)
* Backend APIs manage data using MySQL
* Frontend dynamically renders UI using React

---

## ⚙️ How It Works

### Backend:

* Built using Flask
* Handles API requests
* Performs CRUD operations with MySQL
* Stores all card data in database

### Frontend:

* Built with React (Vite)
* Uses reusable components:

  * CardList
  * AddNewCard
  * EditCard
  * Explore
* Communicates with backend using Fetch API
* Updates UI dynamically without reload

---

## 📚 What I Learned

* 🔗 API integration (frontend ↔ backend)
* 🗄️ MySQL database handling
* ⚛️ React state management (useState, useEffect)
* ⚡ Async programming (fetch, async/await)
* 🛠️ CRUD operations
* 🔐 Route protection & basic authentication

---

## 🚀 Future Improvements

* 🔐 Full authentication (JWT / Sessions)
* 🔍 Advanced search & filtering
* 🌐 Full deployment (frontend + backend + database)
* 📱 Responsive UI (mobile-friendly)
* ⭐ Favorites / Bookmark feature

---

## 🛠️ Running the Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/scientific-revolutions-app.git
cd scientific-revolutions-app
```

---

### 2️⃣ Backend Setup

```bash
cd scientific_revolutions_app/backend
pip install -r requirements.txt
python app.py
```

Backend runs on:

```
https://your-api-link
```

---

### 3️⃣ Frontend Setup

```bash
cd scientific_revolutions_app/frontend
npm install
npm run dev
```

Frontend runs on:

```
https://your-link
```

---

## 🗄️ Database Setup

```sql
CREATE DATABASE mydb;

USE mydb;

CREATE TABLE cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    category VARCHAR(255),
    description TEXT,
    image_url TEXT,
    year INT
);
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /add-card        | Add new card  |
| GET    | /get-cards       | Get all cards |
| DELETE | /delete-card/:id | Delete card   |
| PUT    | /update-card/:id | Update card   |

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 👤 Contact

**Arnab Maji**

* GitHub: https://github.com/majiarnab997-collab
* LinkedIn: https://www.linkedin.com/in/arnab-maji-7254b9362
