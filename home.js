$(document).ready(function () {
  $('#txtPassword').keyup(function () {
    checkvalidation();
  });

  $(".ttt").click(function () {
    //alert('done');
    generateString();

});
  $("#btnGetCaptcha").click(function (e) {
    e.preventDefault();

    var firstname = $('#fname').val();
    var lastname = $('#lname').val();
    var add = $('#add').val();
    var mobile = $('#mobile').val();
    var email = $('#email-input').val();
    var password = $('#txtPassword').val();

    $(".error").remove();

    if (firstname.length < 1) {
      $('#fname').after('<span class="error">Firstname is required</span>');
    }
    if (lastname.length < 1) {
      $('#lname').after('<span class="error">Lastname is required</span>');
    }
    if (add.length < 1) {
      $('#add').after('<span class="error">Address is required</span>');
    }
    if (mobile.length < 1) {
      $('#mobile').after('<span class="error">Mobile.No is required</span>');
    }
    if (email.length < 1) {
      $('#email-input').after('<span class="error">Email is required</span>');
    } if (password.length < 1) {
      $('#txtPassword').after('<span class="error">Password is required</span>');
    }
    check();
  });



  $("#show_hide_password a").on('click', function (event) {
    event.preventDefault();
    if ($('#show_hide_password input').attr("type") == "text") {
      $('#show_hide_password input').attr('type', 'password');
      $('#show_hide_password i').addClass("fa-eye-slash");
      $('#show_hide_password i').removeClass("fa-eye");
    } else if ($('#show_hide_password input').attr("type") == "password") {
      $('#show_hide_password input').attr('type', 'text');
      $('#show_hide_password i').removeClass("fa-eye-slash");
      $('#show_hide_password i').addClass("fa-eye");
    }
  });
  generateString();

  var emailInput;

  $("#email-input").on("change", function () {
    emailInput = $(this).val();

    if (validateEmail(emailInput)) {
      $(this).css({
        color: "green",

        border: "1px solid green"

      });

    } else {

      $(this).css({
        color: "red",
        border: "1px solid red"
      });

      return false;

      // alert("not a valid email address");
    }
    
  });
  function validateEmail(email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return $.trim(email).match(pattern) ? true : false;
  }



});



let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
// console.log(alphabets.length);
// var status = document.getElementById('status');
// status.innerText = "Captcha Generator";

function generateString() {
  // console.log(status)
  let first = alphabets[Math.floor(Math.random() * alphabets.length)];
  let second = Math.floor(Math.random() * 10);
  let third = Math.floor(Math.random() * 10);
  let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
  let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
  //let sixth = Math.floor(Math.random() * 10);
  captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString();
  console.log(captcha + " **");
  $("#divGenerateRandomValues").css({ "background-image": 'url(capta-background.jfif)', 'width': '60px', 'height': '25px' });
  $("#divGenerateRandomValues").html("<input id='txtNewInput' readonly></input>");
  $("#txtNewInput").css({ 'background': 'transparent', 'font-family': 'monospace', 'font-style': 'bold', 'font-size': '16px' });
  $("#txtNewInput").css({ 'width': '60px', 'border': 'none', 'color': 'black' });
  $("#txtNewInput").val(captcha);
  document.getElementById('generated-captcha').value = captcha;
  document.getElementById("textInput").value = '';
  //status.innerText = "Captcha Generator"
}

function check() {
  // console.log(status)
  let userValue = document.getElementById("textInput").value;
  console.log(captcha);
  console.log(userValue);
  if (userValue == captcha) {
    alert("Correct!!");

    //$('input').val('');
    // $('.error').css({'display':'none'});
  } else {
    alert("Try Again!!");
    document.getElementById("entered-captcha").value = '';
  }
}


function checkvalidation() {
  var password = $('#txtPassword').val();
  if (password.length <= 2) {
    $("#error").text(" ");
  }
  else if (password.length == 4) {

    $("#error").text("Password is short.");
    $("#error").css("color", "red");
  } else if (password.length == 6) {

    $("#error").text("Password is Good.");
    $("#error").css("color", "green");
  } else if (password.length >= 7) {

    $("#error").text("Password is Strong.");
    $("#error").css("color", "darkgreen");
  }
  // alert(password);

}





/* This is for ratating cards */
toggleAnimationCheck = document.querySelector("#toggleAnimation");
grid = document.querySelector("#grid");
toggleAnimationCheck.addEventListener("change", function (e) {
  addOrRemoveAnimation(this);
})

function addOrRemoveAnimation(el) {
  if (el.checked) {
    grid.classList.remove("hideAnim");
  } else {
    grid.classList.add("hideAnim");
  }
}

(function () {
  addOrRemoveAnimation(toggleAnimationCheck)
})();