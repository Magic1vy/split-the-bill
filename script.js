const btn = document.querySelector("#btn");
btn.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip)

function showTip(e){
    e.preventDefault(); 
    tip.style.display = "block";
}

function calculateAmount(e){
    e.preventDefault();

    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

      if( bill === '' || people === '') {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter your information!',
            imageUrl: 'giphy.gif',
            imageWidth: 280,
            imageHeight: 280,
            imageAlt: 'Custom image via GIPHY',
          })
        }
let amountPerPerson = bill/people;
let tipPerPerson = (bill*tip)/people;
let totalSum = amountPerPerson + tipPerPerson;

amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson= tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

document.querySelector("#dividedBill").textContent = amountPerPerson;
document.querySelector("#dividedTip").textContent = tipPerPerson;
document.querySelector("#billAndTip").textContent = totalSum;
}

