//Alert functions
function validateForm() {

  // GET THE VALUES FROM THE FORM
    // We use document.forms to target the form by name, then the input by name
    var name = document.forms["resForm"]["Name"].value;
    var email = document.forms["resForm"]["E-mail"].value;
    var date = document.forms["resForm"]["Date"].value;
    var time = document.forms["resForm"]["Time"].value;
    var size = document.forms["resForm"]["No. of Persons"].value;

  if(name=='') {
    alert("Please enter your name");
    return false;
  } else if(email=='') {
    alert("Please enter a valid email");
    return false;
  } else if(date=='') {
    alert("Please select a date");
    return false;
  } else if(time=='') {
    alert("Please select a time");
    return false;
  } else if(size=='') {
    alert("Please select number of guests");
    return false;
  } else {
    alert("Request has been submitted. You'll shortly receive an E-mail.");
    return true;
  }
}

function msgFunction() {
    var name = document.forms["contactForm"]["Name"].value;
    var email = document.forms["contactForm"]["E-mail"].value;
    var msg = document.forms["contactForm"]["Message"].value;
   

  if(name=='') {
    alert("Please enter your name");
    return false;
  } else if(email=='') {
    alert("Please enter a valid email");
    return false;
  }  else if(msg=='') {
    alert("Please enter a message");
    return false;
  } else {
    alert("Message has been sent successfully!");
    return true;
  }
  
}