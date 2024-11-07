const hobi = "Sepak bola";

//Lingkup global adalah sebuah variabel yang dapat di panggil baik diluar function/blok itu sendiri.
function bioData () {
    let namaa = "Bambang";
    let umur = 19;
    if(hobi === "Sepak bola"){
        console.log(namaa, umur, hobi)
    }
}

bioData()

//Lingkup local adalah sebuah variabel yang hanya bisa di akses di lingkup function/blok itu sendiri.
function bioData () {
    let namaa = "Bambang";
    let umur = 19;
    if(hobi === "Sepak bola"){
        const atlet = "erik"
        console.log(namaa, umur, hobi)
    }
    console.log(atlet)
}