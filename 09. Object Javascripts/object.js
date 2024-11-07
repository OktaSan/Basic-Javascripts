//Cara mendeklarasikan object dan ada 2 cara membuat object

//Object litteral
let nama = {
    username: 'Gin',
    umur: 19,
    hobi: 'Bermain bersama teman'
}
//Mengubah nilai dari properti username di variabel nama 
nama.username = 'Stevano';

//Menambahkan properti + nilai object 
nama.rumah = 'Surabaya';


console.log(nama.username)
console.log(nama)

//Object menggunakan kata kunci new
let sonic = new Object();

sonic.hobi = 'Mengerjakan tugas kuliah';
sonic.umur = 19;
sonic.rumah = 'Gresik';

//Cara menghapus properti
delete sonic.rumah;

console.log(sonic)