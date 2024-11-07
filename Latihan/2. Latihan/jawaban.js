let koleksiBuku = [
    {judul: 'One Room Of Happiness', pengarang: 'Hakuri', tahunTerbit: 2022, status: true},
    {judul: 'Kaoru & Rin', pengarang: 'Saka Mikami', tahunTerbit: 2023, status: true},
    {judul: 'Python', pengarang: 'Abdul Kadir', tahunTerbit: 2019, status: true}
]

//Panggil function ini jika ingin menambahkan data ke dalam array
let tambahBuku = function (judul, pengarang, tahunTerbit,status){
    koleksiBuku.push({judul: judul, pengarang: pengarang, tahunTerbit: tahunTerbit, status: status})
    console.log(koleksiBuku)
}

//Panggil function ini untuk mencari data yang ada di dalam array 
let cariBuku = function(judul){
    let buku = koleksiBuku.find(books => books.judul.toLowerCase() === judul.toLowerCase())
    console.log(buku);
}

let bukuDiPinjam = function(judul){
    let pinjam = koleksiBuku.find(books => books.judul == judul)

    if(pinjam){
        pinjam.status = false;
        console.log(pinjam)
    }
}

let bukuDiKembalikan = function(judul){
    let kembali = koleksiBuku.find(books => books.judul == judul)

    if(kembali){
        kembali.status = true;
        console.log(kembali)
    }
}
tambahBuku('HTML5', 'Gin San', 2005, true)

bukuDiKembalikan('Python')