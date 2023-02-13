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
 room_name=localStorage.getItem("room_name");
 function send()
 {
    msg=document.getElementById("msg").value;
    firebase.database().ref("room_name").push({
        name:user_name,
        messege:msg,
        like:0

    });
    document.getElementById("msg").value="";
 }