let valor1 = parseInt(prompt('Digite o valor 1'));
let valor2 = parseInt(prompt('Digite o valor 2'));
let valor3 = parseInt(prompt('Digite o valor 3'));

let mensagem = '';

if ((valor1 > valor2 && valor1 >= valor3) || (valor1 >= valor2 && valor1 > valor3)) {
  
    if (valor1 === valor2) {
        mensagem = 'O valor 1 e 2 são iguais e maiores que o valor 3';
    } else if (valor1 === valor3) {
        mensagem = 'O valor 1 e 3 são iguais e maiores que o valor 2';        
    } else {
        mensagem = 'O valor 1 é o maior';
    }

} else if ((valor2 > valor1 && valor2 >= valor3) || (valor2 >= valor1 && valor2 > valor3)) {
  
    if (valor2 === valor3) {
        mensagem = 'O valor 2 e 3 são iguais e maiores que o valor 1';
    } else if (valor2 === valor1) {
        mensagem = 'O valor 2 e 1 são iguais e maiores que o valor 3';        
    } else {
        mensagem = 'O valor 2 é o maior';
    }
  
} else if ((valor3 > valor2 && valor3 >= valor1) || (valor3 >= valor2 && valor3 > valor1)) {
   
  	if (valor3 === valor1) {
        mensagem = 'O valor 3 e 1 são iguais e maiores que o valor 2';
    } else if (valor3 === valor2) {
        mensagem = 'O valor 3 e 2 são iguais e maiores que o valor 1';        
    } else {
        mensagem = 'O valor 3 é o maior';
    }  

} else {
    mensagem = 'Os três valores são iguais';
}

alert(mensagem);