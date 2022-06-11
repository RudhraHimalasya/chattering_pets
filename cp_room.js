// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4hH9l3iGdzLFP8WjyTo9CLjthiPR0IMc",
    authDomain: "chattering-pets.firebaseapp.com",
    databaseURL: "https://chattering-pets-default-rtdb.firebaseio.com",
    projectId: "chattering-pets",
    storageBucket: "chattering-pets.appspot.com",
    messagingSenderId: "448893385780",
    appId: "1:448893385780:web:dc702b851dec5689e15e61"
  };
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

  X = localStorage.getItem("username");
document.getElementById("a").innerHTML= "Welcome " + X + " ! ";

function addroom(){
      Y = document.getElementById("roomname").value;
      firebase.database().ref("/").child(Y).update({
            purpose : "It's working"
      });
      localStorage.setItem("room_name",Y);
      window.location="cp_page.html";
    }

//   function getData() {firebase.database().ref("/").on('value',
// function(snapshot) {document.getElementById("output").innerHTML =
// "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
// Room_names = childKey;
//Start code


// console.log("Room Name is : " + Room_names);

// row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

// document.getElementById("output").innerHTML += row;
//End code


// });});}
function getData() {firebase.database().ref("/").on
('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot)
 {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name is : " + Room_names);

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(w) {
    console.log(w);
    localStorage.setItem("room_name",w);
    window.location="cp_page.html";
}
function logout(){
    localStorage.removeItem("username")
    window.location="index.html";
}