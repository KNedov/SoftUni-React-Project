<div align="center" style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin-bottom: 30px;">
  <img src="./docs/images/Logo PhoneZone.png" alt="PhoneZone Logo" width="200" height="60" style="object-fit: contain;" />
</div>
 
<p align="center">
  <a href="https://github.com/KNedov/SoftUni-React-Project/blob/main/client/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  </a>
</p>

---

## 📌 Project Description

**PhoneZone** is a web application for managing, posting, and browsing phone listings.  
The project includes an **React front-end** and **Node.js/Express back-end**, with a **MongoDB** database.  
Authentication is implemented via **JWT (JSON Web Tokens)**, and the app is deployed on **Render**.

🔗 **Deployed version:** [PhoneZone](https://softuni-react-project-1.onrender.com)  
💻 **GitHub repo:** [React-Project](https://github.com/KNedov/SoftUni-React-Project)

---

## 🔑 Test Users

For convenience during testing, the deployed version includes the following test accounts:

| Email           | Password |
| --------------- | -------- |
| user1@gmail.com | 12345    |
| user2@gmail.com | 12345    |
| user3@gmail.com | 12345    |

You can log in with any of these accounts to test the app’s features.

---

## 🛠️ Technologies Used

| Front-end                                                                                                         | Back-end                                                                                          | Database                                                                                                                             | Authentication                                                                           | Deployment                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <img src="https://www.svgrepo.com/show/452092/react.svg" alt="React" width="40" /> React (JSX, CSS) | <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" width="40" /> Node.js, Express | <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB" width="80" /> MongoDB (Mongoose) | <img src="https://jwt.io/img/pic_logo.svg" alt="JWT" width="40" /> JSON Web Tokens (JWT) | <img src="https://www.citybiz.co/wp-content/uploads/2025/01/Render.png" alt="Render" width="100" /> Render |

---

## 📂 Project Structure

```
/React-Project
│
├── client/ # React front-end
│ ├── src/
│ └── package.json
│
└── rest-api/ # Node.js/Express back-end
├── models/
├── routes/
├── server.js
└── package.json
```

---

📜 Features  
🔐 Registration and login with JWT tokens

📱 Adding new phone listings

📋 Browsing the list of phone ads

🔍 Detailed page for each phone

✏ Editing a posted ad (only by the owner)

❌ Deleting an ad (only by the owner)

💬 Adding comments to ads (only if the ad is not yours!)

🗑 Deleting comments (only your own comments)

👍 Liking comments (only if the comment is not yours)

👤 User profile with their posted ads

---

## 🚧 Future Features

-   🛒 **Shopping cart** – ability to add products for purchase
-   🗺️ **Location map** – integration with maps to show ad or store locations
-   🛍️ **Direct phone purchase** through the platform
-   🔍 **Search** – ability to search products by name

---

> ⚠️ **Note:** Some features like  direct purchase are still under development and currently not available in the live version. Buttons labeled "coming soon" indicate these upcoming functionalities.

---

## ⚙️ Additional Technical Details

-   **Route Guards**  
    Implemented to protect specific routes and ensure that only authorized users can access certain pages.

-   **Error Handling with Toasts**  
    Used for consistent display of error or success messages to the user throughout the app using toast notifications. Any server or client errors are captured and shown in a user-friendly way.

-   **Active Navigation with React Router**  
    Uses NavLink from React Router to apply an active CSS class to the current navigation item, improving user experience by clearly indicating the current page.

-   **Environments**  
    Separate environment configurations for development and production are set up to manage API URLs and other environment-specific settings efficiently.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

# 📦 Installation and Running Guide

## 🚀 Installation and Running

### 1️⃣ Clone the project

```bash
git clone https://github.com/KNedov/SoftUni-React-Project.git
```

---

## 🗄 Running the Project Locally with the Included Database

If you want to run the project locally with the included MongoDB database backup, follow these steps:

### 2️⃣ Install MongoDB

Download and install **MongoDB Community Server** from:  
https://www.mongodb.com/try/download/community

Make sure the `mongod` service is running.  
By default, MongoDB runs at:

```
mongodb://localhost:27017
```

### 3️⃣ Restore the Database from the Local Backup

From the **root folder of the project**, run:

```bash
mongorestore --db store-zone ./mongodb_backup/store-zone
```

-   `store-zone` → the name of the database that will be created locally.
-   `./mongodb_backup/store-zone` → path to the backup included in this repository.

### 4️⃣ Database Connection

The project is already configured to connect to:

```
mongodb://localhost:27017/store-zone
```

No additional changes are required for local development.

💡 **Important:** You must have MongoDB installed and running before starting the Node.js server, otherwise the backend will not be able to connect to the database.

---

### 5️⃣ Install and Run the Front-end (phone-zone)

```bash
cd client
npm install
npm run dev
```

By default it runs at:

```
http://localhost:5173
```

---

### 6️⃣ Install and Run the Back-end (rest-api)

```bash
cd rest-api
npm install
npm start
```

By default it runs at:

```
http://localhost:3000
```

<div align="center" style="max-width: 1920px; margin: auto;">

  <h2 style="text-transform: uppercase; font-weight: bold; margin-bottom: 10px;">Home Page</h2>
  <img src="./docs/images/home-page.png" alt="Home Page" width="1920" style="border-radius: 8px; margin-bottom: 40px;" />

  <h2 style="text-transform: uppercase; font-weight: bold; margin-bottom: 10px;">Details Page</h2>
  <img src="./docs/images/details-page.png" alt="Details Page" width="1920" style="border-radius: 8px;" />

## </div>

## 📄 License

This project is licensed under the [MIT License](./LICENSE).  
You are free to use, copy, and modify it according to the license terms.

---

## 📬 Contact

If you have any questions or feedback, feel free to reach out to me at [k.nedov.90@gmail.com](mailto:k.medov.90@gmail.com).

---

## 👨‍💻 Author

-   **Krasimir Nedov**
