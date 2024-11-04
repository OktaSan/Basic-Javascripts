//Functions Hoisting adalah sebuah fungsi yang dapat kita panggil terlebih dahulu lalu menuliskan codenya dibawahnya

console.log(hitung(10, 5));

function hitung(angka1, angka2) {
  return angka1 * angka2;
}

//Function Hoising ini hanya bisa digunakan untuk function langsung dan tidak dapat di gunakan oleh function yang ada di dalam variabel