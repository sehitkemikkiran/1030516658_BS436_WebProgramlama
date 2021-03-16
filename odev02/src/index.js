const kartlar1 = ["kopek.png", "kopek.png", "kedi.png"];

let kart1;
let kart2;
let kart3;
let html1;
let html2;
let html3;
let tahminSayisi=2;


export const yeniKartlar1 = () => {
    if (tahminSayisi!==0) {
        let index1 = Math.floor(Math.random() * kartlar1.length);
        kart1 = kartlar1[index1];
        html1 = document.getElementById("img0").src = kart1;
        if (kart1==="kedi.png"){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        tahminSayisi-=1;
    }else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}

export const yeniKartlar2 = () => {
    if (tahminSayisi !== 0) {
        if (kart1 === "kedi.png") {
            kart2 = "kopek.png";
            html2 = document.getElementById("img1").src = kart2;

        } else {
            let index2 = Math.floor(Math.random() * kartlar1.length);
            kart2 = kartlar1[index2];
            html2 = document.getElementById("img1").src = kart2;
        }
        if (kart2==="kedi.png"){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        tahminSayisi-=1;
    }else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}

export const yeniKartlar3 = () => {
    if (tahminSayisi !== 0) {
        if (kart1 === "kedi.png" || kart2 === "kedi.png") {
            kart3 = "kopek.png";
            html3 = document.getElementById("img2").src = kart3;

        } else {
            kart3 = "kedi.png";
            html3 = document.getElementById("img2").src = kart3;

        }
        if (kart3==="kedi.png"){
            document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        tahminSayisi-=1;
    }else{
        document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}

