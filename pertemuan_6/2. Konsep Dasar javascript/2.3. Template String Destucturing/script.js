// Template String

//Cara lama (pakai tanda +)
// const nama = "Dias";
// const pesan = "Halo, nama saya " + nama + ".";
// console.log(pesan); // Output: Halo, nama saya Dias.


// const nama = "Dias";
// const pesan = `Halo, nama saya ${nama}.`;
// console.log(pesan); // Output: Halo, nama saya Dias.



//Destucturing
//Destructuring Array (cara lama)

// const angka = [1, 2, 3];
// const satu = angka[0];
// const dua = angka[1];
// const tiga = angka[2];

// console.log(satu, dua, tiga); // Output: 1 2 3


//Pakai destructuring:
// const angka = [1, 2, 3];
// const [satu, dua, tiga] = angka;
// console.log(satu, dua, tiga); // Output: 1 2 3



//Destructuring Object
//Cara lama
// const user = {
//     nama: "Dias",
//     umur: 25
//   };

// const nama = user.nama;
// const umur = user.umur;

// console.log(nama, umur); // Output: Dias 25



// Destucturing Object Cara Baru
// const user = {
//     nama: "Dias",
//     umur: 25
//   };

// const { nama, umur } = user;
// console.log(nama, umur); // Output: Dias 25


//Destructuring Object Contoh
// function perkenalan({ nama, umur }) {
//     console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun.`);
//   }
  
//   const orang = {
//     nama: "Budi",
//     umur: 30
//   };
  
//   perkenalan(orang);  // Output: Halo, nama saya Budi, umur saya 30 tahun.
  