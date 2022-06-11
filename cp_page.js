const firebaseConfig = {
    apiKey: "AIzaSyD4hH9l3iGdzLFP8WjyTo9CLjthiPR0IMc",
    authDomain: "chattering-pets.firebaseapp.com",
    databaseURL: "https://chattering-pets-default-rtdb.firebaseio.com",
    projectId: "chattering-pets",
    storageBucket: "chattering-pets.appspot.com",
    messagingSenderId: "448893385780",
    appId: "1:448893385780:web:dc702b851dec5689e15e61"
  };
  u = localStorage.getItem("username");
r = localStorage.getItem("room_name");

  firebase.initializeApp(firebaseConfig);function logout(){
    localStorage.removeItem("username")
    window.location="index.html";
}

function send(){
    msg = document.getElementById("send_input").value;
    firebase.database().ref(r).push({
          username : u,
          message : msg,
          like : 0
    });
    console.log(msg);
}


function woof(){
    msg1 = "woof 🐶";
    firebase.database().ref(r).push({
          username : u,
          message : msg1,
          like : 0
    });
    console.log(msg1);
}

function meow(){
    msg2 = "meow 🐱";
    firebase.database().ref(r).push({
          username : u,
          message : msg2,
          like : 0
    });
    console.log(msg2);
}

function chirp(){
    msg3 = "chirp 🦜 ";
    firebase.database().ref(r).push({
          username : u,
          message : msg3,
          like : 0
    });
    console.log(msg3);
}

function pop(){
    msg4 = "pop 🐟 ";
    firebase.database().ref(r).push({
          username : u,
          message : msg4,
          like : 0
    });
    console.log(msg4);
}



function getData() { firebase.database().ref("/"+r).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
console.log(message_data);
n = message_data['username'];
m = message_data['message'];
l = message_data['like'];

nn = "<h4> "+ n +"<img class='user_tick' src='tick.png'>";
mm = "<h4 class='message_h4'>" + m + "</h4>";
ll = "<button class='btn btn-info' id="+firebase_message_id+" value="+l+" onclick='updateLike(this.id)'>";

s = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ l +"</span></button><hr>";
row = nn + mm +ll + s;

document.getElementById("output").innerHTML += row;
//End code

      } });  }); }
getData();


function updateLike(i){
    console.log(i);
    button_id = i;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes)+1;
    console.log(update_likes);
    firebase.database().ref(r).child(i).update({
          like : update_likes
    });
}


