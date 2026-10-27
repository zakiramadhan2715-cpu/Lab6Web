// ==========================================
// Latihan 1 & 2 & Eksperimen Mandiri 4
// ==========================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombol = document.getElementById("tombolAksi");
const btnToggle = document.getElementById("btnToggle");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

tombol.addEventListener("click", function () {
    const waktuSekarang = new Date().toLocaleTimeString();
    pesan.textContent = `Tombol diklik pada pukul ${waktuSekarang}`;
});

btnToggle.addEventListener("click", function () {
    pesan.classList.toggle("sembunyi");
});

// ==========================================
// Latihan 3 — Mengubah Kelas dan Gaya CSS
// ==========================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// ==========================================
// Latihan 4 — Event Input dan Penghitung Karakter
// ==========================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// ==========================================
// Latihan 5 — Validasi Form Pendaftaran
// ==========================================
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Eksperimen Mandiri 2: Minimal 3 Karakter
    if (nama.length < 3) {
        pesanForm.textContent = "Nama harus terdiri dari minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});

// ==========================================
// Latihan 6 & Eksperimen Mandiri 1 (To-Do List)
// ==========================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button"); // Tombol Hapus

    label.textContent = teks + " ";
    
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    hapus.type = "button";
    hapus.textContent = " Hapus";
    hapus.addEventListener("click", function () {
        item.remove(); // Menghapus item
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});

// ==========================================
// Mini Project — Form Pendaftaran Workshop
// ==========================================
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const pilihanSesi = document.getElementById("pilihanSesi");
const btnResetForm = document.getElementById("btnResetForm");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const sisaKarakter = document.getElementById("sisaKarakter");

const ringkasanNama = document.getElementById("ringkasanNama");
const ringkasanEmail = document.getElementById("ringkasanEmail");
const ringkasanSesi = document.getElementById("ringkasanSesi");

namaWorkshop.addEventListener("input", function () {
    const sisa = 50 - namaWorkshop.value.length;
    sisaKarakter.textContent = sisa;
    ringkasanNama.textContent = namaWorkshop.value.trim() || "-";
});

emailWorkshop.addEventListener("input", function () {
    ringkasanEmail.textContent = emailWorkshop.value.trim() || "-";
});

// Eksperimen Mandiri 3: Event Change
pilihanSesi.addEventListener("change", function () {
    ringkasanSesi.textContent = pilihanSesi.value || "-";
});

formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = pilihanSesi.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanWorkshop.className = "";

    if (nama.length < 3) {
        pesanWorkshop.textContent = "Nama harus terdiri dari minimal 3 karakter!";
        pesanWorkshop.classList.add("pesan-error");
    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent = "Masukkan alamat email yang valid!";
        pesanWorkshop.classList.add("pesan-error");
    } else if (sesi === "") {
        pesanWorkshop.textContent = "Silakan pilih sesi workshop!";
        pesanWorkshop.classList.add("pesan-error");
    } else {
        pesanWorkshop.textContent = "Pendaftaran berhasil disimpan!";
        pesanWorkshop.classList.add("pesan-sukses");
    }
});

btnResetForm.addEventListener("click", function () {
    formWorkshop.reset();
    sisaKarakter.textContent = "50";
    ringkasanNama.textContent = "-";
    ringkasanEmail.textContent = "-";
    ringkasanSesi.textContent = "-";
    pesanWorkshop.textContent = "";
});