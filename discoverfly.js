//1st part calculation area
//get required element
const inputFirstClass = document.getElementById("input-first-class");
const inputEconomyClass = document.getElementById("input-economy-class");
const subTotal = document.getElementById("sub-total");
const vat = document.getElementById("vat");
const total = document.getElementById("total");


//main event action area
inputFirstClass.addEventListener("change", function () {
    displayAmounts();
});

inputEconomyClass.addEventListener("change", function () {
    displayAmounts();
});

//common function after refactoring will be here (for bonus marks)
function displayAmounts() {
    let subTotalAmount = subTotalCalulator(inputFirstClass, inputEconomyClass);
    subTotal.innerText = subTotalAmount;
    let vatAmount = vatCalulator(subTotalAmount);
    vat.innerText = vatAmount;
    let totalAmount = totalCalculator(subTotalAmount, vatAmount);
    total.innerText = totalAmount;
}

//subtotal calculation
function subTotalCalulator(first, second) {
    let firstNumber = parseFloat(first.value);
    let secondNumber = parseFloat(second.value);
    let subTotal = (firstNumber * 150) + (secondNumber * 100);
    return subTotal;
}

//vat calculation 
function vatCalulator(amount) {
    const percent = 10; // vat is 10%
    let vat = (amount * percent) / 100;
    return vat;

}

//total calculation
function totalCalculator(subtotal, vat) {
    let total = subtotal + vat;
    return total;
}

//signed buttons action area
function plusButton(ticketclass) {
    ticketclass.value = parseFloat(ticketclass.value) + 1;
    displayAmounts();
}
function minusButton(ticketclass) {
    ticketclass.value = parseFloat(ticketclass.value) - 1;
    if (ticketclass.value < 0) { ticketclass.value = 0 };
    displayAmounts();
}

//event capturing for signed buttons
const ticketInput = document.getElementById("ticket-input");
ticketInput.addEventListener("click", function (event) {
    add(event.target);
});
//change the input value according to the signed buttons
function add(element) {
    if (element.id == "first-plus") {
        plusButton(inputFirstClass);
    }
    if (element.id == "first-minus") {
        minusButton(inputFirstClass);
    }
    if (element.id == "economy-plus") {
        plusButton(inputEconomyClass);
    }
    if (element.id == "economy-minus") {
        minusButton(inputEconomyClass);
    }
}


//after Book Now display (for bonus marks) 
const bookNowBtn = document.getElementById("book-now-btn");
const formContainer = document.getElementById("main-form-area");
const ticketDetails = document.getElementById("ticket-print-area");
bookNowBtn.addEventListener("click", function () {
    ticketDetails.style.display = "block";
    formContainer.style.display = "none";
});

//return to the tickect selection form 
const changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", function () {
    ticketDetails.style.display = "none";
    formContainer.style.display = "block";
});