
/* let mudarObackground = false;

function mudar(){

    if (mudarObackground) {
        document.body.style.backgroundImage = "Url('https://wallpapers.com/images/file/4k-blue-minimalist-deer-5fc2dalaakntatt7.jpg')"
    } else {
        document.body.style.backgroundImage = "Url('https://4kwallpapers.com/images/wallpapers/river-water-stream-scenic-landscape-mountains-starry-sky-4480x2520-1831.jpg')"
    };

    mudarObackground = !mudarObackground;

}; */


/* 1- modo White / Dark */
let mudarFundo = false;

/* 2- trocar logo - on/off */
imagemAtual = 1;

/* 3- mudar cor de todo texto */
mudarCorTexto = false;

function modoDark(){
    /* 1- modo White / Dark */
   let imagem = document.getElementById("trocar");

    if (mudarFundo){
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "black";
    };
    mudarFundo = !mudarFundo;
   
    /* 2- trocar logo - on/off */
   if (imagemAtual === 1){
    imagem.src = "img/2-removebg-preview.png"
    imagemAtual = 2
   } else {
    imagem.src = "img/1-removebg-preview.png"
    imagemAtual = 1
   };
   
   /* 3- mudar cor de todo texto */
   if (mudarCorTexto){
    document.body.style.color = "black";
   } else {
    document.body.style.color = "white"
   }
   mudarCorTexto = !mudarCorTexto;
};



function next(){
   let foto = document.getElementById("1");
   let novaFotoSrc = "https://38.media.tumblr.com/705ea963e93e60c58c4027576479bedb/tumblr_nlhf3cMyK61svecmko1_500.gif";

   foto.src = novaFotoSrc;
};

function next2(){
    let foto2 = document.getElementById("1");
    let novaFoto2 = "https://media.tenor.com/NQfq1liFH-8AAAAM/byuntear-sad.gif";

    foto2.src = novaFoto2;

};
function next3(){
    let foto3 = document.getElementById("1");
    let novaFoto3 = "https://media.tenor.com/7r-BGEoIohkAAAAd/meme-cat.gif"

    foto3.src = novaFoto3;  
}

function padrao(){
    let foto4 = document.getElementById("1");
    let novaFoto4 = "img/perfil.jpg";

    foto4.src = novaFoto4;
}




