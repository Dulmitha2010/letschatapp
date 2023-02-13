// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzh53QSDamdZQTmPjsHK4chkxic_hCrCw",
    authDomain: "letschatapp-dbed3.firebaseapp.com",
    databaseURL: "https://letschatapp-dbed3-default-rtdb.firebaseio.com",
    projectId: "letschatapp-dbed3",
    storageBucket: "letschatapp-dbed3.appspot.com",
    messagingSenderId: "434507810946",
    appId: "1:434507810946:web:5b82915a12fe5642de0c9b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addroom()
{
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="chat_page.html";
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room_name"+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name)
{
      comsole.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}