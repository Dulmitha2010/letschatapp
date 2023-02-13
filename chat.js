// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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





function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



