<div align="center">
  <a href="https://justscanpro.vercel.app">
  <img src="./frontend/public/JustScanLogo1.png" alt="JustScan Logo" width="200"/>
  <h1>JustScan – Smart ID-Based Entry Management System</h1>
  </a>
</div>

An intelligent web application that replaces traditional handwritten entry logs with **AI-powered ID card scanning**. JustScan uses **Tesseract.js OCR** for instant ID validation, **Google Gemini 2.5 Flash** for automated validation on different organizations' ID card setup, and real-time dashboards for comprehensive student tracking—perfect for universities, hostels, and organizations.

<br>
<p align="center">
  <a href="https://justscanpro.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/LIVE%20DEMO-OPEN-brightgreen?style=for-the-badge"
         height="60" />
  </a>
</p>

<!-- [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/yourusername/JustScan)  -->

## 🌟 Features

### For Security Admins
- AI-powered setup with automatic keyword extraction from ID cards
- Bulk student import via Excel/CSV files
- Real-time dashboard with search and filter capabilities
- Automated email reminders for students currently "Out"
- Role-based access control (Owners vs Staff)

### For Security Guards
- Webcam-based scanning (no expensive hardware needed)
- Instant ID validation using Tesseract.js OCR
- Automatic entry/exit logging with status toggle
- Visual feedback with student photo and details

### Key Capabilities
- On-device OCR with image pre-processing
- Smart keyword validation to prevent fake IDs
- Regex pattern matching for roll number extraction
- Daily analytics and statistics

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- Tesseract.js
- React Webcam
- Context API

**Backend:**
- Node.js
- Express
- MongoDB
- Google Gemini 2.5 Flash
- Passport.js
- Nodemailer
- Multer

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB
- Google Cloud API Key (for Gemini AI)
- Gmail account (for Nodemailer)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/JustScan.git
cd JustScan
```

2. **Install dependencies**
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd backend
npm install
```

3. **Set up environment variables**

Create `.env` file in the **backend** directory:
```env
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
SESSION_SECRET=your_session_secret
CLIENT_URL=http://localhost:5173
```

Create `.env` file in the **frontend** directory:
```env
VITE_API_URL=http://localhost:3000
```

4. **Run the application**
```bash
# Start backend
cd backend
npm run dev

# Start frontend (in new terminal)
cd frontend
npm run dev
```

## 🌐 Live Demo

**Live Application**: [https://justscanpro.vercel.app/](https://justscanpro.vercel.app/)

## 👨‍💻 Author

**Vaibhav** - [@vaibhavVS18](https://github.com/vaibhavVS18)

---

**Made with ❤️ to replace Handwritten Entry system to ID based online Entry System**
