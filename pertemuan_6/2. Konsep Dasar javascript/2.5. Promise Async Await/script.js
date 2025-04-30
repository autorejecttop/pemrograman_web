/*Promise adalah janji dalam JavaScript.
"Kalau tidak sekarang, nanti saya penuhi."

Promise itu dipakai untuk menunggu sesuatu yang belum selesai, seperti:
Menunggu ambil data dari server 💾
Menunggu waktu tunggu ⏰
Menunggu hasil proses besar ⚙️

Intinya:
Sedang Berjalan → lagi menunggu (pending)
Berhasil → janji dipenuhi (fulfilled)
Gagal → janji tidak dipenuhi (rejected)*/

// Contoh Promise
const janji = new Promise((resolve, reject) => {
  //let makananTersedia = true;
  let makananTersedia = false;

  if (makananTersedia) {
    resolve("Makanan berhasil dikirim!");
  } else {
    reject("Makanan tidak tersedia.");
  }
});

janji
  .then((hasil) => {
    console.log(hasil); // Jika janji berhasil maka lakukan then
  })
  .catch((error) => {
    console.log(error); // Jika janji gagal maka lakukan catch
  });

// Contoh promise Asnc Await
function pesanMakanan() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let makananTersedia = true;
      //let makananTersedia = false;

      if (makananTersedia) {
        resolve("Makanan sudah siap!");
      } else {
        reject("Makanan habis.");
      }
    }, 2000); // 2 detik simulasi menunggu
  });
}

// Pakai async/await
async function mulaiPesan() {
  try {
    console.log("Memesan makanan...");
    const hasil = await pesanMakanan(); // tunggu pesanMakanan selesai
    console.log(hasil); // jika sukses
  } catch (error) {
    console.log(error); // jika gagal
  }
}

mulaiPesan();

/*await = tunggu prosesnya selesai sebelum lanjut.
async = dipakai di fungsi supaya bisa pakai await di dalamnya.*/
