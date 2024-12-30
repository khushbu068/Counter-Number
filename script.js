const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const chngBy = document.querySelector('.changeBy');
const rstBtn = document.querySelector('.rst-btn');

function getChangeByValue() {
    const value = parseInt(chngBy.value, 10);
    return isNaN(value) ? 1 : value;
}

minusBtn.addEventListener("click", () => {
    const countValue = parseInt(count.innerText);
    if (countValue == 0) {
        alert("Count is already 0");
        console.log(0)
        return;
    }
    const changeByValue = getChangeByValue();
    count.innerText = countValue - changeByValue;
});

plusBtn.addEventListener("click", () => {
    const countValue = parseInt(count.innerText);
    if (countValue == 10) {
        alert("cant do more 10")
        return
    }
    const changeByValue = getChangeByValue();
    count.innerText = countValue + changeByValue;
});

rstBtn.addEventListener("click", () => {
    let text;
    if (confirm("Press a button!") == true) {
        text = "You pressed OK!";
        count.innerText = 0;
    } else {
        text = "You canceled!";
    }

});