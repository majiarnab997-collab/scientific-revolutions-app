# 🔬 Scientific Revolutions App

An interactive full-stack web application that allows users to explore, create, and manage scientific revolution cards.
This project demonstrates CRUD operations using a React frontend and a Flask + MySQL backend.

---

## 📦 Technologies

**Frontend:**

* React (Vite)
* JavaScript
* HTML5
* CSS

**Backend:**

* Python (Flask)
* MySQL
* Flask-CORS

**Other Tools:**

* Fetch API (Frontend ↔ Backend communication)
* Git & GitHub

---

## 🦄 Features

Here’s what you can do with this app:

* ➕ Add new scientific cards
* 📋 View all cards in a clean UI
* ✏️ Edit existing cards
* 🗑️ Delete cards instantly
* 🔄 Real-time updates without page reload
* 🖼️ Display images for each card

---

## 👨‍🍳 The Process

I started by building the backend using Flask and MySQL to handle all database operations like inserting, fetching, updating, and deleting data.

Next, I created the frontend using React and structured the project into reusable components such as CardList, AddNewCard, and EditCard.

The main challenge was connecting the frontend with the backend using APIs. I used the Fetch API to send and receive data asynchronously without refreshing the page.

Finally, I handled errors properly using try-catch blocks and ensured smooth communication between the client and server.

---

## 📚 What I Learned

During this project, I gained hands-on experience in full-stack development:

* 🔗 API Integration: Learned how frontend communicates with backend using HTTP requests
* 🗄️ Database Handling: Worked with MySQL for storing and managing data
* ⚛️ React State Management: Used useState and useEffect effectively
* ⚡ Async Programming: Improved understanding of async/await and error handling
* 🛠️ CRUD Operations: Implemented Create, Read, Update, Delete functionality

---

## 💭 How can it be improved?

* 🔐 Add authentication (Login/Register system)
* 🔍 Implement search and filter functionality
* 🌐 Deploy the app (Frontend + Backend)
* 📱 Make UI responsive for mobile devices
* ⭐ Add favorites or bookmarking feature

---

## 🚦 Running the Project

To run the project locally:

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/scientific-revolutions-app.git
cd scientific-revolutions-app
```

---

### 2️⃣ Backend Setup

```
cd scientific_revolutions_app/backend
pip install -r requirements.txt
python app.py
```

Server runs on:

```
http://127.0.0.1:5000
```

---

### 3️⃣ Frontend Setup

```
cd scientific_revolutions_app
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🗄️ Database Setup

Run this in MySQL:

```
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

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| POST   | /add-card         | Add new card  |
| GET    | /get-cards        | Get all cards |
| DELETE | /delete-card/<id> | Delete card   |
| PUT    | /update-card/<id> | Update card   |

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a Pull Request.

---

## 👤 Contact

**Arnab Maji**

* GitHub: https://github.com/majiarnab997-collab
* LinkedIn: https://www.linkedin.com/in/arnab-maji-7254b9362

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
