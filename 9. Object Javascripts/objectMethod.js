//Object itu tidak hanya menampung tipe data saja, namun kita dapat masukkan function kedalam fungsi tersebut
let bioData = {
    nama: 'Yulistikan',
    umur: 19,
    domisili: 'Lamongan',
    lahir: 'Kota Surabaya',
    print: function() {
        console.log(`Nama saya ${this.nama}, umur saya ${this.umur}, sekrang saya berdomisili di${this.domisili}, dan lahir di ${this.lahir}`)
    }
}

//Ketika menambahkan function lain kedalam object juga memiliki cara yang sama 
bioData.hitung = function(angka1, angka2){
    return angka1 * angka2;
}
//Untuk memanggil function print
bioData.print()

//Untuk memanggil funnction  hitung
console.log(bioData.hitung(5, 7))