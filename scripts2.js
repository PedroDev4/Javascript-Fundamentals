let temperature = 36.5;
let highTemperature = temperature > 37.5;// Retornam bool data
let mediumTemperature = temperature < 37.5 && temperature >= 37;


if(highTemperature) {
    console.log('Febre')

} else if(mediumTemperature) {

    console.log('Febre moderada');
}  else {

    console.log('Saudavel');
} 

// Throw 

function sayMyName(name) { 

    if(name === '') {
        throw 'Nome não foi preenchido'; // Arremessar pra fora
    }

    console.log('Depois do Erro');
}


// Try... Catch
// Tentar executar um bloco de codigo e se der erro nos iremos captar esse erro e trata-lo

try {
    // Trying to execute function above
    sayMyName('');
    
}  catch(e) { // Catch é responsavel por pegar o Throw
    console.log(e);
}

// O parameter do 'catch' named "e" is the RETURN of Throw