# KoxNotes - Next.js + Firebase + Tailwind Note-Taking App

KoxNotes is a modern and responsive note-taking application built with Next.js, Firebase Authentication, and Tailwind CSS.

---

## 🚀 Features

- 📝 Create, edit, delete, and archive notes
- 🔍 Search notes in real time
- 🏷️ Filter notes by tags
- 🔐 Secure user authentication (email/password + Google login)
- 🔁 Password reset + password change
- 💾 Data persistence with Firebase Firestore
- ☁️ Firebase Hosting deployment (`next export` compatible)
- 🌙 Dark mode support (default)

---

## 🛠️ Technologies Used

- **Next.js** – React framework for web apps
- **Firebase** – Authentication, Firestore, Hosting
- **Tailwind CSS** – Utility-first CSS framework
- **React** – UI library
- **Headless UI + Custom Components** – For clean, reusable UI

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Koxone/KoxNotes-Next-Tailwind-Firebase.git
   cd KoxNotes-Next-Tailwind-Firebase
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your Firebase configuration:**
   - Create a file at `firebase/firebaseConfig.js`
   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   ```
   http://localhost:3000
   ```

---

## 🔐 Authentication

- Email + Password login/signup
- Google OAuth login
- Password reset (via email)
- Change password from settings
- Auth-protected routes using custom `AuthGuard`

---

## 📁 Folder Structure

```
KoxNotes-Next-Tailwind-Firebase/
├── src/
│   ├── pages/            # Route pages (Next.js)
│   ├── components/       # UI components
│   ├── firebase/         # Firebase config
│   ├── context/          # Toast context
│   ├── utils/            # Firestore queries
│   └── styles/           # Global CSS
├── public/               # Static assets (icons, images)
├── firestore.indexes.json # Firestore composite indexes
├── firebase.json         # Firebase hosting settings
├── tailwind.config.js    # Tailwind config
└── package.json
```

---

## 🌐 Deployment with Firebase Hosting

> Uses `next export` for static deployment

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init
   ```
   - Select `Hosting`, `Firestore`, and `Indexes`
   - Set `out` as public directory
   - Enable single-page app rewrite

4. **Build the app:**
   ```bash
   npm run build
   npm run export
   ```

5. **Deploy:**
   ```bash
   firebase deploy
   ```

6. **Your app will be live at:**
   ```
   https://your-project-name.web.app
   ```

---

## ✨ Credits

Developed with ❤️ by [Koxone](https://github.com/Koxone)

---

## 📄 License

This project is licensed under the MIT License.