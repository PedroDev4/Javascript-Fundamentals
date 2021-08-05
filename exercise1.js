// Trasnformar notas escolares

/*
    Crie um algoritimo que transforme as notas do sistema número para sistemas de ntoas em caractéres.

    Ex: A, B , C, D;

    *Notas de 90+ = A
    *notas ENTRE 80-90 = B
    *Notas ENTRE 70-79 = C
    *Notas ENTRE 60-69 = D
    *MENOR que 60 = F

*/


// Variable of character result
let character_mark;

// Creating Function
function mark_result(numberMark) {

    if(numberMark > 90) {

        character_mark = 'A';
        

    } else if(numberMark >= 80 && numberMark <= 90) {
        character_mark = 'B';
      ;

    }  else if(numberMark >= 70 && numberMark <= 79) {
        character_mark = 'C';
      

    } else if(numberMark >= 60 && numberMark <= 69) {
        character_mark = 'D';
        
    } else if(numberMark < 60 && numberMark >= 0) {
        character_mark = 'F';
    } else {
        character_mark = 'Nota Invalida.';
    } 

    return character_mark;
} 

console.log(`A Nota do aluno é: ${mark_result(76)}`);