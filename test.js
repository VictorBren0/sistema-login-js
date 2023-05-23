// Testes usando QUnit (test.js)
QUnit.test("Teste de adicionar usuário com sucesso", function(assert) {
    // Limpar o localStorage antes de cada teste
    localStorage.removeItem("usuarios");
  
    // Simular a entrada do usuário no formulário
    $("#txtNome").val("usuario_teste");
    $("#txtSenha").val("senha_teste");
  
    // Chamar a função de adicionar usuário
    var resultado = adicionarUsuario();
  
    // Verificar se o usuário foi adicionado corretamente
    assert.ok(resultado, "O usuário deve ser adicionado com sucesso.");
    assert.equal(localStorage.getItem("usuarios"), '[{"Nome":"usuario_teste","Senha":"senha_teste"}]', "O usuário deve ser armazenado corretamente no localStorage.");
  });
  
  QUnit.test("Teste de adicionar usuário já cadastrado", function(assert) {
    // Simular a entrada do usuário no formulário
    $("#txtNome").val("usuario_existente");
    $("#txtSenha").val("senha_teste");
  
    // Adicionar um usuário existente ao localStorage para simular um usuário já cadastrado
    localStorage.setItem("usuarios", '[{"Nome":"usuario_existente","Senha":"senha_teste"}]');
  
    // Chamar a função de adicionar usuário
    var resultado = adicionarUsuario();
  
    // Verificar se o usuário não foi adicionado novamente
    assert.notOk(resultado, "O usuário não deve ser adicionado novamente.");
  });
  
  QUnit.test("Teste de adicionar usuário com nome inválido", function(assert) {
    // Simular a entrada do usuário no formulário
    $("#txtNome").val("us");
    $("#txtSenha").val("senha_teste");
  
    // Chamar a função de adicionar usuário
    var resultado = adicionarUsuario();
  
    // Verificar se o usuário não foi adicionado devido ao nome inválido
    assert.notOk(resultado, "O usuário não deve ser adicionado com nome inválido.");
  });
  
  QUnit.test("Teste de adicionar usuário com senha inválida", function(assert) {
    // Simular a entrada do usuário no formulário
    $("#txtNome").val("usuario_teste");
    $("#txtSenha").val("senha");
  
    // Chamar a função de adicionar usuário
    var resultado = adicionarUsuario();
  
    // Verificar se o usuário não foi adicionado devido à senha inválida
    assert.notOk(resultado, "O usuário não deve ser adicionado com senha inválida.");
  });
  
  QUnit.test("Teste de verificar login bem-sucedido", function(assert) {
    // Simular a entrada do usuário no formulário de login
    $("#txtLoginNome").val("usuario_existente");
    $("#txtLoginSenha").val("senha_teste");
  
    // Adicionar um usuário existente ao localStorage para simular um login bem-sucedido
    localStorage.setItem("usuarios", '[{"Nome":"usuario_existente","Senha":"senha_teste"}]');
  
    // Chamar a função de verificar login
    verificarLogin();
  
    // Verificar se a mensagem de login bem-sucedido é exibida
    var mensagemElemento = $("#mensagem");
    assert.equal(mensagemElemento.text(), "Login bem-sucedido.", "A mensagem de login bem-sucedido deve ser exibida.");
  });
  
  QUnit.test("Teste de verificar login com usuário inexistente", function(assert) {
    // Simular a entrada do usuário no formulário de login
    $("#txtLoginNome").val("usuario_inexistente");
    $("#txtLoginSenha").val("senha_incorreta");
  
    // Adicionar um usuário existente ao localStorage para simular um login inválido
    localStorage.setItem("usuarios", '[{"Nome":"usuario_existente","Senha":"senha_teste"}]');
  
    // Chamar a função de verificar login
    verificarLogin();
  
    // Verificar se a mensagem de usuário inexistente é exibida
    var mensagemElemento = $("#mensagem");
    assert.equal(mensagemElemento.text(), "Nome de usuário ou senha inválidos.", "A mensagem de usuário inexistente deve ser exibida.");
  });
  
  QUnit.test("Teste de verificar login com senha incorreta", function(assert) {
    // Simular a entrada do usuário no formulário de login
    $("#txtLoginNome").val("usuario_existente");
    $("#txtLoginSenha").val("senha_incorreta");
  
    // Adicionar um usuário existente ao localStorage para simular um login inválido
    localStorage.setItem("usuarios", '[{"Nome":"usuario_existente","Senha":"senha_teste"}]');
  
    // Chamar a função de verificar login
    verificarLogin();
  
    // Verificar se a mensagem de senha incorreta é exibida
    var mensagemElemento = $("#mensagem");
    assert.equal(mensagemElemento.text(), "Nome de usuário ou senha inválidos.", "A mensagem de senha incorreta deve ser exibida.");
  });
  
  QUnit.test("Teste de verificar login com usuário e senha inválidos", function(assert) {
    // Simular a entrada do usuário no formulário de login
    $("#txtLoginNome").val("usuario_inexistente");
    $("#txtLoginSenha").val("senha_incorreta");
  
    // Adicionar um usuário existente ao localStorage para simular um login inválido
    localStorage.setItem("usuarios", '[{"Nome":"usuario_existente","Senha":"senha_teste"}]');
  
    // Chamar a função de verificar login
    verificarLogin();
  
    // Verificar se a mensagem de usuário e senha inválidos é exibida
    var mensagemElemento = $("#mensagem");
    assert.equal(mensagemElemento.text(), "Nome de usuário ou senha inválidos.", "A mensagem de usuário e senha inválidos deve ser exibida.");
  });
  