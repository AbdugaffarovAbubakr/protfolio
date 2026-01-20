# Abdugaffarov Abubakr - Portfolio Website

Zamonaviy va professional portfolio veb-sayti, HTML5, CSS3 va JavaScript (ES6+) ishlatilgan.

## 📋 Saytning Tuzilmasi

```
portfolio/
├── index.html           # Asosiy HTML fayl
├── css/
│   └── styles.css       # Barcha CSS stil qoidalari
├── js/
│   └── script.js        # JavaScript funksiyalar
├── images/              # Rasmlar (ixtiyoriy)
├── assets/              # Boshqa resurslar (ixtiyoriy)
└── README.md            # Bu fayl
```

## ✨ Asosiy Xususiyatlar

### 1. **Responsiv Dizayn**
- Desktop, Tablet va Mobile qurilmalarda mükammal ishlash
- Flexbox va CSS Grid ishlatilgan
- Mobile-first approach

### 2. **Zamonaviy UI/UX**
- Gradient fon va animatsiyalar
- Hover effektlar va smooth transitions
- Professional ranglar palitrasi

### 3. **Saytning Bo'limlari**
- **Bosh sahifa (Home)** - Ism-sharif va qisqacha tavsif
- **Men haqimda (About)** - Biografiya va statistika
- **Ko'nikmalar (Skills)** - Texnologiyalar va darajalar
- **Loyihalar (Projects)** - Maqolasi va filterlash
- **Ta'lim va Tajriba (Experience)** - O'qish joyi va iş tajribasi
- **Aloqa (Contact)** - Kontakt forma va ijtimoiy media

### 4. **Funksiyalar**
- ✅ Mobil menyu (Hamburger menu)
- ✅ Loyihalarni filterlash
- ✅ Kontakt forma validatsiyasi
- ✅ Real-time form validation
- ✅ Smooth scroll
- ✅ Intersection Observer animatsiyalari
- ✅ Dark mode (localStorage bilan)
- ✅ Responsive navigation

### 5. **Optimizatsiya**
- Tez yuklanish
- SEO asoslariga mos
- Toza va readable kod

## 🚀 Deployment

### Varianт 1: Netlify orqali (Tavsiya etiladi)

1. **Netlify-ga o'ting**
   - [netlify.com](https://www.netlify.com) saytiga kiring
   - GitHub akkauntingiz bilan kirish

2. **Repository ni connect qiling**
   - Ushbu loyihani GitHub-ga push qiling
   - Netlify-da "New site from Git" tugmasini bosing
   - GitHub repository-ni tanlang
   - Deploy tugmasini bosing

3. **Custom Domain qo'shing (ixtiyoriy)**
   - Netlify sitesi settings-ga o'ting
   - Domain qo'shing

**Deploy URL**: Netlify o'z URL-ni taqdim etadi (masalan: `yourname.netlify.app`)

### Varianт 2: Vercel orqali

1. **Vercel-ga o'ting**
   - [vercel.com](https://www.vercel.com) saytiga kiring
   - GitHub bilan kirish

2. **Import qiling**
   - Repository-ni import qiling
   - Deploy tugmasini bosing

3. **Kuting**
   - Vercel avtomatik deploy qiladi
   - URL taqdim etadi

### Varianт 3: GitHub Pages

1. **Repository-ni yarating**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **GitHub Pages-ni faollashtiring**
   - Repository Settings-ga o'ting
   - Pages qisimiga tushiring
   - Branch-ni `main` tanlang
   - Save tugmasini bosing

**URL**: `https://yourusername.github.io/portfolio`

## 💻 Lokal Ishlatish

### Sozlash

```bash
# Repository-ni clone qiling
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Fayllarni o'ting
# Faqat index.html-ni browser-da oching
```

### Browser-da Oching

**Variant 1: Bevosita**
- `index.html` faylini browser-ga sudrab oling
- Yoki `index.html` ni o'ng-click qilib "Open with" tanlang

**Variant 2: Local Server bilan (tavsiya etiladi)**

Python bilan:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Node.js bilan:
```bash
# http-server o'rnatish
npm install -g http-server

# Server ishga tushiring
http-server
```

VS Code bilan:
- Live Server extension o'rnatish
- `index.html`ni right-click qilib "Open with Live Server" tanlash

## 📝 Kontakt Ma'lumotlarini O'zgartirish

`index.html` faylida quyidagi qisimlarni o'zgartirishingiz kerak:

```html
<!-- Email o'zgartirish -->
<a href="mailto:yourmail@example.com">yourmail@example.com</a>

<!-- Telegram o'zgartirish -->
<a href="https://t.me/yourusername" target="_blank">@yourusername</a>

<!-- GitHub o'zgartirish -->
<a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a>

<!-- LinkedIn o'zgartirish -->
<a href="https://linkedin.com/in/yourusername" target="_blank">linkedin.com/in/yourusername</a>
```

## 🎨 Rang Palitrasi

CSS `styles.css` faylida o'zgartirishingiz mumkin:

```css
:root {
    --primary-color: #6c5ce7;      /* Asosiy rangi */
    --secondary-color: #00b894;    /* Ikkinchi rangi */
    --text-color: #2d3436;         /* Matn rangi */
    --bg-color: #ffffff;            /* Fon rangi */
}
```

## 📱 Texnologiyalar

- **HTML5** - Semantik struktura
- **CSS3** - Modern stillar (Flexbox, Grid, Gradients)
- **JavaScript ES6+** - Dinamik funksiyalar
- **Font Awesome** - Ikonkalar
- **Google Fonts** - Shriftlar (ixtiyoriy)

## 🔒 Xavfsizlik

- Form XSS himoyasi
- Input validation
- Toza va muhofaza qilingan kod

## 📊 SEO Optimizatsiya

- ✅ Meta tag-lar
- ✅ Semantic HTML
- ✅ Mobile responsiveness
- ✅ Fast loading
- ✅ Clean URL structure

## 🐛 Debugging

Brauzer console-da xatolarni tekshirish:
- `F12` yoki `Ctrl+Shift+I` bosing
- Console tab-ini oching
- Xatolarni ko'ring

## 🔄 Yangilash va Rivojlantirish

Keyingi qo'shilishlar:
- [ ] Admin panel
- [ ] Blog qismi
- [ ] CV yuklab olish
- [ ] Ko'p tilli qo'llab-quvvatlash (UZ/EN/RU)
- [ ] Backend integratsiyasi

## 📞 Yordam va Masalalar

Agar muammo bo'lsa:
1. `console.log()` ishlatib debug qiling
2. Browser DevTools-laridan foydalaning
3. GitHub issues-da muammo yarating

## 📄 Litsenziya

Bu loyiha shaxsiy foydalanish uchun.

## 👨‍💻 Muallif

**Abdugaffarov Abubakr Abduqaxxor o'g'li**

---

✅ Sayt tayyor deploy qilinish uchun! 🚀
