
//fumcao do buttao
function guardaFomulario() {
    //capturar valores e criar variavel para um novo objeto
    var formCliente = new Object();

    formCliente.nome = document.getElementById("nome").value;

    formCliente.sobrenome = document.getElementById("sobrenome").value;

    formCliente.idade = document.getElementById("idade").value;

    formCliente.nasc = document.getElementById("nasc").value;

    formCliente.email = document.getElementById("email").value;

    formCliente.telefone = document.getElementById("telefone").value;

    formCliente.nomePai = document.getElementById("nomePai").value;

    formCliente.nomeMae = document.getElementById("nomeMae").value;








    //converter para String
    var json = JSON.stringify(formCliente);
    console.log(formCliente);


    //retorna o valor primitivo de objeto
    console.log(formCliente.valueOf());

    document.getElementById("Nome").innerHTML = formCliente.nome;
    document.getElementById("Sobrenome").innerHTML = formCliente.sobrenome;
    document.getElementById("Idade").innerHTML = formCliente.idade;
    document.getElementById("Nasc").innerHTML = formCliente.nasc;
    document.getElementById("Email").innerHTML = formCliente.email;
    document.getElementById("Telefone").innerHTML = formCliente.telefone;
    document.getElementById("NomePai").innerHTML = formCliente.nomePai;
    document.getElementById("NomeMae").innerHTML = formCliente.nomeMae;




}