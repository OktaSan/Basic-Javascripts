//for...in itu sendiri untuk apa ?
//Jadi kegunaan looping ini lebih tepatnya ditekankan untuk melooping key-value yang ada didalam object
//Sedikit penjelasan, variabel car itu untuk apa ?
//Jadi variabel car itu kita deklarasikan untuk penampung sementara key dalam object

const mobil = {
    //Key =  merk, nama, tahun, bahanBakar
    //Value = Honda, Brio, 2024, Pertamax
    merk : "Honda",
    nama : "Brio",
    tahun : 2024,
    bahanBakar : "Pertamax"
}

for(car in mobil) {
    console.log(car, ":", mobil[car])
}


const pelajaran = {
    senin : "Agama",
    selasa : "Sejarah",
    rabu : "Libur",
    kamis : "TIK"
}

for(study in pelajaran) {
    console.log(study, ":", pelajaran[study])
}