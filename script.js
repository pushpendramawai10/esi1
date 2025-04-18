// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB3ydz419KcuNRQxdBSTIHfbjgpSK-oOdU",
  authDomain: "esi-2d7b2.firebaseapp.com",
  projectId: "esi-2d7b2",
  storageBucket: "esi-2d7b2.appspot.com",
  messagingSenderId: "348170091277",
  appId: "1:348170091277:web:d0e1f150fe97c4638e4e44",
  measurementId: "G-32610QEXWY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign up function (correct for v10+)
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Sign Up successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Login function (correct for v10+)
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Auth State Change
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("login-btn")?.style.setProperty("display", "none");
    document.getElementById("logout-btn")?.style.setProperty("display", "inline-block");
  } else {
    document.getElementById("login-btn")?.style.setProperty("display", "inline-block");
    document.getElementById("logout-btn")?.style.setProperty("display", "none");
  }
});

// Logout function
document.getElementById("logout-btn")?.addEventListener("click", () => {
  auth.signOut()
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "login.html";
    });
});
