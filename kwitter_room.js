
//atualizar o elemento html com o nome do usario
var firebaseConfig={
  apiKey: "AIzaSyD0Rz9t9MZcWRGCoFhnamecmz4f0mb0JZA",
  authDomain: "kwittir.firebaseapp.com",
  databaseURL: "https://kwittir-default-rtdb.firebaseio.com",
  projectId: "kwittir",
  storageBucket: "kwittir.appspot.com",
  messagingSenderId: "359743039000",
  appId: "1:359743039000:web:b2c6ed50e60a46bdba056d"
}
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";


//função que será chamada quando o botão “Adicionar Sala" for clicado
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


//função que obterá os nomes das salas do banco de dados
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { 
  document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
  { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

// função que será chamada quando clicarmos em qualquer sala
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
