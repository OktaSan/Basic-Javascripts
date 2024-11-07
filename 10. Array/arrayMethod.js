//Mengubah element array menjadi string dengan tostring()
let biodata = ['Gin', 18, true];
console.log(biodata.toString())

//Menggabungkan element array dengan join()
console.log(biodata.join(" "))

//Menambah dan menghapus element array dengan pop(), push(), shift(), dan unshift()
//pop() menghapus element terakhir dari array
let angka = [1, 2, 3, 4, 5]
angka.pop();
console.log(angka);

//push() menambahkan element dibagian akhir array
angka.push('hai oktasann')
console.log(angka);

//shift() menghapus element pertama dari array
angka.shift();
console.log(angka);

//unshift() menambahkan element pertama dari array
angka.unshift('Hai jeremie');
console.log(angka);

//Menggunakan splice() untuk menambahkan, menghapus, mengganti element array
//2 adalah index yang harus di isi didalam method splice(). Index menjelasakan posisi dimana element harus ditambahkan
//1 adalah parameter yang mendefinisikan jumlah element yang harus dihapus setelah penambahan parameter ke tiga san empat.
//Array dimulai dari 0.
let mobil = ['honda', 'suzuki', 'hyundai', 'toyota'];
mobil.splice(2, 1, 'BMW', 'Ferari');
console.log(mobil)

console.log('  ')

//concat() adalah method untuk menggabungkan 2 array atau lebih
let hewan = ['burung', 'jerapah', 'gajah']
let manusia = ['laki', 'perempuan']
let tumbuhan = ['jamur', 'pohon', 'padi']
let randoms = hewan.concat(manusia, tumbuhan);
console.log(randoms);

//Mengambil eleemnt array slice()
//1 adalah indeks dari mana pemotongan dimulai (inklusif).
//4 adalah Indeks di mana pemotongan berakhir (eksklusif). Elemen pada indeks ini tidak akan disertakan dalam hasil.
let rasa = ['seblak', 'sambel', 'misis', 'coklat', 'permen']
let makananPedas = rasa.slice(1, 4);
console.log(makananPedas)

//Mengurutkan array menggunakan sort()
//Mengurutkan nilai dari yang terkecil ke terbesar 
rasa.sort()
console.log(rasa)

//Memutar urutan array menggunaka reverse()
let pensil = ['joyko', 'pilot', 'snowman', 'kenko', 'faster']
pensil.reverse()
console.log(pensil)

//mengurutkan nilai dari yang terbesar ke terkecil
pensil.sort().reverse()
console.log(pensil)

//find() untuk mecari satu data dalam array
let buku = [
    {nama: 'Sidu', lembar: 100},
    {nama: 'polo', lembar: 78}
]

function cariBuku(nama){
    let bukuBaru = buku.find(books => books.nama === nama)
    console.log(bukuBaru)
}

cariBuku('polo')
