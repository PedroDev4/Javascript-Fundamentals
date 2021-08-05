/*
    Prototype  

    * prototype based-language
    * prototype chain -> Cadeia de prototipos
    * __proto__


*/

/*

    Type conversion (typecasting) vs type Coersion

    *Ambas servem para Alteração de um tipo de dado para o outro
*/

// Type Conversion: quando NOS mesmos EXPLICITAMENTE fazemos a conversão de um datatype para outro

console.log(Number('9') + 5); 

// Type Coersion é quando o Javascript converte um tipo de dado insplicitamente para outro

console.log('1' + 50);

// Javascript insplicitamente changed the NumberData for a StringData, fazendo a concatenção


/* 
    Manipulando String e números

    String em Numero 
    let string = '123';
    console.log(Number(string));

    Número em String
    let number = 500
    String(number);
    console.log(number);

    // Contar quantos caracteres tem uma String e quantos caracteres tem um Number

    let word = 'Paralelepipedo';
    console.log(word.lenght);

    const number = 1560;
    console.log(String(number).lenght);



    // Transformar um número decimal grande para apenas 2 casas decimais e trocar ponto por virgula

    let number = 150.38283283;
    console.log(number.toFixed(2).replace(".", ","));

*/


/* 

    // Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

    let word = "Programar é muito bacana!"

    // All Maiusculo
    console.log(word.toUpperCase());

    // All Minusculo
    console.log(word.toLowerCase());


    
    //Verificar se o texto tem a palavra 'Amor'

    let phrase = "Eu Quero viver!";

    console.log(phrase.includes('Amor'));

*/

/* 
    Separe um texto que contem espaços, em um novo Array onde cada texto é uma posição no array. Depois disso, transforme o array em um texto e onde eram espaços, coloque " _ "

    let phrase = "Eu Quero viver o Amor";
    let myArray = phrase.split(" ");

    let phraseWithUndercore = myArray.join("_");
    console.log(phraseWithUnderscore);

*/


/* 
    Creating an Array with a Constructor 
    
    myArray = new Array('a', 'b', 'c');
    // Or
    my Array = new Array(10);

*/

/* 

    Contando elementos de um Array

    myArray.lenght


    // Transformar uma cadeia de carateres em elements of an array

    let word = 'Manipulando';
    console.log(Array.from(word));
 */


 
// MANIPULANDO ARRAY

let techs = ['HTML','CSS','JS'];

// adicionar um elemento no fim do array
techs.push('Node.js');

// adicionar elemento no começo
techs.unshift('SQL');

//remover elemento do fim
techs.pop();

//remover elemento do começo
techs.shift();

//pegar somente alguns elementos do array
console.log(techs.slice(1,3));

//remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1);

//encontrar a posição de um elemento no array

let index = techs.indexOf('CSS');