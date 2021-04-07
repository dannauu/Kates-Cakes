const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const showSignUpForm = document.getElementById("showSignUpForm");
const signUpBtn = document.getElementById("signUpBtn");

signUp.addEventListener("click", function (e) {
  e.preventDefault();
  signIn.classList.add("hideSignUp");
  showSignUpForm.classList.remove("hideSignUp");
});

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const user = {
    username: usernameInput.value,
    password: passwordInput.value,
    dateJoined: new Date().toISOString(),
  };

  console.log(user);

  fetch("/api/user", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data)
    })
    .catch((err) => {
      // fetch failed, so save in indexed db
      console.log(err);
      // clear form
      usernameInput.value = "";
      passwordInput.value = "";
    });


});
