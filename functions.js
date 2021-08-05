
// Declaration or Function Statement
// function é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2;
}


// A função sempre precisa  de um trigger para rodar
const copo = fazerSuco('banana ', 'maçã');

console.log(copo);

// Function statement in variables

// Function Expression -> Fuction created without name

// Parameters
const sum = function(numero1, numero2) {
    let total = numero1 + numero2
    return total;
} 

// sum(2, 3); Estou passando arguements ao chamar a função


let number1, number2;
number1 = 15;
number2 = 55;

console.log(`A Soma é ${sum(number1, number2)}`);

// Modern way to write a function

// Arrow Function

const sayMyName = (name) => {
    return console.log(name); // Retorno já no console.log
} 


// Passando o Argument em Objeto
sayMyName({
    name: 'Pedro',
    age: 18,
    male: true,
    Ocupation: 'Software Engineer'
});



const sayMyName2 = (name2) => {
    console.log('Antes do CallBack')
    name2(); // Estou chamando de volta uma função (Caling back function)
    console.log('Depois do CallBack')
} 


// CallBack Function
sayMyName2(
    () => {
        return 'Estou em uma callback';
    } 
); 


/* 
    Funções construtoras or
    Function Constructor

    *Expressão new
    *A expressão acima vai !Criar um novo Objeto!
    *referenciando com keyword: this

*/

                /*age,male,ocupation*/
function Person(name, age, male, occupation)  {

    this.name = name,
    this.age = age,
    this.male = male,
    this.occupation = occupation;
    this.walk = () => {
        return this.name + 'Está andando'
    } 

}
  

const pedro = new Person('Pedro', 18, true, 'Dev');
const joao = new Person('João', 23, true, 'Enginneer');
console.log(pedro);
console.log(joao);
console.log(pedro.walk());
console.log(joao.walk());