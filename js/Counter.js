let count = 0;

function increaseCount() {
    count++;
    document.getElementById("counter-value").innerHTML = count;
    if (count > 0) {
        document.getElementById("counter-value").style.color = "green";
    }
    if (count == 0) {
        document.getElementById("counter-value").style.color = "black";
    }
}

function decreaseCount() {
    count--;
    document.getElementById("counter-value").innerHTML = count;
    if (count < 0) {
        document.getElementById("counter-value").style.color = "red";
    }
    if (count == 0) {
        document.getElementById("counter-value").style.color = "black";
    }
}