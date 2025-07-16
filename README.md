# 🎓 College Event Management System

A centralized, full-stack web application designed to streamline the planning, registration, management, and tracking of college events. The platform enables students, organizers, and administrators to interact seamlessly in a single digital environment — eliminating the inefficiencies of traditional event coordination methods.

---



## 🚀 Features

- ✅ Admin dashboard for event approval and control
- 📅 Interactive FullCalendar integration for events
- 📝 Online event registration for students
- 🖼️ Real-time media upload and photo booth feature
- 🧾 Digital archive of past events
- 🔐 Role-based access (Admin, Organizer, Student)
- 📊 Exportable reports and basic analytics

---

## 🧰 Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | HTML, CSS, JavaScript, Bootstrap, EJS |
| Backend     | Node.js, Express.js            |
| Database    | MongoDB, Mongoose              |
| Calendar    | FullCalendar.js                |
| Media Upload| Cloudinary (Free Tier)         |
| Hosting     | Render / Vercel / Netlify      |
| Versioning  | Git & GitHub                   |

---

## 📁 Folder Structure

college-event-management-system/
├── backend/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── server.js
├── frontend/
│ ├── views/
│ └── public/
├── .env.example
├── .gitignore
├── package.json
├── README.md

yaml
Copy
Edit

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/college-event-management-system.git
cd college-event-management-system
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env file based on the provided .env.example:

```bash
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4. Run the App
bash
Copy
Edit
npm start


Interactive calendar displaying upcoming events


Admin dashboard with approval workflow

📈 Project Highlights
Replaces scattered tools like Google Forms, WhatsApp, and Excel sheets

Provides one-stop visibility of all campus events

Digitally archives participation data and event history

Saves time for student organizers and faculty coordinators

✨ Future Enhancements
📱 Mobile app (Android/iOS) or PWA version

🔔 SMS/email notifications for updates

📥 QR-code based check-in and attendance

📊 Advanced dashboards with analytics and heatmaps

🌐 Social media integration for event promotion

🧑‍🤝‍🧑 Authors & Contributors
S Vivekananda Reddy – Full-stack Developer & Designer

Community Partner: A. Vishnu Vardhan (Student, Shamshabad, Telangana)

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Apna College (for learning resources)

GitHub, Cloudinary, FullCalendar, MongoDB Atlas, Bootstrap

Inspiration from managing real college events and fests

