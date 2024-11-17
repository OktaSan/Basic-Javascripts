//Apa itu looping do..while ?
//Looping ini sebanrnya sama seperti while namun bedanya jika nilai (FALSE) maka jalankan kode setidaknya 1 kali saja
//Jadi meskipun nilainya (FALSE) akan tetap jalan kode ini namun hanya 1 kali saja 

let i = 1;

do{
    console.log("Hello World ke " + i);
    i++;

    if(i === 70001){
        console.log("Tamat");
    }

}while(i <= 70000)