//Kita dapat mendeklarasikan fungsi dengan 2 cara:

//Berdiri sendiri 
function sapa() {
    return "hallo semua !";
}
console.log(sapa())

//Disimpan dalam variabel
let nama = function(){
    return "Namaku Oktasann";
}
console.log(nama())


//Parameter dan Argument
function data(nama, umur) {
    console.log(nama,umur)
}
data("Okta", 19)

//nama dan umur adalah sebuah parameter/syarat inputan yang harus diisi
//Okta dan 19 adalah argument yang harus dipenuhi dari syarat parameter