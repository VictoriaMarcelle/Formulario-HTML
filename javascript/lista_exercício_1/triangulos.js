let lado1 = parseInt(prompt('Digite o valor do lado 1 do triângulo'));
let lado2 = parseInt(prompt('Digite o valor do lado 2 do triângulo'));
let lado3 = parseInt(prompt('Digite o valor do lado 3 do triângulo'));

tipoTriangulo(lado1, lado2, lado3);

function tipoTriangulo(lado1, lado2, lado3) {
    let mensagem = '';  

    if (lado1 === lado2 && lado2 === lado3) {
        mensagem = 'Este é um triângulo equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        mensagem = 'Este é um triângulo isósceles';
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        mensagem = 'Este é um triângulo escaleno';
    }

    alert(mensagem);
}

