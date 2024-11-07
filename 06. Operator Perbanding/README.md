# JavaScript Comparison Operators

Ini adalah dokumentasi singkat tentang penggunaan operator perbandingan di JavaScript, yang sering membingungkan bagi pemula.

## Mengapa `5 == "5"` Hasilnya `true`?

Dalam JavaScript, operator `==` dikenal sebagai **Loose Equality**. Artinya, JavaScript akan mencoba menyesuaikan tipe data dari kedua operand (sebelah kiri dan kanan) sebelum melakukan perbandingan. 

Pada kasus `5 == "5"`:
1. JavaScript mengubah string `"5"` menjadi number 5.
2. Setelah konversi tipe, barulah perbandingan dilakukan, sehingga hasilnya `true`.

**Catatan**: Proses ini disebut _type coercion_, yaitu memaksa (atau mengonversi) tipe data agar sesuai.

### Contoh Kode

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

Pada contoh kedua, hasilnya `false` karena menggunakan operator `===`.

## Perbedaan Antara `==` dan `===`

- **`==` (Loose Equality)**: Hanya membandingkan _nilai_ tanpa memperhatikan tipe data. JavaScript akan mencoba mengonversi tipe data operand jika diperlukan.
- **`===` (Strict Equality)**: Membandingkan baik _nilai_ maupun _tipe data_. Tidak ada konversi tipe data.

### Perbandingan Contoh

```javascript
console.log(0 == false);    // true, karena false dikonversi menjadi 0
console.log(0 === false);   // false, karena tipe data number dan boolean berbeda
```

## Operator Perbandingan Lainnya

Selain `==` dan `===`, ada beberapa operator perbandingan lain yang sering digunakan:

- **`!=`**: Loose inequality, sama seperti `==` tapi memeriksa ketidaksamaan.
- **`!==`**: Strict inequality, sama seperti `===` tapi memeriksa ketidaksamaan.
- **`>`**: Lebih besar dari.
- **`<`**: Lebih kecil dari.
- **`>=`**: Lebih besar atau sama dengan.
- **`<=`**: Lebih kecil atau sama dengan.


### Perhatian!

Untuk hasil yang lebih konsisten, lebih baik menggunakan `===` dan `!==` ketika membandingkan nilai dalam JavaScript.

---

Dokumentasi ini dapat membantu Anda memahami lebih dalam perbedaan operator perbandingan di JavaScript.