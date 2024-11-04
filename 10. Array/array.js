//Array adalah tipe variabel yang dapat menampung banyak tipe data dalam satu variabel 
//Array biasanya ditandai dengan tanda []

//Contoh tidak menggunakan array
let namaSiswa1 = 'Andi';
let namaSiswa2 = 'Bagas';
let namaSiswa3 = 'Budi';

console.log(namaSiswa1);
console.log(namaSiswa2);
console.log(namaSiswa3);

//Cobtoh menggunakan Array
//Nomr index array selalu dimulai dari 0
let namaKaryawan = ['Gusti', 'Harry', 'Gaski']

//Menampilkan semua element yang ada di dalam array namaKaryawan array
console.log(namaKaryawan);

//Menampilkan element array 'harry'
console.log(namaKaryawan[1])

//Menampilkan element terakhir array
console.log(namaKaryawan[namaKaryawan.length - 1]);

const buah = [
    'apel',
    'semangka',
    'jeruk'
]

buah[0] = 'kelengkeng';

console.log(buah)