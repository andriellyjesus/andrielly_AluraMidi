//pom----------------------
function tocaSompom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas =document.querySelectorAll('.techa');

let contador =0;

//enquanto
while (contador < 9){

    listaDeTeclas[0].onclik = TocaSomPom;

    contador = contador +1;

    console.log(contador);
}