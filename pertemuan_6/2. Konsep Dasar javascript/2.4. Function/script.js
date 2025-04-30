//1. Function tanpa parameter
function salam() {
  console.log("Halo, selamat datang!");
}

salam(); // Output: Halo, selamat datang!

//2. Function dengan parameter
function halo(nama) {
  console.log(`Halo, ${nama}!`);
}

halo("Andi"); // Output: Halo, Andi!
halo("Siti"); // Output: Halo, Siti!

//3. Function dengan hasil balik (return)
function tambah(a, b) {
  return a + b;
}

const hasil = tambah(3, 4);
console.log(hasil); // Output: 7

//3. Function menerima function lain
function sayHello(nama) {
  return `Halo, ${nama}!`;
}

function tampilkanPesan(func, nama) {
  console.log(func(nama));
}

tampilkanPesan(sayHello, "Andi");
// Output: Halo, Andi!

//4. Function mengembalikan function lain
function buatPenambah(angka) {
  return function (nilai) {
    return nilai + angka;
  };
}

const tambahLima = buatPenambah(5);
console.log(tambahLima(10));
// Output: 15

//Contoh Function
const angka = [1, 2, 3, 4, 5];

const hasil2 = angka.map(function (nilai) {
  return nilai * 2;
});

console.log(hasil2);
// Output: [2, 4, 6, 8, 10]

// 5. Callback Function
function tungguSebentar(callback) {
  console.log("Tunggu 2 detik...");
  setTimeout(() => {
    console.log("2 detik berlalu!");
    callback();
  }, 2000);
}

function setelahTunggu() {
  console.log("Sekarang lanjut kerja!");
}

tungguSebentar(setelahTunggu);
