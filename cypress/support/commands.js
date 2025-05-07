Cypress.Commands.add('gerarEmailYopmail', () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const tamanhoEmail = 10;
    let email = '';
    
    for (let i = 0; i < tamanhoEmail; i++) {
        email += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return email+'@yopmail.com';
});

Cypress.Commands.add('gerarConta', () => {
  const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const tamanhoConta = 10;
  let conta = '';
  
  for (let i = 0; i < tamanhoConta; i++) {
      conta += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  
  return 'Conta '+conta;
});
