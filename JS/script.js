let user = localStorage.getItem("user")

if(!user){
    window.location.href="index.html"
}

function relogin(){
    localStorage.removeItem("user");
    localStorage.removeItem("alamat");
    localStorage.removeItem("umur");

    window.location.href = "index.html";
}

let buku = JSON.parse(localStorage.getItem("buku")) || [
{judul:"Laskar Pelangi",penulis:"Andrea Hirata",jenis:"Novel",status:"Tersedia"},
{judul:"Bumi",penulis:"Tere Liye",jenis:"Novel",status:"Tersedia"},
{judul:"Perahu Kertas",penulis:"Dee Lestari",jenis:"Novel",status:"Tersedia"},
{judul:"Matematika untuk Pemula",penulis:"John Doe",jenis:"Buku Pelajaran",status:"Tersedia"},
{judul:"Fisika Dasar",penulis:"Jane Smith",jenis:"Buku Pelajaran",status:"Tersedia"}
]

let history = JSON.parse(localStorage.getItem("history")) || []

function simpanData(){
localStorage.setItem("buku",JSON.stringify(buku))
localStorage.setItem("history",JSON.stringify(history))
}

function showPage(id){
localStorage.setItem("page",id)

document.querySelectorAll(".page").forEach(p=>p.style.display="none")
document.getElementById(id).style.display="block"

render()
}

function tambahBuku(){
let judul=document.getElementById("judul").value
let penulis=document.getElementById("penulis").value
let jenis=document.getElementById("jenis").value

if(judul=="") return

buku.push({judul,penulis,jenis,status:"Tersedia"})

simpanData()
render()
}

function pinjam(i){
if(buku[i].status=="Tersedia"){

let nama=prompt("Nama Peminjam")
let jumlah=prompt("Jumlah Buku")
let tanggal=new Date().toLocaleDateString()

buku[i].status="Dipinjam"

history.push({
judul:buku[i].judul,
nama:nama,
jumlah:jumlah,
tanggal:tanggal,
status:"Dipinjam"
})

}else{
buku[i].status="Tersedia"
}

simpanData()
render()
}

function ubahStatus(i){
history[i].status = history[i].status=="Dipinjam" ? "Dikembalikan" : "Dipinjam"

simpanData()
render()
}

function hapusData(i){
history.splice(i,1)

simpanData()
render()
}

function render(){

let html=""

for(let i=0;i<buku.length;i++){
html+=`
<tr>
<td>${i+1}</td>
<td>${buku[i].judul}</td>
<td>${buku[i].penulis}</td>
<td>${buku[i].jenis}</td>
<td>${buku[i].status}</td>
<td>
<button onclick="pinjam(${i})">
${buku[i].status=="Tersedia"?"Pinjam":"Kembalikan"}
</button>
</td>
</tr>
`
}

document.getElementById("tableBuku").innerHTML=html

let rekom=""

for(let i=0;i<buku.length;i++){
if(buku[i].status=="Tersedia"){
rekom+=`
<div class="book">
<h3>${buku[i].judul}</h3>
<p>${buku[i].penulis}</p>
</div>
`
}
}

document.getElementById("rekomendasi").innerHTML=rekom

let hist=""

for(let i=0;i<history.length;i++){
hist+=`
<tr>
<td>${i+1}</td>
<td>${history[i].judul}</td>
<td>${history[i].tanggal}</td>
<td>${history[i].nama}</td>
<td>${history[i].jumlah}</td>
<td>${history[i].status}</td>
<td>
<button onclick="ubahStatus(${i})">Update</button>
<button onclick="hapusData(${i})">Delete</button>
</td>
</tr>
`
}

document.getElementById("historyTable").innerHTML=hist
}


function searchRekomendasi(){
let keyword = document.getElementById("searchDashboard").value.toLowerCase()

let cards = document.querySelectorAll("#rekomendasi .book")

cards.forEach(card=>{
let text = card.innerText.toLowerCase()

card.style.display = text.includes(keyword) ? "block" : "none"
})
}

showPage(localStorage.getItem("page") || "dashboard");
