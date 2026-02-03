# 📘 Dokumentasi Proyek: Play - Game Shop Website

**Play** adalah aplikasi web berbasis **React.js** yang berfungsi sebagai katalog dan toko game digital. Aplikasi ini memiliki fitur modern seperti *filtering*, *wishlist* (Library), *shopping cart* (Bag), dan desain antarmuka yang responsif dengan nuansa gaming (Neon/Dark Mode).

---

## 🛠️ Teknologi yang Digunakan

* **Core:** [React.js](https://reactjs.org/) (Hooks: `useState`, `useEffect`, `useRef`)
* **Styling:** CSS3 (Custom Variables), [Bootstrap 5](https://getbootstrap.com/) (Grid System), [Bootstrap Icons](https://icons.getbootstrap.com/)
* **Slider/Carousel:** [Swiper.js](https://swiperjs.com/)
* **Data:** JSON (Local API)

---

## 📂 Struktur Proyek

Berikut adalah peta struktur folder penting agar Anda memahami letak setiap komponen:

```
├── public
│   ├── api
│   │   └── gamesData.json
│   ├── assets
│   │   └── games
│   │       ├── diablo-3-bg.jpeg
│   │       ├── dota-2-bg.jpg
│   │       ├── fortnite-bg.jpeg
│   │       ├── forza-horizon-5-bg.jpeg
│   │       ├── halo-infinite-bg.jpeg
│   │       ├── king-of-fighters-xv.jpeg
│   │       ├── lol-bg.jpeg
│   │       └── mario-bg.jpeg
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── GameCard.jsx
│   │   ├── GameRating.jsx
│   │   ├── GameSlide.jsx
│   │   ├── GameSwiper.jsx
│   │   ├── NavListItem.jsx
│   │   ├── ShopBagItem.jsx
│   │   ├── SideMenu.jsx
│   │   ├── gameCard.css
│   │   ├── gameRating.css
│   │   ├── gameSwiper.css
│   │   ├── shopBagItem.css
│   │   └── sideMenu.css
│   ├── data
│   │   └── navListData.js
│   ├── images
│   │   └── user.jpg
│   ├── pages
│   │   ├── Bag.jsx
│   │   ├── Categories.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Main.jsx
│   │   ├── MyLibrary.jsx
│   │   ├── bag.css
│   │   ├── categories.css
│   │   ├── header.css
│   │   ├── home.css
│   │   ├── main.css
│   │   └── myLibrary.css
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

---

## 🧠 Logika Utama & Manajemen Data

Aplikasi ini menggunakan konsep **State Lifting** (Mengangkat State) di mana seluruh data penting dikelola di satu pusat, yaitu `Main.jsx`.

### 1. Pusat Data (`Main.jsx`)

File ini bertindak sebagai "otak" aplikasi.

* **State `games**`: Mengambil data mentah dari `public/api/gamesData.json`.
* **State `library**`: Menyimpan array game yang di-like user.
* **State `bag**`: Menyimpan array game yang dimasukkan ke keranjang.
* **LocalStorage**:
* Setiap kali `library` atau `bag` berubah, data otomatis disimpan ke memori browser.
* Saat web di-refresh, data diambil kembali agar tidak hilang.


* **Navigasi**: Menggunakan `useRef` dan CSS Class (`active`) untuk berpindah halaman tanpa reload (Single Page Application behavior).

### 2. Alur Data (Props Drilling)

Data dari `Main.jsx` dikirim ke bawah (anak komponen) melalui **Props**:

* `Main` ➡️ `Header` (Untuk menampilkan jumlah angka notifikasi).
* `Main` ➡️ `Home/Categories` ➡️ `GameCard` (Untuk fungsi tambah/hapus).
* `Main` ➡️ `Bag` ➡️ `ShopBagItem` (Untuk menghitung total harga).

---

## 🎨 Modul & Fitur Tampilan

### 1. Side Menu (Sidebar)

* **Fungsi**: Navigasi utama antar halaman.
* **Responsif**:
* **Desktop**: Menu statis di sebelah kiri.
* **Mobile**: Berubah menjadi *toggle menu* yang ramping (hanya ikon) atau tersembunyi sepenuhnya agar tidak menghalangi konten.


* **Logic**: Menerima prop `sectionActive` untuk memberi tahu `Main.jsx` halaman mana yang harus ditampilkan.

### 2. Header

* **Fungsi**: Menampilkan profil user dan status belanja.
* **Fitur**:
* Ikon **Heart** & **Bag** memiliki *badge* angka dinamis.
* Jika ikon diklik, user langsung diarahkan ke halaman Library atau Bag.



### 3. Home Page

* **Hero Section**: Menggunakan **SwiperJS** dengan efek *Coverflow* 3D.
* Slide memiliki fitur **Autoplay**.
* Tombol "Play" pada slide akan memunculkan trailer video game (iframe).
* Judul game menggunakan efek teks transparan dengan *outline* putih (Glass text effect).


* **Featured Games**: Menampilkan 4 game teratas.

### 4. Categories Page

* **Fitur Filter**: User bisa memilih genre (RPG, MOBA, Battle, dll).
* **Fitur Search**: User bisa mengetik nama game di search bar. Pencarian bersifat *real-time* (langsung memfilter saat mengetik).

### 5. My Library (Wishlist)

* **Logika**: Menampilkan daftar game yang ada di state `library`.
* **Interaksi**: User bisa menghapus game dari library dengan menekan tombol "Hati" pada kartu game.

### 6. My Bag (Shopping Cart)

* **Tampilan**: Tabel transparan dengan gaya *Glassmorphism*.
* **Kalkulasi**:
* Menghitung harga asli dikurangi diskon.
* **Total Payment**: Menjumlahkan seluruh harga akhir item secara otomatis.


* **Action**: Tombol sampah untuk menghapus item dari keranjang.

---

## 🧩 Komponen Kunci (Deep Dive)

### `GameCard.jsx`

Ini adalah komponen paling sering digunakan.

* **Cek Status**: Komponen ini mengecek `library.find(...)` untuk menentukan apakah tombol "Hati" harus berwarna merah atau putih.
* **Cek Duplikasi**: Saat tombol "Bag" diklik, ia mengecek apakah game sudah ada di keranjang untuk mencegah duplikasi.

### `ShopBagItem.jsx`

* Komponen baris tabel untuk halaman Bag.
* Menerima fungsi `setBag` untuk menghapus dirinya sendiri dari daftar belanjaan.

---

## 💅 Styling & Desain System

Desain menggunakan CSS Variable (di `App.css`) untuk konsistensi tema:

* **Warna Utama**:
* `--primary`: `#0d171f` (Gelap Pekat)
* `--second`: `#0998a8` (Cyan/Teal Neon - Warna Aksen)
* `--bgColor`: `#192938` (Biru Gelap - Latar Belakang)


* **Font**: Menggunakan `Bauhaus 93` untuk judul agar kesan gaming retro-modern, dan `Roboto` untuk teks bodi.
* **Efek Visual**:
* **Glassmorphism**: Transparansi dengan blur pada kartu dan tabel.
* **Neon Glow**: Box-shadow bersinar pada tombol dan border saat *hover*.



---

## 🚀 Cara Menjalankan Proyek

1. **Instalasi Dependensi**:
Buka terminal di folder proyek dan jalankan:
```bash
npm install

```


2. **Menjalankan Server Lokal**:
```bash
npm start

```


Aplikasi akan berjalan di `http://localhost:3000`.
3. **Persiapan Build/Deploy (Penting)**:
Pastikan file data game berada di folder `public/api/gamesData.json` dan pemanggilan `fetch` di `Main.jsx` menggunakan path relatif (`/api/gamesData.json`) agar bisa berjalan di hosting seperti Vercel.

---