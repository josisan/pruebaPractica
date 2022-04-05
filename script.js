// //1- Crear una funcion que reciba como parametro la edad de una persona en años y los transforme en dias, horas, y segundos

// function persona(edad){
//     var dia = 365;
//     const hora = 24;
//     const segundo = 60;
        

//     const dias = edad*dia; 
//     const horas = dias*hora;
//     const segundos = horas*segundo;
            
//     console.log('Los años, dias, horas y segundos de karleny son '+ edad +' años '+ 'tiene '+ dias +' dias, '+ horas + ' horas y ' + segundos + ' segundos');
// }
// persona(27);

// //2- Crear una funcino que reciba como parametro una cadena de caracteres y la coloque al reverso.

// function caracteres(texto){
//     let cadena = "";
//     for (let letra of texto){
//         cadena = letra + cadena;
//     }
//     console.log(cadena);
// }
// caracteres('josias sanchez');

//3-Crear una funcion que retorne la cantidad de veces que se encuentra la letra "o" en la siguiente frase: "Hay dos cosas que no son infinitas: el universo y la estupidez humana; de la primera no estoy seguro".



// function letraO(letra){
//     const ltra = letra;
//     const frase = 'Hay dos cosas que no son infinitas: el universo y la estupidez humana; de la primera no estoy seguro';
//     const array = frase.split('');
//     let count = 0;

//     for( let char of array){
//         if(char === ltra){
//             count += 1;
//         }
//     }
//      return console.log(count)
    
// }
// letraO('o');



//4- Leer un caracter y dos numeros enteros. Si el caracter leido es un operador aritmetico calcular la operacion correspondiente, si es cualquier otro mostrar error.

function cadena(a,b){
    const c = ['+','-','/','*','%'];
    const operaciones ={
        suma: a+b,
        resta: a-b,
        dividendo: a/b,
        multiplo: a*b,
        porcent: a%b

    }

    switch(()=>{
        for(let char of c){
            if(char === c){

            }
            return 0
        }
    }){
        case '+':
            suma;
        break
        case '-':
            resta;
        break
        case '/':
            dividendo;
        break
        case '*':
            multiplo;
        break
        case '%':
            porcent;
        break
    }
    console.log(operaciones)
}
cadena(15,5);

//5- Leer un numero entero y visualizar su tabla de multiplicar.

// const multi = (n) => {
//     for(let i = 0; i <= 12; i++){

//         console.log(n + 'x' + i + ' = ' + n*i);
    
//     }
// }

            // multi(10);