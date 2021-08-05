const vasilha = {

    suja: false,
    vazia: false,
    material: "plastico"

}

const home = {

    cep: 30642-280,
    address: 'R Helena de Oliveira',
    number: 186,
    downtownLocation: false
} 

// Discover type of a variable -> typeof  ex: console.log(typeof nome);

function recebeAlgo(item) {

    switch(item) {
        case 'Fruta':
         return "Guardar na geladeira a fruta";
         break;
        default: 
            return 'Guardar o alimento na dispensa';
    }
    
}

const keepFood = recebeAlgo('Fruta'); // Trigger
console.log(keepFood); // Exibir retorno da função

/* 
    Array 
    
// Declaração or Declaration
let compras; 

// Assignment or atribuição de valores
compras = ['Leite','Ovos', 1, 2];

console.log(compras);
console.log(typeof compras);

*/



/* Object 


const person = {

    name: 'Pedro',
    age: 30,
    weight: 88.6,
    isAdmin: true

}

// Loop para percorrer objetos
for(let property in person) {

    console.log(property);
    console.log(person[property])

}


console.log(`O ${person.name} tem ${person.age}, Ele pesa ${person.weight}`);
*/



let name, age; // Declaration

name = 'Pedro'; // Assignment
age = 18;

//Interpolando valores comm template literals Or template strings


console.log(`O ${name} tem ${age} anos.`);


/* Array of Objects -> Array onde a Data Structure é de Objetos  

const animals = [

    {
        name: 'Cat',
        age: 2,
        healthy: true
    },

    {
        name: 'Dog',
        age: 4,
        healthy: true
    },

    {
        name: 'Elephant',
        age: 14,
        healthy: false
    }

]
*/


/* Using the example above

let i;

for(i = 0; i < animals.length; i++) {

    console.log(`O animal ${animals[i].name}, de idade ${animals[i].age}`);

}  

*/


/* Activities Block 1  */

// 1. Declare uma variavel de nome weight
let weight;

// 2. Que tipo de dado é a variavel acima?
console.log(typeof weight);

// 3. Declare uma variavel e atribua valores para cada um dos dados: *Nome: String, *age:Number(Int), *stars: Number(Float or double), *isSubscribed: Boolean

let human = {

    name: 'João',
    age: 17,
    stars: 4.6,
    isSubscribed: false

} 

console.log(`${human.name} de idade ${human.age} tem ${human.stars} estrelas. `)

// 4. A variavel acima é de que tipo?
// console.log(typeof human) -> Object

// 5. Declare uma variavel Array, de nome students e give an assignment de nenhum valor, ou seja um array vaz

let students = [
    human
];



/* 
    EXPRESSÕES E OPERADORES
    
    -Expressions -> Any Codeline that makes something
    -Operators{
        Binary, Ex(numero + 1);
        Unary, Ex(number++ or number--)
        Ternary Ex: (true ? 'alo': 'nada')       
    } 


*/

let numero; // Isso é uma expressão



//Expressão New -> Creates new Object

let myName = new String('Pedro');
myName.surname = 'Martins'

let myAge = new Number(23);


//Operadores Unarios
/* 

Typeof and delete
console.log(typeof 'Euuuuu');

const anyPerson = {
    id: 'pedro',
    salary: 3000, 
} 

delete anyPerson.salary;

*/



// Operador de Comparação

// Diferente ' != ' or '!=='

let pao = true;
let queijo = false;

// NOT
console.log(!pao);


// Operador CONDICIONAL TERNARIO

// condiçaõ ? value1 : value2

const niceBreakfast = pao || queijo ? 'Café Top' : 'Café paia';