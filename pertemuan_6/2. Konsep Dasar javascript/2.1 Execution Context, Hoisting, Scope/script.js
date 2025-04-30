// 2.1 EXECUTION CONTEXT, HOISTING, AND SCOPE


//1. Execution Context
/*Execution Context adalah tempat saat JavaScript memproses dan menjalankan kode.

➔ Tahapannya:
Creation Phase (fase persiapan):
Buat memory untuk variable & function.
Variable = undefined, Function = sudah siap.
Execution Phase (fase eksekusi):
Jalankan kode baris per baris.


contoh program: */
// console.log(nama);  // undefined (karena baru dibuat tempatnya tapi belum ada isinya)
// var nama = "Dias";
// console.log(nama);  // Dias


/*Penjelasan:
Waktu masuk Creation Phase, var nama dibuat dulu tapi isi undefined.
Waktu Execution Phase, baru nama diisi "Dias".*/




// ====================================================================================


//2. Hoisting
/*Hoisting itu mengangkat deklarasi ke atas, sebelum kode dijalankan.

    Variable var ➔ diangkat, tapi nilainya tetap undefined.
    Function declaration ➔ diangkat dan bisa langsung dipakai.

Contoh Program:*/
    // sayHello(); // Output: Halo semuanya!

    // function sayHello() {
    //   console.log("Halo semuanya!");
    // }
    
    // console.log(angka); // Output: undefined
    // var angka = 10;
    // console.log(angka); // Output: 10
    

/*Penjelasan:
    sayHello langsung bisa dipanggil di atas karena hoisting penuh.
    angka sudah ada tempatnya di memory, tapi nilainya undefined sebelum diisi 10.*/




// ====================================================================================



//3. Scope
/*Scope adalah area/lokasi di mana kita bisa mengakses variable atau function.
    Ada 3 jenis:
    Global Scope ➔ Bisa dipanggil di mana-mana.
    Function Scope ➔ Cuma hidup di dalam function.
    Block Scope ➔ Cuma hidup di dalam { } (khusus let dan const).
    
Contoh Program:*/
// Global Scope
// let nama = "Dias";

// function halo() {
//   // Function Scope
//   let umur = 20;
//   console.log(nama); // bisa akses global
//   console.log(umur); // bisa akses local
// }

// halo();

// console.log(nama); // bisa
// console.log(umur); // ERROR! karena 'umur' cuma hidup di dalam function

//Block Scope
// if (true) {
//     let hobi = "Bermain bola";
//     console.log(hobi); // OK
//   }
  
//   console.log(hobi); // ERROR! karena hobi hanya hidup dalam blok if
  

/*Penjelasan:
  nama bisa dipakai di mana saja (global).
  umur cuma bisa dipakai di dalam function halo.
  hobi cuma bisa dipakai di dalam blok if.*/
    

// ====================================================================================

/*Ringkasan :
Konsep	                Penjelasan	                                        Contoh Kejadian
Execution Context	    Tempat jalaninnya kode.	                            Setiap file atau function dibuat ruangan baru.
Hoisting	            Variable & function "diangkat" ke atas memory.	    Bisa pakai function sebelum deklarasi.
Scope	                Batas di mana variable bisa diakses.	            Variable di function tidak bisa diakses dari luar.*/