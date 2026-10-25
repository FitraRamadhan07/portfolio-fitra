# Project Context & Specification: Fitra Dev Portfolio

## 1. Project Overview
Proyek ini adalah website portofolio pribadi *Single-Page Application* (SPA) dengan konsep **Full-Screen Vertical Scrolling**. Seluruh komponen utama disusun memanjang ke bawah dalam satu halaman dan dihubungkan menggunakan *Smooth Scroll* serta *Scroll-Spy* pada *Sticky Sliding Pill Navbar*.

## 2. Tech Stack & Environment
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
Desain mengadaptasi gaya Brutalist-Minimalist (terinspirasi dari personal web Liana Evans) dengan karakteristik utama:
- **Full-Screen Canvas:** Tanpa bingkai kartu pembatas luar; latar belakang langsung menyatu penuh ke seluruh layar (`<body>`).
- **Bold Typography:** Ukuran teks judul besar, padat (`letter-spacing: -0.035em`), dan kontras tinggi sebagai fokus visual utama.
- **Generous Whitespace:** Jarak antar elemen dan section dibuat lega agar mata pengguna nyaman saat melakukan scrolling.
- **Soft Pill & Rounded Corners:** Meskipun tipografinya tegas, elemen interaktif seperti navbar, badge, tombol, dan kartu konten menggunakan sudut membulat (`border-radius: 1.5rem` hingga `50rem`) untuk memberikan kesan modern dan ramah.

### B. Sistem Proporsi Warna (60-30-10 Rule)
Seluruh warna dikendalikan melalui CSS Variables di dalam `:root` pada `style.css`. Dilarang menggunakan warna di luar palet ini:
- **60% — Warna Dominan (Off-White: #F2F2EF)**
  - **Variabel:** `--bg-offwhite: #F2F2EF;`
  - **Fungsi Visual:** Memberikan kesan bersih, hangat, dan tidak menyilaukan mata dibanding putih murni (`#FFFFFF`).
  - **Penggunaan:** Latar belakang utama seluruh halaman (`<body>`), latar kapsul aktif pada navbar (`.nav-glider`), latar input form, latar skill pills, dan warna teks di dalam tombol utama.
- **30% — Warna Sekunder (Benjamin Moore Raindance: #689F90)**
  - **Variabel Utama:** `--raindance: #689F90;` (Hijau-sage kebiruan yang segar dan tegas, telah dikalibrasi agar tidak terlihat kusam/abu-abu di layar digital).
  - **Variabel Turunan (Surface/Subtle):** `--raindance-subtle: rgba(104, 159, 144, 0.28);`
  - **Variabel Turunan (High-Contrast/A11y):** `--raindance-dark: #3B6E61;`
  - **Fungsi Visual:** Memberikan identitas karakter warna yang menenangkan namun tetap standout di atas latar Off-White.
  - **Penggunaan:**
    - `--raindance-subtle`: Latar belakang wadah navbar pill (`.nav-pill-container`) dan latar kartu konten/proyek (`.content-box-raindance`).
    - `--raindance`: Warna border kartu, border input form, dan ikon dekoratif sekunder.
    - `--raindance-dark`: Warna teks navigasi yang tidak aktif, sorotan ikon utama (seperti bintang ✳, panah 0 -> 1, ikon lokasi), sub-heading kategori, dan efek hover pada tombol.
- **10% — Warna Aksen (Dark Charcoal: #1C1C1C)**
  - **Variabel:** `--charcoal: #1C1C1C;`
  - **Fungsi Visual:** Menciptakan titik fokus (focal point) yang tajam dan memastikan keterbacaan teks memenuhi standar aksesibilitas (WCAG AAA).
  - **Penggunaan:** Seluruh tipografi judul utama (`.hero-heading`), teks isi utama, logo brand, teks navbar yang sedang aktif, serta latar belakang tombol aksi utama (`.btn-action-charcoal`, `.btn-contact-nav`).

## 5. Arsitektur Navigasi (Sticky Sliding Pill Navbar & Actions)
- **Posisi:** Sticky di bagian atas layar tanpa kotak barrier luar (`position: sticky; top: 1.25rem; z-index: 1030; background: transparent;`).
- **Daftar Menu Navbar Pill (Tengah):** Menyediakan navigasi ke `Work`, `About`, `Skills`, `Projects`, dan `Experience`.
- **Aksi Kanan Navbar:** Tombol aksi `.btn-contact-nav` bertuliskan **"Contact Me"** yang langsung menggulir halaman ke `#contact`.
- **Mekanisme Interaktif:** Menggunakan elemen `<span class="nav-glider" id="nav-glider"></span>` yang bergerak mulus mengikuti menu yang aktif.
- **Scroll-Spy:** Saat pengguna melakukan scrolling halaman, `IntersectionObserver` di `main.js` mendeteksi `<section>` di viewport dan menggeser `.nav-glider` secara otomatis.
- **Anti-Bug Reload:** Menggunakan `ResizeObserver` dan event `load`.

## 6. Spesifikasi Komponen Utama (Vertical Scrolling Sections)

### 1. Halaman Utama / Hero Section (`#work`)
- Menampilkan logo `fitra ✳ dev` di kiri atas, Sliding Pill Navbar di tengah, dan tombol aksi "Contact Me" di kanan atas.
- Tipografi utama berukuran `clamp(2rem, 4vw, 3.5rem)` dengan dekorasi `.floating-doodles` di atas teks pembuka.
- Menampilkan peran profesional (`0 -> 1 frontend developer`), tombol CTA "Lihat Proyek", status lokasi di kiri bawah, dan indikator panah scroll di kanan bawah menuju `#about`.

### 2. Tentang Saya / About Me (`#about`)
- Cerita singkat mengenai latar belakang sebagai Frontend Developer, filosofi kerja (kode bersih, modular, cepat), dan workflow menggunakan Debian 13 & Zed.
- Disajikan dengan grid Bootstrap yang bersih dan kotak aksen `.content-box-raindance`.

### 3. Keahlian / Skills (`#skills`)
- Terbagi menjadi dua kategori jelas dalam `.content-box-raindance`:
  - **Hard Skills:** HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, Vue, Bootstrap 5, Vite, Git, Linux Debian, Cloudflare.
  - **Soft Skills:** Problem Solving, Komunikasi Tim, Manajemen Waktu, Adaptabilitas, Attention to Detail, Dokumentasi Teknis.

### 4. Galeri Proyek / Portfolio (`#projects`)
- Menampilkan daftar karya terbaik dalam bentuk 2-Column Grid Card menggunakan `.content-box-raindance`.
- Memuat mockup grafis, badge kategori/tahun, deskripsi masalah & solusi, skill pills, dan tautan Live Demo & Source Code.

### 5. Pengalaman & Pendidikan (`#experience`)
- Layout Minimalist Divided List dengan garis pembatas warna `--raindance`.
- Memuat riwayat kerja/freelance, agensi digital, organisasi kemahasiswaan, sertifikasi resmi, dan pendidikan sarjana.

### 6. Kontak / Contact (`#contact`)
- **Kolom kiri:** Ajakan kolaborasi, alamat email aktif (`hello@fitra.dev`), dan tautan media sosial profesional (GitHub, LinkedIn).
- **Kolom kanan:** Formulir pesan interaktif (Nama, Email, Pesan) menggunakan class `.input-raindance` dan tombol kirim `.btn-action-charcoal`.
- Ditutup dengan `<footer>` minimalis di bagian paling bawah halaman.
