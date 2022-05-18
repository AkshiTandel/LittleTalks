var firebaseConfig = {
      apiKey: "AIzaSyBLvHRG7vWh-HhsGHse5URbMOCFyDautP4",
      authDomain: "kwitter-58daf.firebaseapp.com",
      databaseURL: "https://kwitter-58daf-default-rtdb.firebaseio.com",
      projectId: "kwitter-58daf",
      storageBucket: "kwitter-58daf.appspot.com",
      messagingSenderId: "983021404412",
      appId: "1:983021404412:web:fe82fb020a42d2666a9779"
    };
    
    // Initialize Firebase
    firebase. initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name-" + Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
          purpose:"adding user"
      });
      localStorage.setItem("room_name",roomname);
   }

   function redirecttoroomname(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
   }

   function logout(){
       localStorage.removeItem("username");
       localStorage.removeItem("room_name");
       window.location="index.html";
   }