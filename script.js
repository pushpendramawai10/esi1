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

// Toggle password visibility
function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

// Signup function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Sign Up successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Login function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Auth State
auth.onAuthStateChanged((user) => {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  if (user) {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

// Logout
const logoutEl = document.getElementById("logout-btn");
if (logoutEl) {
  logoutEl.addEventListener("click", () => {
    auth.signOut().then(() => {
      alert("Logged out successfully!");
      window.location.href = "login.html";
    });
  });
}
