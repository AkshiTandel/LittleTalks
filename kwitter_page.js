//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
n1="<h4>"+name+"<img src='tick.png' class='user_tick'> </h4>";
msg1="<h4 class='message_h4'>"+message+"</h4>";
like1="<button class='btn btn-danger' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span1="<span class='glyphicon glyphicon-heart-empty'>  "+like+"</span> </button> <hr>";
row=n1+msg1+like1+span1;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
