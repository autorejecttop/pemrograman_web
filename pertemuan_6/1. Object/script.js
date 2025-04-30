// Variabel dan konstanta (Var, Let, Const)
    // var nama = "Team2";
    // nama = "Team 3"; // bisa diubah
    // console.log(nama);

    // let umur = 20;
    // umur = 21; // bisa diubah
    // console.log(umur);
  
    // const negara = "Indonesia";
    // console.log(negara); // Indonesia
    // // negara = "Malaysia"; // ❌ Error! Tidak bisa diubah setelah dibuat.
  

// ====================================================================================
// Perbedaan let dan var
// function tesVar() {
//     if (true) {
//       var nama = "Team2";
//       console.log("Di dalam if (var):", nama); // Team2
//     }
//     console.log("Di luar if (var):", nama); // Masih bisa akses! Team2
//   }
  
//   // Menggunakan let
//   function tesLet() {
//     if (true) {
//       let umur = 20;
//       console.log("Di dalam if (let):", umur); // 20
//     }
//     // console.log("Di luar if (let):", umur); // ❌ Error! umur tidak dikenali di sini
//   }
  
//   // Jalankan
//   tesVar();
//   tesLet();
  


// ====================================================================================


// Cara untuk membuat Object pada javascript
/*Object adalah kumpulan data dan fungsi (method) yang disimpan dalam satu tempat.
Data di dalam object disebut properti (contoh: nama, umur).
Fungsi di dalam object disebut method (contoh: makan(), tidur()).
Object digunakan untuk merepresentasikan sesuatu di dunia nyata (orang, mobil, produk, dll) dalam bentuk kode.

Intinya:
Object = wadah berisi data + aksi.
*/

// ====================================================================================



// 1. Object Literal
/*✅ Cara langsung membuat objek secara manual.
Kelebihan:
Gampang dan cepat untuk bikin objek 1 atau 2 buah.
Tidak butuh function atau class.

Kekurangan:
Tidak efisien untuk membuat banyak objek (harus copy-paste terus).
Kode jadi duplikat kalau banyak object yang sama.*/


// let kalkulator = {
//   angka: 0,
//   tambah(nilai) {
//     this.angka += nilai;
//     console.log(`Angka sekarang (setelah tambah ${nilai}): ${this.angka}`);
//   },
//   kurang(nilai) {
//     this.angka -= nilai;
//     console.log(`Angka sekarang (setelah kurang ${nilai}): ${this.angka}`);
//   }
// };


// Contoh penggunaan di console:
/*kalkulator.tambah(10);
kalkulator.kurang(3);
kalkulator.tambah(7);*/



// ============================================================

// 2. Function Declaration
/*✅ Membuat fungsi yang mengembalikan objek baru.
Kelebihan:
Bisa membuat banyak objek dengan satu fungsi.
Lebih rapih daripada object literal.

Kekurangan:
Method (fungsi tambah/kurang) akan terkopi di setiap objek (boros memori)*/


// const methodkalkulator = {
//   tambah(nilai) {
//     this.angka += nilai;
//     console.log(`Angka sekarang (setelah tambah ${nilai}): ${this.angka}`);
//   },
//   kurang(nilai) {
//     this.angka -= nilai;
//     console.log(`Angka sekarang (setelah kurang ${nilai}): ${this.angka}`);
//   }
// };

// function kalkulator(angkaAwal = 0) {
//   let kalkulator = {};
//   kalkulator.angka = angkaAwal;
//   kalkulator.tambah = methodkalkulator.tambah;
//   kalkulator.kurang = methodkalkulator.kurang;
//   return kalkulator;
// }

// // Contoh penggunaan Fungsi:
//  let kal = kalkulator(5);

// Contoh penggunaan di console:
/*kal.tambah(15);
kal.kurang(4);*/


// ============================================================

// 3. Constructor Function
// keyword new
/*✅ Fungsi biasa tapi dipanggil dengan new.
Cara pakai:
let kal = new kalkulator(100);

Kelebihan:
Standar JavaScript klasik sebelum ada class.
Terlihat seperti "membuat instance" (mirip OOP).

Kekurangan:
Setiap objek tetap punya salinan method sendiri (sedikit boros memori).
Untuk efisiensi harus digabung dengan prototype.*/



// function kalkulator(angkaAwal = 0) {
//   this.angka = angkaAwal;
  
//   this.tambah = function (nilai) {
//     this.angka += nilai;
//     console.log(`Angka sekarang (setelah tambah ${nilai}): ${this.angka}`);
//   };

//   this.kurang = function (nilai) {
//     this.angka -= nilai;
//     console.log(`Angka sekarang (setelah kurang ${nilai}): ${this.angka}`);
//   };
// }


// // Contoh penggunaan Fungsi:
//  let kal = new kalkulator(100);

// Contoh penggunaan di console:
/*kal.tambah(50);
kal.kurang(30);*/


// ============================================================

// 4. Prototype
/*✅ Cara lebih efisien: Method ditaruh di prototype → semua object berbagi method yang sama
Kelebihan:
Method hanya dibuat sekali di memori, semua object share.
Lebih hemat memori dibanding Constructor biasa.

Kekurangan:
Sedikit lebih ribet di syntax.
Harus hati-hati dalam mengelola this context.*/



// function kalkulator(angkaAwal = 0) {
//   this.angka = angkaAwal;
// }

// kalkulator.prototype.tambah = function (nilai) {
//   this.angka += nilai;
//   console.log(`Angka sekarang (setelah tambah ${nilai}): ${this.angka}`);
// };

// kalkulator.prototype.kurang = function (nilai) {
//   this.angka -= nilai;
//   console.log(`Angka sekarang (setelah kurang ${nilai}): ${this.angka}`);
// };


// // Contoh penggunaan Fungsi:
//  let kal = new kalkulator(20);

// Contoh penggunaan di console:
/*kal.tambah(80);
kal.kurang(25);*/


// ============================================================


// 5. Prototype (penulisan versi class)
/*✅ Syntax modern untuk membuat objek, lebih bersih dan mirip bahasa OOP lain (seperti Java, C++).

Cara pakai:
let kal = new kalkulator(10);

Kelebihan:
Lebih bersih dan rapi.
Mudah dibaca.
Di belakang layar tetap pakai prototype, jadi hemat memori.

Kekurangan:
class hanyalah syntactic sugar atas prototype, tidak benar-benar membuat konsep class baru kayak di Java.
Versi lebih baru, mungkin error kalau environment JavaScript-nya kuno (ES5 kebawah).*/





class kalkulator {
  constructor(angkaAwal = 0) {
    this.angka = angkaAwal;
  }

  tambah(nilai) {
    this.angka += nilai;
    console.log(`Angka sekarang (setelah tambah ${nilai}): ${this.angka}`);
  }

  kurang(nilai) {
    this.angka -= nilai;
    console.log(`Angka sekarang (setelah kurang ${nilai}): ${this.angka}`);
  }
}


// Contoh penggunaan Fungsi:
 let kal = new kalkulator(10);

// Contoh penggunaan di console:
/*kal.tambah(100);
kal.kurang(40);*/



// ====================================================================================

//Kesimpulan Singkat
/*Model	                     Kapan digunakan?
Object Literal	             Kalau objek sedikit.
Function Declaration	     Kalau mau banyak objek, sederhana.
Constructor Function	     Untuk membuat banyak objek dan lebih OOP style.
Prototype	                 Kalau ingin hemat memori.
Class	                     Kalau mau syntax modern dan rapi.*/




// ============================================================
// untuk cek suatu logika: https://pythontutor.com/