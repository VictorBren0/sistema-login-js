// Autor: Victor Breno Santos Rodrigues
// GitHub: https://github.com/VictorBren0

var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function exibirMensagem(mensagem) {
  var mensagemElemento = $("#mensagem");
  mensagemElemento.text(mensagem);
  mensagemElemento.show(); // Exibe o elemento de mensagem
}

window.adicionarUsuario = function() {
  var nome = $("#txtNome").val();
  var senha = $("#txtSenha").val();
  exibirMensagem("Usuário já cadastrado.");

  // Verificar se o usuário já está cadastrado
  var usuarioExistente = usuarios.find(function(usuario) {
    return usuario.Nome === nome;
  });

  if (usuarioExistente) {
    exibirMensagem("Usuário já cadastrado.");
    return false;
  }

  if (nome.length < 3) {
    exibirMensagem("O nome deve ter no mínimo 3 caracteres.");
    return false;
  }

  // Verificar se a senha tem no mínimo 8 caracteres
  if (senha.length < 8) {
    exibirMensagem("A senha deve ter no mínimo 8 caracteres.");
    return false;
  }

  // Criar um novo objeto de usuário
  var usuario = {
    Nome: nome,
    Senha: senha
  };
  // Adicionar o novo usuário ao array de usuários
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  exibirMensagem("Usuário registrado com sucesso.");
  return true;
};

window.verificarLogin = function() {
  var nome = $("#txtLoginNome").val();
  var senha = $("#txtLoginSenha").val();
  var usuarioEncontrado = false;
  var mensagemElemento = $("#mensagem");

  // Verificar se o usuário já está cadastrado
  for (var i = 0; i < usuarios.length; i++) {
    var usuario = usuarios[i];
    if (usuario.Nome === nome && usuario.Senha === senha) {
      usuarioEncontrado = true;
      break;
    }
  }

  // Verificar se o usuário foi encontrado
  if (usuarioEncontrado) {
    exibirMensagem("Login bem-sucedido.");
    // Redirecionar para a página principal ou executar outras ações desejadas
  } else {
    exibirMensagem("Nome de usuário ou senha inválidos.");
  }
};

$(function() {
  $("#frmCadastro").on("submit", function(e) {
    e.preventDefault();
    adicionarUsuario();
  });
  $("#mensagem").hide(); // Esconde o elemento de mensagem
  $("#btnLogin").on("click", function() {
    verificarLogin();
  });
});
