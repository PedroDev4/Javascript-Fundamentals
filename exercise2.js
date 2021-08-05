// Sistema de Gastos familiar

/* 
    Crie um objeto que possuirá 2 atributors, ambas do tipo Array:
        * receitas: [],
        * despesas: [],

        //  //  //  //

    Após isso, crie uma função que irá calcular o total de receitas e despesase irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
*/

const family = {

    receitas: [
        50,
        10,
        150,
        30
    ],
    
    despesas: [
        200
    ]
} 

let revenues_total;
let expenditure_total;
let liquid = 0;

function calculateWallet() {

    for(let i = 0; i < family.receitas.length; i++) {
        revenues_total+= family.receitas[i];
    }
    
    for(let i = 0; i < family.despesas.length; i++) {
        expenditure_total+= family.despesas[i];
    } 

    liquid = revenues_total - expenditure_total;
    let familyStatus = revenues_total > expenditure_total;

    if(familyStatus) {
        return `A família está com saldo positivo: ${liquid}`;
    } else {
        return `A família está com saldo negativo: ${liquid}`;
    } 
    
} 


console.log(calculateWallet());