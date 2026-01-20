# Backend Setup Guide (ixtiyoriy)

Agar backend qo'shishni istasangiz, quyidagi yo'riqnomalari amal qiling.

## 1. Loyiha strukturasini tayyorlash

```
portfolio/
├── frontend/                 # Frontend fayllari
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── ...
└── backend/                  # Backend fayllari (yangi)
    ├── server.js
    ├── package.json
    ├── routes/
    ├── models/
    ├── controllers/
    └── config/
```

## 2. Node.js va npm o'rnatish

```bash
# nodejs.org-dan o'rnatish
# Keyin tekshiring
node --version
npm --version
```

## 3. Backend loyihasini boshlash

```bash
# Backend papkasiga kiring
cd backend

# npm o'rnatish
npm init -y

# Kerakli paketlarni o'rnatish
npm install express cors dotenv mongoose
npm install -D nodemon
```

## 4. server.js fayli

```javascript
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Backend API ishlayapti!' });
});

// Contact form
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validatsiya
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Barcha maydonlar majburiy' });
    }
    
    // Email yuborish kodi yoki database-ga saqlash
    console.log({ name, email, subject, message });
    
    res.json({ success: true, message: 'Xabar qabul qilindi' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portida ishlayapti`);
});
```

## 5. .env fayli

```
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_password
```

## 6. package.json scripts

```json
{
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    }
}
```

## 7. Ishga tushirish

```bash
npm run dev
```

## 8. Contact form-ni backend bilan bog'lash

Frontend-da `js/script.js` faylini o'zgartiring:

```javascript
// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    };

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            showSuccessMessage();
            contactForm.reset();
        }
    } catch (error) {
        console.error('Error:', error);
        showErrorMessage();
    }
});
```

## 9. MongoDB bilan ishlash (ixtiyoriy)

```javascript
const mongoose = require('mongoose');

// Model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Database-ga saqlash
app.post('/api/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.json({ success: true, message: 'Xabar saqlandi' });
    } catch (error) {
        res.status(500).json({ error: 'Xabar saqlashda xato' });
    }
});
```

## 10. Deployment

Backend qismi uchun:
- **Heroku** - heroku.com
- **Railway** - railway.app
- **Replit** - replit.com
- **Vercel Functions** - API serverless

---

Backend-ni qo'shish ixtiyoriy. Frontend qismi to'liq ishlaydi!
