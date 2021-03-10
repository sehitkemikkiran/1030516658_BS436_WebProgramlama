const kartlar1 = ["kopek.png", "kopek.png", "kedi.png"];
const kartlar2 = ["kopek.png", "kedi.png"];
var kart1;
var kart2;
var kart3;



const yeniKartlar1 = () => {
    let index1 = Math.floor(Math.random()*kartlar1.length);
    kart1 = kartlar1[index1];
    console.log(kart1);
}

const yeniKartlar2 = () => {
    if(kart1==="kedi.png"){
        kart2 = "kopek.png";
        console.log(kart2);
    } else{
        let index2 = Math.floor(Math.random()*kartlar2.length);
        kart2 = kartlar2[index2];
        console.log(kart2);
    }
}

const yeniKartlar3 = () => {
    if((kart1==="kedi.png" && kart2==="kopek.png") || (kart1==="kopek.png" && kart2==="kedi.png")){
        kart3 = "kopek.png";
        console.log(kart3);
    } else {
        kart3 = "kedi.png";
        console.log(kart3);
    }
}

