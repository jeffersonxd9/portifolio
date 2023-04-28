const titulo = document.querySelector('#h1prin')
typeWriter(titulo);

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 220 * i)
        setTimeout(function() {
            typeWriter(titulo);
        }, 20000);
    } );
   
}
