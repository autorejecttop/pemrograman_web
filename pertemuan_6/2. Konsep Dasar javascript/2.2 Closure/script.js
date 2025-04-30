//2.2 Closure
/*Closure adalah fungsi di dalam fungsi yang masih bisa mengakses variable dari fungsi luarnya meskipun fungsi luarnya sudah selesai.

Contoh Analoginya: 
    Bayangkan kamu lagi di dapur, terus kamu bawa bekal dari dapur ke ruang tamu.
    Nah:
        Dapur = fungsi utama (sumber data).
        Bekal yang kamu bawa = variable dari dapur.
        Ruang tamu = fungsi yang lahir dari dapur (function di dalam function).
        Walaupun kamu sudah pergi dari dapur, kamu masih bisa makan bekalnya di ruang tamu.
    ➡️ Intinya:
        Closure itu membawa data dari fungsi luar supaya bisa terus dipakai, walaupun fungsi luar sudah selesai jalan.*/

// ====================================================================================

//Contoh Program
//1. Menyimpan Data Privat
function counter() {
  let hitung = 0; // Data privat, tidak bisa diakses dari luar

  return function () {
    hitung++;
    console.log(hitung);
  };
}

const tambah = counter();

tambah(); // 1
tambah(); // 2
tambah(); // 3

/*Penjelasan:
hitung hanya bisa diakses lewat function tambah().*/

// ====================================================================================

//2. Factory Function
function buatSalam(nama) {
  return function (pesan) {
    console.log(`Halo ${nama}, ${pesan}`);
  };
}

const salamUntukPlayer1 = buatSalam("Player1");
const salamUntukPlayer2 = buatSalam("Player2");

salamUntukPlayer1("selamat belajar!"); // Halo Player1, selamat belajar!
salamUntukPlayer2("selamat berjuang!"); // Halo Player2, selamat berjuang!

/*Penjelasan:
salamUntukPlayer1 membawa data "Player1", dan salamUntukPlayer2 membawa "Player2".
Setiap function hasil itu punya memory masing-masing.*/

// ====================================================================================

//3. Event Handler
function buatKlikCounter() {
  let klik = 0;

  return function () {
    klik++;
    console.log(`Tombol diklik ${klik} kali`);
  };
}

const tombolKlik = buatKlikCounter();

// Simulasi klik tombol
tombolKlik(); // Tombol diklik 1 kali
tombolKlik(); // Tombol diklik 2 kali
tombolKlik(); // Tombol diklik 3 kali

/*Penjelasan:
Setiap klik ➔ closure ingat berapa kali tombol sudah diklik.*/

// ====================================================================================

/*🧠 Struktur Cara Kerja Closure:

Fungsi Luar
|
|-- Variable Luar
|
|-- Fungsi Dalam (Closure)
       |
       |-- Bisa akses Variable Luar kapan saja*/
