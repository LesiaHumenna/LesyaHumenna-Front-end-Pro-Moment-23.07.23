const btnSuccess = document.querySelector(".btn-success");
const btnPrimary = document.querySelector(".btn-primary");
const btnSecondary = document.querySelector(".btn-secondary");
const btnInfo = document.querySelector(".btn-outline-info");
const btnAlertInfo = document.querySelector(".alert-info");
const form = document.querySelector("#form");
const btnSubmit = document.querySelector(".btn-submit");
const date = document.getElementById("date");

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

btnSuccess.addEventListener("click", (e) => {
  btnPrimary.style.display = "block";
});
btnSecondary.addEventListener("click", (e) => {
  btnPrimary.style.display = "none";
});

let isAlertVisible = false;
btnInfo.addEventListener("click", (e) => {
  if (isAlertVisible) {
    hideAlert();
  } else {
    showAlert();
  }
});
function showAlert() {
  btnAlertInfo.style.display = "block";
  isAlertVisible = true;
}
function hideAlert() {
  btnAlertInfo.style.display = "none";
  isAlertVisible = false;
}

const birthday = "1985-04-01";
const formattedDate = moment(birthday).format("YYYY-MM-DD");
console.log(formattedDate);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = date.value;
  const momentData = moment(data);
  console.log(data);
  console.log(momentData.format("MMMM Do YYYY, h:mm:ss a"));
});

//regex
// btnSubmit.addEventListener("click", function (e) {
//   e.preventDefault();
// 
//   const regex = /^\d{4}-\d{2}-\d{2}$/;
//   if (!regex.test(date.value)) {
    // date.classList.add("is-invalid");
//   } else {
    // date.classList.remove("is-invalid");
//   }
// });
