# sea-cinemaa

__Login.vue__

Merupakan komponen untuk tampilan halaman login.

Menggunakan form untuk menerima input email dan password dari pengguna.

Memanggil fungsi login dari modul @/auth untuk melakukan proses login.

Jika login berhasil, akan dilakukan redirect ke halaman utama.

Jika login gagal, akan menampilkan pesan error di console.


__Register.vue__

Merupakan komponen untuk tampilan halaman registrasi.

Menggunakan form untuk menerima input email dan password dari pengguna.

Memanggil fungsi register dari modul @/auth untuk melakukan proses registrasi.

Jika registrasi berhasil, akan dilakukan redirect ke halaman utama.

Jika registrasi gagal, akan menampilkan pesan error di console.


__MovieDetail.vue__

Merupakan komponen untuk menampilkan detail film.

Menampilkan judul, deskripsi, rating, dan harga tiket film.

Menggunakan router-link untuk mengarahkan pengguna ke halaman pemesanan tiket film terkait.

__TicketBooking.vue__

Merupakan komponen untuk halaman pemesanan tiket film.

Menampilkan judul film dan jumlah kursi tersedia.

Menggunakan form untuk menerima input nomor kursi, nama, dan usia pengguna.

Memanggil fungsi bookTicket untuk memesan tiket.

Jika pemesanan berhasil, akan menampilkan pesan sukses di console.

Jika pemesanan gagal, akan menampilkan pesan error di console.

__Transaction.vue__

Merupakan komponen untuk menampilkan riwayat transaksi pengguna.

Mengambil data transaksi dari API melalui fungsi fetchTransactions.

Menampilkan daftar transaksi dengan informasi film, nomor kursi, dan total biaya.

Memberikan tombol "Cancel" untuk membatalkan transaksi.

Menggunakan fungsi cancelTransaction untuk menghapus transaksi dari daftar.

__Penjelasan Tambahan__

File auth.js berisi fungsi-fungsi untuk melakukan registrasi, login, logout, dan mendapatkan status autentikasi menggunakan Firebase.

File main.js berfungsi sebagai entry point aplikasi Vue, mengkonfigurasi Firebase, dan memuat dan menjalankan aplikasi Vue dengan menggunakan router dan komponen App.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
