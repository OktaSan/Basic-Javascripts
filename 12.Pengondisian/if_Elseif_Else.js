//Pengondisian menggunakan if, else if, else 

let nilaiAndi = 100;

//Pengondisian jika hanya ada 1 keputusan menggunakan IF saja
if(nilaiAndi > 90){
    console.log('Nilai Andi Sangat memuaskan, Lulus!')
}

//Pengondisian jika hanya ada 2 keputusan menggunakan IF ELSE
let nilaiRere = 0;
if(nilaiRere > 90){
    console.log('Nilai Rere sangat memuasakn, Lulus!')
} else {
    console.log('Nilai Rere tidak memenuhi standart kelulusan, Mengulang!')
}

//Pengondisian jika memiliki banyak keputusan, menggunakan IF ELSEIF ELSE
let nilaiTomi = 76;

if(nilaiTomi >= 90){
    console.log('Nilai Tomi sangat memuaskan, Lulus!')
} else if (nilaiTomi >= 75) {
    console.log('Nilai Tomi bagus, Lulus!')
} else {
    console.log('Nilai Tomi tidak memenuhi syarat kelulusan, Mengulang!')
}
