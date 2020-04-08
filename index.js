// NavBar Code

const hamburger = document.getElementById("nav-collapser");
const navUl = document.getElementById("nav-ul");
const request = new hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

$(document).ready(function () {
  //SIGNUP API CALL
  $("#signup_form").on("submit", function (event) {
    event.preventDefault();
    $("#signup-btn").html("Loading...")
    var name = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var c_password = $("#c_password").val();
    // var number = $("#number").val();

    if (c_password != password) {
      alert("Passwords do not match");
      return false;
    }

    $.ajax({
      type: "POST",
      url: "https://ijatsms153.ijatwebtechnologies.com/api/register",
      data: {
        name: name,
        email: email,
        password: password,
        c_password: c_password
      },
    }).done(function (data) {
      $("#signup-btn").html("Create Account")
      console.log(data);
    });
  });

  //SIGNIN API CALL
  $("#login_form").on("submit", function (event) {
    event.preventDefault();
    $(".signin-btn").html("Authenticating...")
    var username = $("#signin_username").val();
    var password = $("#signin_password").val();
    var grant_type = "password";
    var client_id = "3";
    var client_secret = "wrARQnCsnuEJavNLHhHD2HTSmvyWMZ7bxJf0jIZ4";

    $.ajax({
      type: "POST",
      url: "https://ijatsms153.ijatwebtechnologies.com/oauth/token",
      data: {
        username: username,
        password: password,
        grant_type: grant_type,
        client_id: client_id,
        client_secret: client_secret
      },
    }).done(function (data) {
      localStorage.setItem("", )
      console.log(data);
      $("#signup-btn").html("Sign In");
    });
  })

});
