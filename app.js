let tamanioDeListaDeNumeros = 10;
let listaOrigen = [];
let listaDeNumeros = [];
let listaNumeros2 = [];
let listaNumeros3 = [];
let valorLista = 0;
let numeroParaPosicion = parseInt(Math.random()*100);

function asignarValorLista(tamañoL) {
    let contadorDeListaNumero = 0;
    listaOrigen = [];
    while (contadorDeListaNumero < tamañoL) {
        valorLista = parseInt(Math.random()*100);
        listaOrigen.push(valorLista);
        contadorDeListaNumero++;
    }
    return listaOrigen;
}


//!1.	Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//!2.	Crea una lista "lenguagesDeProgramacion con: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//!3.	Agrega a "lenguagesDeProgramacion: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
//!4.	Crea una función que muestre en consola la lista "lenguagesDeProgramacion.
console.log('problema 4:');
function muestraLista3() {
    let contadorLista = 0;
    while (contadorLista < lenguagesDeProgramacion.length) {
        console.log(lenguagesDeProgramacion[contadorLista]);
        contadorLista++;
    }
    return;
}
muestraLista3();
//!5.	Crea una función que muestre en la consola los elementos en orden inverso.
console.log('problema 5:');
function muestraListaInverso() {
    let contadorLista5 = lenguagesDeProgramacion.length;
    while ( contadorLista5 > 0) {
        console.log(lenguagesDeProgramacion[contadorLista5-1]);
        contadorLista5--;
    }
    return;
}
muestraListaInverso();

//!6.	Crea una función que calcule el promedio de los elementos en una lista de números.
console.log('problema 6:');
listaDeNumeros = asignarValorLista(tamanioDeListaDeNumeros);
console.log(listaDeNumeros);
function promedoDeLista() {
    let sumaElementos = 0;
    let elementoParaPromedio = 0
    while (elementoParaPromedio < listaDeNumeros.length) {
        sumaElementos = sumaElementos + listaDeNumeros[elementoParaPromedio];
        elementoParaPromedio++;
    }
    return console.log(`promedio es : ${sumaElementos/listaDeNumeros.length}`);
}
promedoDeLista();
//!7.	Crea una función que muestre en la consola el más grande y más pequeño de una lista.
console.log('problema 7:');
function muestraGrandePequeDeLaLista() {
    let masGrande = listaDeNumeros[0];
    let masPeque = listaDeNumeros[0];
    let contadorTamanio = 0;
    while (contadorTamanio < listaDeNumeros.length) {
        if (masGrande < listaDeNumeros[contadorTamanio]) {
            masGrande = listaDeNumeros[contadorTamanio];
        } 
        if (masPeque > listaDeNumeros[contadorTamanio]) {
            masPeque = listaDeNumeros[contadorTamanio];
        }        
        contadorTamanio++;
    }
    return console.log(`El Mayor = ${masGrande} y el menor = ${masPeque}`);
}
muestraGrandePequeDeLaLista();
//!8.	Crea una función que devuelva la suma de todos los elementos en una lista.
console.log('problema 8:');
function sumaDeLista() {
    let sumarElementos = 0;
    let elementoParaSuma = 0
    while (elementoParaSuma < listaDeNumeros.length) {
        sumarElementos = sumarElementos + listaDeNumeros[elementoParaSuma];
        elementoParaSuma++;
    }
    return console.log(`La suma es : ${sumarElementos}`);
}
sumaDeLista();

//!9.	Crea una función que devuelva la posición en la lista donde se encuentra 
//!     un elemento pasado como parámetro, o -1 si no existe en la lista.
console.log('problema 9:');
function encontrarPosicion(numeroPosicion) {
    let contadorPosicion = 0;
    let vecesRepetidas = 0;    
    while (contadorPosicion < listaDeNumeros.length) {
        if (numeroPosicion == listaDeNumeros[contadorPosicion]) {
            console.log(`La posicion es: ${contadorPosicion}`);
            contadorPosicion++;
            vecesRepetidas++;
        } else {
            contadorPosicion++;
        }
    }
    
    if (vecesRepetidas == 0){
        console.log(`No hay posicion: -1`);
    }
    return;
}
//console.log(numeroParaPosicion);
encontrarPosicion(numeroParaPosicion);

//!10.	Crea una función que reciba dos listas de números del mismo tamaño y devuelva 
//!     una nueva lista con la suma de los elementos uno a uno.
console.log('problema 10:');
listaNumeros2 = asignarValorLista(tamanioDeListaDeNumeros);
console.log(listaNumeros2);
function sumarDosListas() {
    let listaSuma2Listas = [];
    for (let i = 0; i < tamanioDeListaDeNumeros; i++) {
        listaSuma2Listas.push(listaDeNumeros[i] + listaNumeros2[i]);
    }
    return console.log(`Suma de 2 listas: ${listaSuma2Listas}`);
}
sumarDosListas();

//!11.	Crea una función que reciba una lista de números y devuelva una nueva lista 
//!     con el cuadrado de cada número.
console.log('problema 11:');
listaNumeros3 = asignarValorLista(tamanioDeListaDeNumeros);
console.log(listaNumeros3);
function elementosCuadradoDeLista() {
    let listaelemntosCuadrados = [];
    for (let i = 0; i < tamanioDeListaDeNumeros; i++) {
        listaelemntosCuadrados.push(listaNumeros3[i]*listaNumeros3[i]);
    }
    return console.log(`Elementos cuadrados: ${listaelemntosCuadrados}`);
}
elementosCuadradoDeLista();