let name = document.getElementById("fullname");
let email = document.getElementById("email");
let password = document.getElementById("sign_password");
let confirm_pwd = document.getElementById("con_password");
let formk = document.querySelector(".sign-up-form");
let forml = document.querySelector(".log-in");

let information = [];

// //load to local
// function inLock(seek) {
//   const information = JSON.parse(localStorage.getItem("information")) || [];
// }
formk.addEventListener("submit", (e) => {
  e.preventDefault();

  if (confirm_pwd.value !== password.value) {
    alert("Password do not much.Please try again...");
    return;
  }

  information.push({
    Name: name.value,
    Email: email.value,
    Pwd: password.value,
  });

  localStorage.setItem("information", JSON.stringify(information));

  // inLock();
  alert("Thank you");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
// Login Form Submission
forml.addEventListener("submit", (k) => {
  k.preventDefault();

  let username = document.getElementById("username").value;
  let passnow = document.getElementById("pwdl").value;

  let storedInfo = JSON.parse(localStorage.getItem("information")) || [];

  let user = storedInfo.find(
    (user) => user.Name === username && user.Pwd === passnow
  );

  if (!user) {
    alert("Invalid login credentials. Please try again.");
    return;
  }

  // Redirect to another page on successful login
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
