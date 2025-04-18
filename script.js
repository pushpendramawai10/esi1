// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB3ydz419KcuNRQxdBSTIHfbjgpSK-oOdU",
  authDomain: "esi-2d7b2.firebaseapp.com",
  projectId: "esi-2d7b2",
  storageBucket: "esi-2d7b2.appspot.com",
  messagingSenderId: "348170091277",
  appId: "1:348170091277:web:d0e1f150fe97c4638e4e44",
  measurementId: "G-32610QEXWY"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign Up Function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Sign up successful!");
      window.location.href = "login.html"; // redirect to login page
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Login Function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to home page
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Check if user is logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    if (loginBtn && logoutBtn) {
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
    }
  } else {
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    if (loginBtn && logoutBtn) {
      loginBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
    }
  }
});

// Logout Function
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      auth.signOut().then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html"; // Redirect to login page
      });
    });
  }
});
