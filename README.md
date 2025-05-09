# 🎯 AimHire — Smart Job Search Platform

### 🌐 Live Site: [Your Live URL Here]  
📂 GitHub Repo: [Your GitHub Repo Link Here]

---

## 🔍 About AimHire

**AimHire** is an innovative and responsive single-page web application built to simplify job searching and career exploration. It offers a centralized hub for users to browse companies, explore job listings, and apply directly through company websites. The application combines real-time authentication, dynamic routing, and modern UI/UX to deliver a smooth and accessible experience for all job seekers.

---

## 🎯 Purpose

The purpose of **AimHire** is to provide job seekers with a focused, modern, and interactive platform for discovering opportunities. Users can explore job listings from multiple companies, check job details, and manage their profiles in a secure, mobile-friendly environment.

---

## 🚀 Key Features

- 🔐 Firebase Authentication (Email/Password & Google)
- 🔒 Private Routes (Company Details & My Profile)
- 📱 Fully Responsive (Mobile, Tablet & Desktop)
- 💡 Forget Password with Gmail redirection (no email verification)
- 🔓 Logout functionality with profile display on navbar
- 🧭 Dynamic Page Titles
- 🏢 Company and Job Listings from JSON data
- 📄 Job Detail Modal with Apply (opens in new tab)
- 👤 My Profile page with editable user details
- 🚫 404 Not Found page
- 🎨 Modern UI with Tailwind, DaisyUI & Mamba UI
- 🎞️ Smooth animations using Framer Motion

---

## 🧰 Tech Stack

### ⚛️ Frameworks & Libraries

- React
- React Router DOM
- Firebase
- React Icons
- React Spinners
- Framer Motion
- Swiper JS
- Sweet Alert
- React Toastify

### 🎨 UI Libraries

- Tailwind CSS
- DaisyUI
- Mamba UI

---

## 📦 Installed NPM Packages

- react router dom
- react icons
- react spinners
- framer motion
- swiper JS
- sweet alert
- react toastify


## 🛠️ Folder Structure
<pre> src/ ├── assets/ → Static images like logos, banners ├── components/ → Reusable UI components (Navbar, Footer, Modal, etc.) ├── context/ → Firebase authentication context (AuthProvider) ├── layouts/ → Layouts like MainLayout, PrivateRoute ├── pages/ │ ├── Auth/ → Login, Register, ForgetPassword │ ├── Company/ → CompanyDetails page (Private Route) │ ├── Home/ → Home, Hero, HowItWorks, Companies sections │ ├── Profile/ → MyProfile, UpdateProfile (Private Routes) │ └── NotFound/ → 404 Not Found page ├── routes/ → All app routes defined using React Router ├── App.jsx → Main application wrapper ├── main.jsx → Entry point (ReactDOM render) ├── index.css → Global and Tailwind/DaisyUI styles </pre>

## 🌍 Deployment Notes
Hosted on Netlify or Firebase
Firebase authorized domains must include your Netlify/Firebase domain
Supports SPA (Single Page Application) — no route errors on reload

## 🧪 Extra Functionalities
✅ Google Login

✅ Update User Info (name and photo)

✅ Modal-based job detail view

✅ Additional routes and sections

✅ Dynamic title changes with React Helmet

✅ Sweet Alert for Pop Up message in successful login or register

✅ React Toast Notification for error message


## 🧑‍💻 Author
Created by: MD. Robiul Alam
Project Name: AimHire
For contact or collaboration, reach out at: [Your Email or Portfolio URL]