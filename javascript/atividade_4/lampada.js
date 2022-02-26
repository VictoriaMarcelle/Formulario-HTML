function acendeApagaLampada(){
    var imagem = document.getElementById("img");
    var botao = document.getElementById("btn"); 

    if (botao.value === 'apagada') {
        botao.value = 'acesa';
        botao.innerHTML = 'Apagar';
        botao.setAttribute('class', 'lampada-acesa');

        imagem.setAttribute('src', 'img/lampada-acesa.png');
    } else {
        botao.value = 'apagada';
        botao.innerHTML = 'Acender';
        botao.setAttribute('class', 'lampada-apagada');

        imagem.setAttribute('src', 'img/lampada-apagada.png');
    }
}