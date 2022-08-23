// Una función que devuelva el número de cifras de un entero solicitado 
//al usuario.

function devolver (){

let numEntero = prompt('Dame un numero entero y te digo cuantas cifras tiene');
arrayLetras = [];
for(let i=0; i<numEntero.length;i++){
    arrayLetras.push(i)}

    return alert('Tu numero '+numEntero+ ' consta de '+arrayLetras.length + 'cifras');

}


//CODIGO DE SERGIO
/* function operacion() {
    var nentero = parseInt(prompt('Introduce una cifra'));
    alert(nentero.toString().length);
  } */
   



/*Una función que muestre al usuario una secuencia de * (se debe
     construir la cadena de uno en uno), la cantidad de * será 
     solicitada al usuario*/



function ASTERISCOS () {
let numAste= parseInt(prompt('cuantos asteriscos quieres?'));

let cadena =[];


for(let i=0;i<numAste;i++){
    
    cadena.push('*');
    alert(cadena);
    
}
alert(cadena)
}



/*Una función que permita mostrar la secuencia 
(se debe construir la cadena de uno en uno):   *+_*+_*+_*+_      */

function asteriscos (){
let repeticiones = parseInt(prompt('¿Cuántas veces quieres que se repita *+_ ?'))


let asterisco = [];


for(let i=0;i<repeticiones;i++){
    asterisco.push('*');
        alert(asterisco);

    asterisco.push('+');
        alert(asterisco);

    asterisco.push('_');
        alert(asterisco);

         
}
}




/*
*
**
***
****
*****
 */


/* 
let array =[];

for(let i=0;i<7;i++){
    console.log(array);
    array.push('*')

   
}
 */
//Una función que devuelva la diferencia en días entre dos fechas del
// mismo año (sólo tenemos en cuenta dia y mes)


//fecha uno

//fecha dos

//do while fecha uno sea menor que fecha dos

/* let dia1= parseInt(prompt('intrudice el dia'));
let mes1= (prompt('intrudice el mes'));
let dia2= parseInt(prompt('intrudice el dia2'));
let mes2= parseInt(prompt('intrudice el mes2'));

let diasRestantes=dia2-dia1;
let mesesRestantes=mes2-mes1;

document.write('quedan ' +  diasRestantes +' dìa(s)' +'y ' + mesesRestantes +' meses.' ) */

//ESTE ES CN FOR


let fechaDia1=parseInt(prompt('dia 1'));//3
let fechaMes1=parseInt(prompt('mes 1'));//1
let meses=[31,28,31,30,31,30,31,31,30,31,30,31];
let contadordias= 0 ;
let contadormeses=0;
let fechaDia2=parseInt(prompt('dia 2'));//5
let fechaMes2=parseInt(prompt('mes 2'));//6



for(let i=fechaMes1-1; i<fechaMes2-1;i++){
    contadormeses=contadormeses+ meses[i];
    
}
contadordias=contadormeses-fechaDia1+fechaDia2;
if(contadordias==1){
    alert('Faltan '+contadordias+' dia')}
    else{
alert('Falta '+contadordias+' dias')

    }

//FECHAS HECHO POR LA PROFE
function ejercicioFechas() {
    let fecha1 = [prompt("dime el primer dia"), prompt("dime el primer mes")]
    let fecha2 = [prompt("dime el segundo dia"), prompt("dime el segundo mes")];
    let sumames = 0;
    const meses30 = [4, 6, 9, 11];
    function intercambiaFecha(f1, f2) {
      return [[f2[0], f2[1]], [f1[0], f1[1]]];
    }
    function ordenaFechas(f1, f2) {
      if (f2[1] == f1[1]) {
        if (f2[0] < f1[0]) {
          let fechas = intercambiaFecha(f1, f2);
          f1[0] = fechas[0][0];
          f1[1] = fechas[0][1];
          f2[0] = fechas[1][0];
          f2[1] = fechas[1][1];
        }
      } else {
        if (f2[1] < f1[1]) {
          let fechas = intercambiaFecha(f1, f2);
          f1[0] = fechas[0][0];
          f1[1] = fechas[0][1];
          f2[0] = fechas[1][0];
          f2[1] = fechas[1][1];
        }
      }
    }
    ordenaFechas(fecha1, fecha2);
    if (fecha1[1] != fecha2[1]) {
      for (let i = fecha1[1] - 1; i < (fecha2[1] - 1); i++) {
        if (i == 2) {
          sumames += 28;
        } else {
          if (i == meses30[0] || i == meses30[1] || i == meses30[2] || i == meses30[3]) {
            sumames += 30;
          } else {
            sumames += 31;
          }
        }
      }
      if (fecha1[1] == 2) {
        sumames += (28 - fecha1[0]);
      } else {
        if (fecha1[1] == meses30[0] || fecha1[1] == meses30[1] || fecha1[1] == meses30[2] || fecha1[1] == meses30[3]) {
          sumames += (30 - fecha1[0]);
        } else {
          sumames += (31 - fecha1[0]);
        }
      }
    }
  
    alert(sumames)
    sumames = 0;
  }
  ejercicioFechas();