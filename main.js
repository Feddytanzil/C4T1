const NamaKereta = "Mutiara Selatan";
const kelas = "Eksekutif";

console.log(`Selamat Datang di kereta ${NamaKereta}, anda berada pada gerbong kelas ${kelas}`);

let GerbongKhusus = 50
let GerbongKhusus = 80
console.log(GerbongKhusus);

const SudahAntigen = true;
const BelumAntigen = false;

console.log(SudahAntigen);
console.log(BelumAntigen);

const SuratKeterangan = {
    nama: "Binarian"
    alamat: {"Jl. Kanayakan Baru"
    "rt/rw": "04/05"
    },
    pekerjaan: [
    "Manager"
    ]
};

console.log(ktp.nama)
console.log(ktp["alamat"]["rt/rw"])
console.log(ktp.alamat["rt/rw"])

ktp.pekerjaan.forEach(function(item) {
    console.log(`${item} adalah pekerjaan ${ktp.nama}`)
})

const namaKeluarga = ["Binarian", "Kanay", "Sajati"];
const namaKartuKeluarga = [
    "Pak Binarian",
    "Bu Kanay",
    "Dik Sajati"
];

const namaKK = new Array("Binarian", "Kanay", "Sajati");
console.log(namaKeluarga)
console.log(namaKartuKeluarga.length)

const arrays = [namaKeluarga, namaKartuKeluarga]
console.log(arrays)

const animal = ["chicken", "Duck", "Cat"]
animal.push("Elephant")
console.log(animal)

animal.pop()
console.log(animal)
