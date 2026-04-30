
# Wanderlust - A Full-Stack Airbnb Clone

Wanderlust is a professional, full-stack web application designed to replicate the core functionalities of Airbnb. It allows users to browse unique listings, create their own properties, and leave reviews. The project features a robust authentication system, real-time geocoding with interactive maps, and a modern, responsive user interface.

---

## 🚀 Features

### 👤 User Authentication & Roles
- **Sign Up & Login**: Secure authentication using Passport.js.
- **Role-Based Access Control**:
  - **🏠 Owner**: Can create, edit, and delete their own listings.
  - **👤 User**: Can browse listings and post reviews.
- **Profile Badge**: Your active role (Owner/User) is always visible in the navbar.

### 🏠 Listing Management
- **Create Listings**: Owners can add new properties with titles, descriptions, prices, and locations.
- **Image Upload**: Seamless image handling using **Cloudinary** and **Multer** for cloud storage.
- **Edit/Delete**: Secure ownership checks ensure only the listing creator can modify or remove their properties.

### 📍 Interactive Maps & Geocoding
- **Auto-Geocoding**: Uses the **Nominatim API (OpenStreetMap)** to automatically convert addresses into geographical coordinates.
- **Interactive Maps**: Every listing page features a **Leaflet.js** map with a location pin and popup details.

### 🔍 Discovery & Filters
- **Smart Search**: Filter listings by title, location, or country using the search bar.
- **Category Filters**: Browse properties by categories like Trending, Rooms, Castles, Amazing Pools, Camping, and more.
- **Tax Toggle**: A custom switch to instantly display the "Total after taxes" (+18% GST) on all listings.

### 💬 Review System
- Users can leave star ratings and comments on properties.
- Authors can delete their own reviews.

---

## 🛠️ Tech Stack

- **Frontend**: EJS (Embedded JavaScript), Bootstrap 5, Vanilla CSS, FontAwesome.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ODM).
- **Storage**: Cloudinary (Image Hosting).
- **Auth**: Passport.js (Local Strategy).
- **Maps**: Leaflet.js & OpenStreetMap.

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally on your machine.

### 1. Clone the Project
```bash
git clone <your-repository-url>
cd AIRbnb-clone
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your credentials:
```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Setup the Database
Ensure you have **MongoDB** installed and running on your local machine. By default, the project connects to:
`mongodb://127.0.0.1:27017/wanderlust`

Optional: To initialize the database with sample data, run:
```bash
node init/index.js
```

### 5. Start the Application
```bash
# Run with nodemon (auto-restarts on changes)
nodemon app.js

# OR run with node
node app.js
```
The server will start at `http://localhost:8080`.

---

## 📁 Project Structure

```text
├── controllers/    # Route logic (MVC)
├── models/         # Mongoose schemas
├── public/         # Static assets (CSS, JS, Images)
├── routes/         # Express routes
├── utils/          # Utility functions & error handlers
├── views/          # EJS templates
├── app.js          # Entry point
└── cloudConfig.js  # Cloudinary configuration
```

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📜 License
This project is licensed under the MIT License.
=======
