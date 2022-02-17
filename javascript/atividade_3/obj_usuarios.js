function coletaDadosUsuario() {
  let qtd = parseInt(prompt('Digite a quantidade de usuários'));
  let usuarios = [];
  
  for(var i = 0; i < qtd; i++) {
    let nome = prompt(`Digite o nome do ${i + 1}º usuário `);
    let idade = parseInt(prompt(`Digite a idade `));
    let sexo = prompt(`Digite o sexo `);
    let cidade = prompt(`Digite a cidade`);

    usuarios.push(tipoUsuario(nome, idade, sexo, cidade));
  }

	return usuarios;
}

function tipoUsuario(nome, idade, sexo, cidade) {
	return {
    nome: nome,
    idade: idade, 
    sexo: sexo, 
    cidade: cidade
  }
}

function imprimeDadosUsuarios(usuarios) {
  let conteudoHtml = '';
  
  for(var i = 0; i < usuarios.length; i++) {
    conteudoHtml += `
			Nome: ${usuarios[i].nome}<br>
			Idade: ${usuarios[i].idade}<br>
      Sexo: ${usuarios[i].sexo}<br>
      Cidade: ${usuarios[i].cidade}<br><br>
		`;
  }
  
  document.write(conteudoHtml);
}

imprimeDadosUsuarios(coletaDadosUsuario());