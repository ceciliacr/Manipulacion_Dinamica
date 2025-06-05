/* crea variables */
/* Accedemos a los id definidos en el HTML */
/* Hacemos crear una constante para cada elemento que desea interactuar */
    const contenedorDinamico  =document.getElementById('contenedorDinamico');  /* Acceder al contenedor x ID */
    const cambiarContenidoBtn =document.getElementById('cambiarContenidoBtn'); /* Acceder al boton x  ID */
    const crearElementoBtn    =document.getElementById('crearElementoBtn');    /* Acceder al boton x  ID */
    const cambiarEstiloBtn    =document.getElementById('cambiarEstiloBtn');    /* Acceder al boton x ID */
 

cambiarContenidoBtn.addEventListener('click',function () {
    const parrafo = contenedorDinamico.querySelector('p'); /* queryselect accedo a la etiqueta p*/
    if (parrafo){
        parrafo.textContent ='Este parrafo ha sido modificado su contenido';
        console.log('Contenido de Pararafo cambiado');
    }else{
        contenedorDinamico.innerHTML = '<p> Parrafo insertado y creado desde JS </p>' /* Inserte un Html*/
    }    
    cambiarEstiloBtn(parrafo);
});

crearElementoBtn.addEventListener('click',function () {
    const nuevoParrafo = document.createElement('p'); /* crea un parrafo*/
    nuevoParrafo.textContent ='Este es un parrafo creado dinamicamente';
    nuevoParrafo.style.color ='purple';
    nuevoParrafo.style.fontWeight = 'bold';

    contenedorDinamico.appendChild (nuevoParrafo);  /* agrega un hijo al contenedor*/
    console.log('Parrafo anadido dinamicamente');
    
 });

 /* cambiar el estilo  cambiarEstiloBtn */
 cambiarEstiloBtn.addEventListener('click',()=>{
     const parrafo      = contenedorDinamico.querySelector('p');
     parrafo.style.fontFamily ='Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
     parrafo.style.fontSize = '20px'
     parrafo.style.textAlign = "center";    
     parrafo.style.color='Green';
     parrafo.style.fontWeight = 'bold';
 })
