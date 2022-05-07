//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBVWq0UDlCaq_YgZGF4RmjNiKCGAG3pePU",
      authDomain: "kwitter-f6b40.firebaseapp.com",
      projectId: "kwitter-f6b40",
      storageBucket: "kwitter-f6b40.appspot.com",
      messagingSenderId: "602454916907",
      appId: "1:602454916907:web:786f6848e7460d8b0dcf6e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
