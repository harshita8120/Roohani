//Alert functions
function validateForm(formElement) {

  // GET THE VALUES FROM THE FORM
    // We use document.forms to target the form by name, then the input by name
    const name = formElement["Name"].value;
    const email = formElement["E-mail"].value;
    const date = formElement["Date"].value;
    const time = formElement["Time"].value;
    const size = formElement["No. of Persons"].value;

  if(!name.trim()) {
    alert("Please enter your name");
    return false;
  } else if(!email.trim()) {
    alert("Please enter a valid email");
    return false;
  } else if(!date) {
    alert("Please select a date");
    return false;
  } else if(!time) {
    alert("Please select a time");
    return false;
  } else if(!size) {
    alert("Please select number of guests");
    return false;
  } else {
    alert("Request has been submitted. You'll shortly receive an E-mail.");
    return true;
  }
}

function msgFunction(formElement) {
    const name = formElement["Name"].value;
    const email = formElement["E-mail"].value;
    const msg = formElement["Message"].value;
   

  if(!name.trim()) {
    alert("Please enter your name");
    return false;
  } else if(!email.trim()) {
    alert("Please enter a valid email");
    return false;
  }  else if(!msg.trim() || msg === "Type your message here...") {
    alert("Please enter a message");
    return false;
  } else {
    alert("Message has been sent successfully!");
    return true;
  }
  
}