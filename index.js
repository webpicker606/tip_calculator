let bill_amount_inp = document.querySelector(`input[name='bill-amt']`);
let no_of_people_inp = document.querySelector(`input[name=no-people]`);
let preset_tip_buttons = document.querySelectorAll(`a[class='tip']`);
let custom_tip_inp = document.querySelector(`input[name='custom-tip']`);
let tip_amount_person = document.querySelectorAll(".amt")[0];
let bill_amount_person = document.querySelectorAll(".amt")[1];
let reset_button = document.querySelector(".reset");

let tip_percentage = 0;

function calculate() {
  let bill_amount = parseInt(bill_amount_inp.value);
  let no_people = parseInt(no_of_people_inp.value);
  console.log(bill_amount, no_people, tip_percentage);
}

function set_tip(e) {
  tip_percentage = e.currentTarget.dataset.value;
  e.currentTarget.classList.add("active");
  document.querySelector(".active").classList.remove("active");
}
custom_tip_inp.addEventListener("keyup", () => {
  tip_percentage = parseInt(custom_tip_inp.value);
});
preset_tip_buttons.forEach((button) => {
  button.addEventListener("click", set_tip);
});

window.addEventListener("keydown", calculate);

//hi
