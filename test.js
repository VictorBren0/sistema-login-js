QUnit.test("Teste adicionarUsuario - Usuário já cadastrado", function(assert) {
  var usuarios = [{ Nome: "Joao", Senha: "12345678" }];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  $("#txtNome").val("Joao");
  $("#txtSenha").val("12345678");
  var result = adicionarUsuario();
  assert.strictEqual(result, false, "Retorna falso quando o usuário já está cadastrado");
  assert.strictEqual($("#mensagem").text(), "Usuário já cadastrado.", "Exibe a mensagem correta");
});

QUnit.test("Teste adicionarUsuario - Nome com menos de 3 caracteres", function(assert) {
  var usuarios = [];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  $("#txtNome").val("Jo");
  $("#txtSenha").val("12345678");
  var result = adicionarUsuario();
  assert.strictEqual(result, false, "Retorna falso quando o nome tem menos de 3 caracteres");
  assert.strictEqual($("#mensagem").text(), "O nome deve ter no mínimo 3 caracteres.", "Exibe a mensagem correta");
});

QUnit.test("Teste adicionarUsuario - Senha com menos de 8 caracteres", function(assert) {
  var usuarios = [];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  $("#txtNome").val("Joao");
  $("#txtSenha").val("1234567");
  var result = adicionarUsuario();
  assert.strictEqual(result, false, "Retorna falso quando a senha tem menos de 8 caracteres");
  assert.strictEqual($("#mensagem").text(), "A senha deve ter no mínimo 8 caracteres.", "Exibe a mensagem correta");
});

QUnit.test("Teste adicionarUsuario - Usuário registrado com sucesso", function(assert) {
  var usuarios = [];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  $("#txtNome").val("Joao");
  $("#txtSenha").val("12345678");
  var result = adicionarUsuario();
  assert.strictEqual(result, true, "Retorna verdadeiro quando o usuário é registrado com sucesso");
  assert.strictEqual($("#mensagem").text(), "Usuário registrado com sucesso.", "Exibe a mensagem correta");
  assert.strictEqual(localStorage.getItem("usuarios"), JSON.stringify([{ Nome: "Joao", Senha: "12345678" }]), "Usuário é adicionado ao localStorage");
});

QUnit.test("Teste verificarLogin - Login bem-sucedido", function(assert) {
  var usuarios = [{ Nome: "Joao", Senha: "12345678" }];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  $("#txtLoginNome").val("Joao");
  $("#txtLoginSenha").val("12345678");
  verificarLogin();
  assert.strictEqual($("#mensagem").text(), "Login bem-sucedido.", "Exibe a mensagem correta");
});

QUnit.test("Teste verificarLogin - Nome de usuário ou senha inválidos", function(assert) {
  var usuarios = [{ Nome: "Joao", Senha: "12345678" }];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  $("#txtLoginNome").val("Maria");
  $("#txtLoginSenha").val("12345678");
  verificarLogin();
  assert.strictEqual($("#mensagem").text(), "Nome de usuário ou senha inválidos.", "Exibe a mensagem correta");
});


