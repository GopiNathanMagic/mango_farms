const registrationForm = document.getElementById("join_us_form");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  validateForm("#join_us_form", registrationForm);

  // If validation passes, submit the form
  // registrationForm.submit();
});

const registrationForm1 = document.getElementById("join_us_form_bottom");

registrationForm1.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  clearError("#join_us_form_bottom error");
  validateForm("#join_us_form_bottom", registrationForm1);

  // If validation passes, submit the form
  //registrationForm.submit();
});
clearError(id);

function validateForm(id, formref) {
  var flag = 1;
  // Perform custom validation logic
  const name = document.querySelector(id + " .name");
  const phone = document.querySelector(id + " .phone");
  const city = document.querySelector(id + " .city");
  const acres = document.querySelector(id + " .acres");

  if (!name.value.trim()) {
    displayError("Name is required.", id + " .nameerror", id);
    return;
  } else {
    displayError("", id + " .nameerror", id);
  }

  if (!phone.value.trim()) {
    displayError("Phone is required.", id + " .phoneerror", id);
    return;
  } else {
    displayError("", id + " .phoneerror", id);
  }

  if (!city.value.trim()) {
    displayError("City is required.", id + " .cityerror", id);
    return;
  } else {
    displayError("", id + " .cityerror", id);
  }

  if (!acres.value.trim()) {
    displayError("Please Select Any Option .", id + " .acreserror", id);
    return;
  } else {
    displayError("", id + " .acreserror", id);
  }

  document.querySelector(id + " .successmessage").innerHTML =
    "Thank you for the enquiry.";

  //formref.submit();
}

function displayError(message, query, id) {
  console.log("query", query);
  console.log("id", id);
  console.log("message", message);

  clearError(id + " error");

  if (message) {
    document.querySelector(query).style.display = "block";
    document.querySelector(query).innerHTML = `${message}`;
  } else {
    document.querySelector(query).style.display = "none";
  }
}

function clearError(id) {
  var all_errors = document.querySelectorAll(id);

  for (var elem of all_errors) {
    elem.innerHTML = ``;
    elem.style.display = "none";
  }
}
