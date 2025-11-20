function getFormvalue(event) {
  event.preventDefault(); // prevent page refresh

  // Get values and trim spaces
  let first = document.forms["myForm"]["fname"].value.trim();
  let last = document.forms["myForm"]["lname"].value.trim();

  // Full name
  let fullName = first + " " + last;

  // Show alert
  alert(fullName);
}
