let form = document.querySelector("form");
let name = document.querySelector("#stdname");
let course = document.querySelector("#stdcourse");
let branch = document.querySelector("#stdbranch");
let enroll = document.querySelector("#stdenroll");
let photo = document.querySelector("#stdphoto");
let session = document.querySelector("#stdsession");
let valid = document.querySelector("#valid");

let card = document.querySelector("#Card");
let stdname = document.querySelector("#name");
let stdcourse = document.querySelector("#course");
let stdbranch = document.querySelector("#branch");
let stdenroll = document.querySelector("#enroll");
let stdsession = document.querySelector("#session")
let photoPreview = document.querySelector("#photoPreview");

// ✅ Use the form's submit event instead of button click
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop default submission

  // ✅ Validate required fields manually
  if (
    name.value.trim() === "" ||
    course.value.trim() === "" ||
    branch.value.trim() === "" ||
    enroll.value.trim() === "" ||
    session.value.trim() === ""||
    photo.files.length === 0
  ) {
    alert("Please fill all the fields before submitting.");
    return;
  }

  // Set card text values
  stdname.innerText = `Name: ${name.value}`;
  stdcourse.innerText = `Course: ${course.value}`;
  stdbranch.innerText = `Branch: ${branch.value}`;
  stdenroll.innerText = `Enroll.No: ${enroll.value}`;
  stdsession.innerText = `Issue Date: 05-Feb-${session.value}`
  valid.innerText = `Valid Upto: 30-Jun-${eval(parseInt(session.value)+3)}`

  // Handle image upload
  const file = photo.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    photoPreview.src = e.target.result;
  };
  reader.readAsDataURL(file);

  // Show card, hide form
  form.classList.add("hidden");
  card.classList.remove("hidden");
});
