let makan = "minggu";

//Jika megelolah pengondisian banyak disarankan menggunakan SWITCH CASE BREAK
//SWITCH digunakan untuk memerikasa variabel (makan) lalu mengeksekusi sesuai dengan nilai
switch (makan) {
    case "senin": //CASE menyediakan pilihan nilai untuk diperiksa dalam SWITCH
        console.log("Soto");
        break; //Menghentikan eksekusi SWITCH setelah kode dalam case dijalankan 
    case "selasa":
        console.log("Rawon");
        break;
    case "rabu":
        console.log("Indomie");
        break;
    default: //Jikai nilai tidak ada yang cocok oleh CASE maka DEFAULD akan dijalankan 
        console.log("Micin");
        break;
}