# Project Context & Specification: Muhammad Fitra Ramadhan Portfolio

## 1. Project Overview
Proyek ini adalah website portofolio pribadi *Single-Page Application* (SPA) untuk **Muhammad Fitra Ramadhan** (Mahasiswa Sistem Informasi Universitas Budi Luhur, fokus Web Development & IT Support) dengan konsep **Full-Screen Vertical Scrolling**. Seluruh komponen utama disusun memanjang ke bawah dalam satu halaman dan dihubungkan menggunakan *Smooth Scroll* serta *Scroll-Spy* pada *Sticky Sliding Pill Navbar*.

## 2. Tech Stack & Environment
- **Identity:** Muhammad Fitra Ramadhan (Information Systems @ Universitas Budi Luhur)
- **OS & Editor:** Linux Debian 13 (Trixie) Stable & Zed Editor
- **Bundler:** Vite (Vanilla JavaScript template)
- **Node.js Version:** v24.21.0 (LTS)
- **UI Framework & Icons:** Bootstrap 5 (`bootstrap`, `@popperjs/core`) & Bootstrap Icons (`bootstrap-icons`) via NPM
- **Deployment Target:** Cloudflare Pages (via GitHub integration, output directory: `dist`)

## 3. Folder Structure
```text
portfolio-gw/
├── node_modules/
├── index.html            # Entry point HTML (memuat style.css langsung di <head> untuk mencegah FOUC)
├── main.js               # Entry point JS (Bootstrap JS, Glider Navbar, & IntersectionObserver Scroll-Spy)
├── style.css             # Custom CSS (Design System, aturan warna 60-30-10 & komponen UI)
├── package.json
└── CONTEXT.md            # Dokumen konteks & spesifikasi proyek ini
```

## 4. Design System & Aturan Warna (60-30-10 Rule)

### A. Filosofi Desain (Brutalist-Minimalist)
Desain mengadaptasi gaya Brutalist-Minimalist dengan karakteristik utama:
- **Full-Screen Canvas:** Tanpa bingkai kartu pembatas luar; latar belakang langsung menyatu penuh ke seluruh layar (`<body>`).
- **Centered Typography:** Seluruh judul seksi (`.section-heading`, badge seksi, dan subjudul) diposisikan secara terpusat (*center-aligned*) dengan ukuran responsif yang seimbang.
- **Generous Whitespace:** Jarak antar elemen dan section dibuat lega agar mata pengguna nyaman saat melakukan scrolling.
- **Soft Pill & Rounded Corners:** Elemen interaktif seperti navbar, badge, tombol, kartu perjalanan, dan kartu proyek menggunakan sudut membulat (`border-radius: 1.1rem` hingga `50rem`) untuk memberikan kesan modern dan ramah.

### B. Sistem Proporsi Warna (60-30-10 Rule)
- **60% — Dominan (Off-White: #F2F2EF):** Latar belakang utama seluruh halaman (`<body>`), latar kapsul glider, latar input form, latar skill pills, dan latar badge sertifikasi.
- **30% — Sekunder (Raindance: #689F90):** Latar permukaan wadah navbar dan kartu konten (`--raindance-subtle: rgba(104, 159, 144, 0.28)`), border kartu, border input form, serta sorotan aksen utama (`--raindance-dark: #3B6E61`).
- **10% — Aksen (Dark Charcoal: #1C1C1C):** Tipografi judul utama, teks aktif navbar, dan tombol aksi utama (`.btn-action-charcoal`, `.btn-contact-nav`).

## 5. Arsitektur Navigasi (Sticky Sliding Pill Navbar & Actions)
- **Posisi:** Sticky di bagian atas layar tanpa kotak barrier luar (`position: sticky; top: 1.25rem; z-index: 1030; background: transparent;`).
- **Daftar Menu Navbar Pill (Tengah):** Menyediakan navigasi ke `Work`, `About`, `Journey`, `Skills`, dan `Projects`.
- **Aksi Kanan Navbar:** Tombol aksi `.btn-contact-nav` bertuliskan **"Contact Me"** berukuran tinggi seragam 50px sejajar dengan navbar pill.
- **Glider & Scroll-Spy:** Menggunakan `IntersectionObserver` di `main.js` untuk mendeteksi seksi aktif secara otomatis dan menggeser `.nav-glider`.

## 6. Rincian Konten Komponen Utama (Sesuai Panduan Konten Terbaru)

### 1. Hero Section (`#work`)
- **Headline:** "Bridging Code, Network Infrastructure, and Creative Visuals."
- **Subheadline:** "Hi, I'm Muhammad Fitra Ramadhan. An Information Systems student focused on Web Development and IT Support. I combine network administration and Linux server management with a touch of visual creativity to build reliable, secure, and adaptive tech solutions."
- **Tombol CTA:** Primary: "View My Journey" (ke `#journey`), Secondary: "Download CV" (ke `#contact`).
- **Slot Foto:** Frame foto profil di sebelah kanan dengan aksen badge "Information Systems & IT".
- **Scroll Down Indicator:** Tombol scroll indicator diletakkan di tengah dan dinaikkan dari tepi bawah layar.

### 2. About Section (`#about`)
- **Judul:** Dibuat rata tengah (center-aligned).
- **Paragraf Profil 1:** Latar belakang mahasiswa Sistem Informasi Universitas Budi Luhur dan pondasi DKV dari SMK.
- **Paragraf Profil 2:** Fokus pada IT Support & Web Development (PHP Laravel, Python), administrasi sistem Linux, networking, dan sertifikasi BNSP.
- **Pillar Card:** Rangkuman pilar teknis utama di kolom sebelah kanan.

### 3. Journey Section (`#journey`)
- **Posisi & Layout:** Berada tepat setelah halaman About, dengan judul rata tengah dan layout grid 2-kolom terpusat (`max-width: 1100px; margin: 0 auto;`).
- **Sub-Column A (Professional Experience):**
  1. IT Support / Laboratory Assistant — Integrated ICT Laboratory, Universitas Budi Luhur (Sep 2024 — Present).
  2. Multimedia Laboratory Assistant — Universitas Mercu Buana (Apr 2024 — Jun 2024).
  3. Content Creator (Internship) — Indoposco.id (Apr 2024 — Jun 2024).
- **Sub-Column B (Education):**
  1. Bachelor of Information Systems (2nd Semester) — Universitas Budi Luhur (Sep 2025 — Present).
  2. Visual Communication Design (DKV) — SMK Muhammadiyah 9 Jakarta (Jul 2022 — May 2025).

### 4. Skills & Certifications Section (`#skills`)
- **Judul:** Dibuat rata tengah (center-aligned).
- **Category 1 (Development & Networking):** PHP (Laravel), Python, Linux System Administration, Basic Network Administration, Git Version Control.
- **Category 2 (Creative Multimedia & Tools):** Graphic Design, Content Creation, Video Editing, Studio & Lab Management; Tools: Linux OS (Debian), Zed Editor, Adobe Photoshop, Adobe Premiere Pro, Illustrator, Canva, Microsoft Office.
- **Category 3 (Professional Certifications):**
  - Certified Graphic Designer – National Board for Professional Certification (BNSP) 2025.
  - Certified Content Creator – National Board for Professional Certification (BNSP) 2025.

### 5. Projects Section (`#projects`)
- **Judul:** Dibuat rata tengah (center-aligned).
- **Card Proyek:** Dibuat **2 card berukuran lebih besar** (`max-width: 520px;`) yang elegan dan proporsional untuk diisi proyek pilihan pengguna:
  1. Web System & Application (Campus ICT Lab Resource Management System).
  2. Linux Server & Network Infrastructure (Multi-Lab Linux Server & Network Infrastructure).

### 6. Contact Section (`#contact`)
- **Judul:** Dibuat rata tengah (center-aligned).
- **Call-out:** "Whether you have a web project, need IT infrastructure support, or want to collaborate on digital solutions, I am open to internship, part-time, or freelance opportunities."
- **Tautan Kontak Rapi:** Teks URL panjang disembunyikan/diringkas menjadi badge yang elegan:
  - Email: `fitraramadhan20okt@gmail.com`
  - LinkedIn: `Muhammad Fitra Ramadhan`
  - GitHub: `FitraRamadhan07`
- **Formulir Kontak:** Input form interaktif untuk pengiriman pesan langsung.
