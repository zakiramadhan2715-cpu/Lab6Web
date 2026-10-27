# Praktikum DOM dan Event JavaScript

Repo ini berisi hasil praktikum DOM dan event di JavaScript: enam latihan, empat eksperimen mandiri, dan satu mini project berupa form pendaftaran workshop.

## Tujuan

Lewat praktikum ini saya belajar:

- mengambil elemen HTML dengan `getElementById` dan mengubah isinya lewat `textContent`
- menangani event `click`, `input`, `change`, dan `submit` dengan `addEventListener`
- mengubah tampilan elemen dengan `classList`
- memvalidasi isian form di sisi klien dan menampilkan pesan kalau ada yang salah
- membuat dan menghapus elemen secara dinamis, seperti pada daftar tugas
- menggabungkan semuanya di mini project, termasuk ringkasan data yang ikut berubah saat form diisi

## Struktur File

```
praktikum/
├── index.html      halaman utama, berisi semua latihan dan mini project
├── style.css       kelas-kelas gaya (highlight, selesai, sembunyi, dll.)
├── script.js       semua logika DOM dan event
├── README.md
└── screenshots/    hasil tiap latihan, termasuk kondisi valid dan tidak valid
```

Pembagian latihan di dalam kode:

| Bagian | Isi |
|---|---|
| Latihan 1 | Ubah teks lewat JavaScript dan tombol yang menampilkan waktu klik |
| Latihan 2 (Eksperimen 4) | Tombol untuk menyembunyikan atau menampilkan paragraf |
| Latihan 3 | Ubah gaya teks dengan `classList.toggle` |
| Latihan 4 | Penghitung karakter saat mengetik |
| Latihan 5 (Eksperimen 2) | Validasi form pendaftaran, nama minimal 3 karakter |
| Latihan 6 (Eksperimen 1) | Daftar tugas dengan tombol selesai dan hapus |
| Mini Project (Eksperimen 3) | Form workshop dengan sisa karakter, pilihan sesi, dan ringkasan |

## Cara Menjalankan

Tidak perlu install apa-apa. Taruh `index.html`, `style.css`, dan `script.js` di satu folder, lalu buka `index.html` di browser (klik dua kali saja sudah cukup).

Kalau mau pakai server lokal, bisa lewat ekstensi Live Server di VS Code, atau jalankan ini di folder proyek:

```bash
python -m http.server 8000
```

lalu buka `http://localhost:8000`.

## Langkah Kerja

**Latihan 1.** Elemen judul dan pesan saya ambil dengan `getElementById`, lalu teksnya saya ganti lewat `textContent` begitu halaman dimuat. Tombol "Klik Saya" menampilkan jam saat tombol ditekan, memakai `new Date().toLocaleTimeString()`.

**Latihan 2.** Tombol "Sembunyikan/Tampilkan Paragraf" menambah atau mencabut kelas `sembunyi` dengan `classList.toggle`. Kelas itu di CSS isinya `display: none`.

**Latihan 3.** Tombol "Ubah Gaya" meng-toggle dua kelas sekaligus, `highlight` (warna, latar, dan garis kiri) dan `teks-besar` (ukuran huruf 1.4rem). Klik sekali lagi untuk mengembalikan tampilan semula.

**Latihan 4.** Event `input` pada kolom nama memperbarui jumlah karakter setiap kali ada yang diketik, dengan membaca `namaInput.value.length`.

**Latihan 5.** Event `submit` saya hentikan dengan `preventDefault()` supaya halaman tidak reload. Isian dibersihkan dengan `trim()` lalu dicek satu per satu: nama minimal 3 karakter, email sesuai pola regex, dan usia berupa bilangan bulat 17 sampai 100. Kalau semuanya lolos, muncul pesan sukses dan form dikosongkan.

**Latihan 6.** Tombol "Tambah" membuat `<li>` baru yang berisi teks tugas, tombol "Tandai selesai" (mencoret tugas dan mengganti label tombolnya), dan tombol "Hapus" (`item.remove()`). Kalau input kosong, muncul pesan agar mengisi tugas dulu.

**Mini Project.** Nama, email, dan sesi langsung muncul di kotak ringkasan lewat event `input` dan `change`. Sisa karakter nama dihitung dari batas 50. Saat tombol daftar ditekan, validasi mengecek nama (minimal 3 karakter), email, dan sesi. Pesan error tampil merah dan pesan sukses tampil hijau. Tombol "Reset Form" mengosongkan form, penghitung, ringkasan, dan pesan.

## Screenshot Hasil

Semua screenshot diambil dari halaman yang benar-benar dijalankan di browser, dengan data uji yang sama seperti yang tertulis di keterangan masing-masing.

### Halaman penuh

![Halaman penuh](screenshots/00-halaman-penuh.png)

### Latihan 1

Kiri: kondisi awal. Kanan: setelah tombol diklik.

| | |
|---|---|
| ![Latihan 1 awal](screenshots/01a-latihan1-awal.png) | ![Latihan 1 setelah klik](screenshots/01b-latihan1-setelah-klik.png) |

### Latihan 2

Kiri: paragraf disembunyikan. Kanan: ditampilkan lagi.

| | |
|---|---|
| ![Latihan 2 disembunyikan](screenshots/02a-latihan2-disembunyikan.png) | ![Latihan 2 ditampilkan](screenshots/02b-latihan2-ditampilkan.png) |

### Latihan 3

Kiri: sebelum tombol diklik. Kanan: sesudahnya.

| | |
|---|---|
| ![Latihan 3 sebelum](screenshots/03a-latihan3-sebelum.png) | ![Latihan 3 sesudah](screenshots/03b-latihan3-sesudah.png) |

### Latihan 4

Kiri: kolom masih kosong. Kanan: setelah mengetik "Zaki Ramadhan" (13 karakter).

| | |
|---|---|
| ![Latihan 4 kosong](screenshots/04a-latihan4-kosong.png) | ![Latihan 4 terisi](screenshots/04b-latihan4-terisi.png) |

### Latihan 5

Form sebelum diisi:

![Latihan 5 awal](screenshots/05a-latihan5-form-awal.png)

Kondisi tidak valid, berurutan dari kiri: nama terlalu pendek (`Al`), email salah (`zaki-example.com`), dan usia di bawah 17 (`15`).

| | | |
|---|---|---|
| ![Nama tidak valid](screenshots/05b-latihan5-nama-tidak-valid.png) | ![Email tidak valid](screenshots/05c-latihan5-email-tidak-valid.png) | ![Usia tidak valid](screenshots/05d-latihan5-usia-tidak-valid.png) |

Kondisi valid (`Zaki Ramadhan`, `zaki@example.com`, `20`):

![Latihan 5 valid](screenshots/05e-latihan5-valid.png)

### Latihan 6

Atas: input kosong ditolak, lalu dua tugas ditambahkan. Bawah: tugas pertama ditandai selesai, lalu tugas kedua dihapus.

| | |
|---|---|
| ![Latihan 6 input kosong](screenshots/06a-latihan6-input-kosong.png) | ![Latihan 6 tugas ditambahkan](screenshots/06b-latihan6-tugas-ditambahkan.png) |
| ![Latihan 6 tandai selesai](screenshots/06c-latihan6-tandai-selesai.png) | ![Latihan 6 tugas dihapus](screenshots/06d-latihan6-tugas-dihapus.png) |

### Mini Project

Kondisi awal:

![Mini project awal](screenshots/07a-miniproject-awal.png)

Kondisi tidak valid, berurutan dari kiri: nama terlalu pendek (`Al`), email salah (`zaki@`), dan sesi belum dipilih.

| | | |
|---|---|---|
| ![Nama tidak valid](screenshots/07b-miniproject-nama-tidak-valid.png) | ![Email tidak valid](screenshots/07c-miniproject-email-tidak-valid.png) | ![Sesi belum dipilih](screenshots/07d-miniproject-sesi-belum-dipilih.png) |

Kondisi valid, pendaftaran berhasil dan ringkasan terisi:

![Mini project valid](screenshots/07e-miniproject-valid.png)

Setelah tombol Reset Form ditekan:

![Mini project reset](screenshots/07f-miniproject-reset.png)

## Pertanyaan Evaluasi

**1. Apa yang dimaksud dengan DOM dan apa manfaatnya?**

DOM (Document Object Model) adalah gambaran dokumen HTML dalam bentuk pohon objek yang dibuat oleh browser. Setiap tag, atribut, dan teks jadi satu node yang bisa diakses lewat JavaScript. Manfaatnya, kita bisa membaca, mengubah, menambah, atau menghapus elemen tanpa harus memuat ulang halaman. Di praktikum ini, contohnya `pesan.textContent = ...` di Latihan 1 dan `document.createElement("li")` di Latihan 6.

**2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?**

- `getElementById("judul")` hanya menerima nilai `id` (tanpa tanda `#`) dan mengembalikan satu elemen, atau `null` kalau tidak ada. Ini yang paling cepat.
- `querySelector("#judul")` menerima selector CSS apa saja, tapi hanya mengembalikan elemen pertama yang cocok.
- `querySelectorAll("li")` juga menerima selector CSS, tapi mengembalikan semua elemen yang cocok dalam bentuk `NodeList`.

Di proyek ini saya pakai `getElementById` karena semua elemen yang dituju punya `id` yang unik.

**3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?**

`addEventListener(jenisEvent, fungsi)` dipakai untuk menjalankan sebuah fungsi setiap kali event tertentu terjadi pada elemen. Satu elemen boleh punya beberapa listener tanpa saling menimpa. Contoh event yang saya pakai: `click` (tombol "Klik Saya"), `input` (penghitung karakter), dan `submit` (validasi form). Selain itu ada `change` yang dipakai pada pilihan sesi workshop.

**4. Mengapa `event.preventDefault()` digunakan pada event submit form?**

Secara bawaan, submit akan mengirim data ke server dan memuat ulang halaman, sehingga pesan validasi dan isi form langsung hilang. Dengan `preventDefault()`, perilaku itu dibatalkan sehingga JavaScript bisa memeriksa isian dulu, menampilkan pesan, dan baru memprosesnya kalau datanya valid.

**5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?**

`textContent` membaca atau menulis teks biasa. Kalau ada tag HTML di dalamnya, tag itu ditampilkan apa adanya sebagai teks. `innerHTML` membaca atau menulis markup HTML, jadi tag di dalamnya diurai menjadi elemen sungguhan, dan prosesnya juga sedikit lebih berat.

Dari sisi keamanan, `innerHTML` berisiko kalau diisi dengan input pengguna karena bisa membuka celah XSS. Misalnya, kalau nama yang diketik berisi `<img src=x onerror=...>`, kode itu bisa ikut dijalankan. Karena itu di proyek ini saya memakai `textContent` untuk menampilkan data dari input, seperti ringkasan pendaftaran dan teks tugas. `innerHTML` lebih aman dipakai hanya untuk markup yang kita tulis sendiri.

**6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?**

`classList.toggle("nama")` menambahkan kelas kalau belum ada dan mencabutnya kalau sudah ada, jadi satu tombol cukup untuk bolak-balik antara dua kondisi. Gayanya tetap diatur di CSS, JavaScript hanya mengatur kelasnya, sehingga logika dan tampilan tidak bercampur. Contohnya `classList.toggle("sembunyi")` di Latihan 2, `classList.toggle("highlight")` di Latihan 3, dan `classList.toggle("selesai")` untuk mencoret tugas di Latihan 6.

**7. Sebutkan minimal tiga skenario pengujian validasi form.**

| No | Skenario | Input | Hasil yang diharapkan |
|---|---|---|---|
| 1 | Nama terlalu pendek | Nama `Al`, email dan usia valid | Muncul pesan nama minimal 3 karakter |
| 2 | Format email salah | Email `zaki-example.com` | Muncul pesan email tidak valid |
| 3 | Usia di luar rentang | Usia `15` atau `101` | Muncul pesan usia harus 17 sampai 100 |
| 4 | Usia dikosongkan | Usia kosong | Muncul pesan usia tidak valid |
| 5 | Sesi belum dipilih (mini project) | Pilihan masih `-- Pilih Sesi --` | Muncul pesan untuk memilih sesi |
| 6 | Semua data valid | `Zaki Ramadhan`, `zaki@example.com`, `20` | Muncul pesan sukses dan form dikosongkan |

Tampilan skenario 1, 2, 3, 5, dan 6 bisa dilihat di bagian screenshot di atas.

## Catatan

- Form memakai atribut `novalidate`, jadi semua validasi dikerjakan oleh JavaScript, bukan oleh pesan bawaan browser.
- Di mini project, kotak ringkasan ikut berubah selagi mengetik, termasuk saat isiannya belum valid (misalnya email `zaki@`). Ini memang cara kerja kodenya, karena ringkasan hanya mengikuti isi input.
- Pesan di Latihan 5 tampil tanpa warna khusus, sedangkan di mini project pesan error berwarna merah dan pesan sukses berwarna hijau.
