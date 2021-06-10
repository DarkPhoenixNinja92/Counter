let count = 0;

let increaseCount = () => {
    count++;
    document.getElementById("counter-value").innerHTML = count;
    if (count > 0) {
        document.getElementById("counter-value").style.color = "green";
    }
    if (count == 0) {
        document.getElementById("counter-value").style.color = "black";
    }
}

let decreaseCount = () => {
    count--;
    document.getElementById("counter-value").innerHTML = count;
    if (count < 0) {
        document.getElementById("counter-value").style.color = "red";
    }
    if (count == 0) {
        document.getElementById("counter-value").style.color = "black";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("add-button").addEventListener('click', increaseCount);
    document.getElementById("lower-button").addEventListener('click', decreaseCount);
})