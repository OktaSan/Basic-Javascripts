//Nomer 1
const nama = "Okta Putra Ramadhan";
let umur = 19;
let statuss = "aktif";

console.log(`Namaku ${nama} dan umurku ${umur}, aku ${statuss} di OSIS sejak 2022-2023`)

//Nomer 2
let panjang = 5;
let lebar = 5;
let luas = panjang * lebar;
console.log(`persegi panjang yang memiliki panjang ${panjang} dan lebar ${lebar} akan memiliki luas ${luas}`)

//Nomer 3
let nilai = 45;

if (nilai >= 60) {
    console.log(`${nama} Lulus`)
} else{
    console.log(`${nama} Tidak lulus`)
}

//Nomer 4
let x = 60;
let y = 70;

if (x >= 50 && y >= 50) {
    console.log(`${x} dan ${y} lebih dari 50`)
} else {
    console.log("Salah satu atau keduanya kurang dari atau sama dengan 50")
}

//Nomer 5
function hitungKelilingLingkaran(radius) {
    let proses = 2 * 3.14 * radius
    return proses
}

console.log(hitungKelilingLingkaran(7))


//Nomer 6
function cekTahunKabisat(tahun) {
    if(tahun % 4 == 0 || tahun % 100 == 0) {
        console.log(`${tahun} adalah tahun Kabisat`)
    } else if (tahun % 400 == 0 || tahun % 100 == 0 ) {
        console.log(`${tahun} adalah tahun Kabisat`)
    } else {
        console.log(`${tahun} bukan tahun Kabisat`)
    }
}

cekTahunKabisat(2025)

//Nomer 7
let a = 7;
let b = 6;
let c = 5;

if (a > b && a> c) {
    console.log(`${a} adalah angka terbesar dari ${b} dan ${c}`)
} else {
    console.log(`${a} bukan bukan angka terbesar dari ${b} dan ${c}`)
}

//Nomer 8
let total = 100;
total += 50;
total = total - 30;
total = total * 3;
total = total / 4;
console.log(total)