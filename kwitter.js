
function addUser() {

  //obtem  o nome do usuario atravez da caixa de texto e o armazena em uma variavel
  user_name = document.getElementById("user_name").value;

  //Armazenaremos o valor da variável user_name no armazenamento local
  localStorage.setItem("user_name", user_name);
  
  //direciona o usuario para pagina kwitter_room.html
    window.location = "kwitter_room.html";
}

