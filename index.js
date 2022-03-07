function doneButton(value) {
    var yourName = document.querySelector(".yourName");
    var userName = document.querySelector(".yourEmail");
    var emailid = document.querySelector(".yourNumber");
    var password = document.querySelector(".password");
    var check = document.querySelector(".checkboxs");
  
    var done = document.querySelector(".done");
    var inputField = document.querySelector(".hide");
  
    var rightsideImg = document.querySelector(".rightsideImg");
    var signInBtn = document.querySelector(".signInBtn");
  
    if (!yourName.value) {
      alert("Please Enter Your Name");
      return;
    }
    if (!emailid.value) {
      alert("Please Enter Your Email Id");
      return;
    }
    if (!userName.value) {
      alert("Please Enter Username");
      return;
    }
    if (!password.value) {
      alert("Please Enter Password");
      return;
    }
    if (password.value.length < 6) {
      alert("Please Enter 6+ Digit Password");
      return;
    }
    if (!check.checked) {
      alert("PLease Click Terms And Conditions");
      return;
    }
  
    alert("Your Profile Is Created ");
  
    yourName.value = "";
    userName.value = "";
    emailid.value = "";
    password.value = "";
  
    inputField.style.display = "none";
  
    rightsideImg.style.display = "block";
    signInBtn.style.display = "block";
  
    var value = yourName.value;
    var value = mobileNumber.value;
    var value = email.value;
    yourName.value = "";
    mobileNumber.value = "";
    email.value = "";
  }
  