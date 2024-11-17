//FOR LOOP digunakan ketika kita tahu kapan harus berhenti melooping.

//Penulisan model 1:
for(y = 5/*Inisiasi variabel*/; y >= 1 /*kondisi*/; y--/*Ekspresi akhir*/){
    console.log(y)
}

//Penulisan model 2: Memisahkan variabel dari looping for secara langsung
let i = 1;

for(; i <= 5; i++) {
    console.log(i)
}

//Contoh perulangan untuk mencari bilangan ganjil dengan range antara 1 hingga 100
for(i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log('Hallo', i)
    }
}