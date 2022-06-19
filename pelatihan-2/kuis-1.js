//2
const nama = ["Sabila", "Noor","Sania"];

//3
const fungsi = nama.map(function(namaku){
    return namaku + "s";});

    console.log(fungsi);
//4
 const namaBaru = [...fungsi,19];
 console.log(namaBaru);

 //5
 let namaDepan, namaTengah, namaBelakang,umur;
[namaDepan, namaTengah, namaBelakang,umur] = namaBaru;

//6
let mahasiswa = {
    namaLengkap : namaDepan + " " + namaTengah + " " + namaBelakang,
    umur : umur
}


//7
let {namaLengkap} = mahasiswa;
console.log(namaLengkap);

//8
const cetak = function(cb){
    console.log(namaLengkap);
    cb();
}

//9
cetak (function(){
    console.log(umur);
});


 
 