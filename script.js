let age = 0;
let health = 100;
let wealth = 0;
let happiness = 100;

function updateStats() {
    document.getElementById("age").innerText = age;
    document.getElementById("health").innerText = health;
    document.getElementById("wealth").innerText = wealth;
    document.getElementById("happiness").innerText = happiness;
}

function work() {
    wealth += 50;
    happiness -= 10;
    age += 1;
    updateStats();
    showMessage("You worked hard and earned money.");
}

function study() {
    happiness -= 5;
    age += 1;
    updateStats();
    showMessage("You spent time studying and gained knowledge.");
}

function relax() {
    health += 10;
    happiness += 20;
    age += 1;
    updateStats();
    showMessage("You relaxed and feel refreshed.");
}

function showMessage(message) {
    document.getElementById("message").innerText = message;
    setTimeout(() => {
        document.getElementById("message").innerText = "";
    }, 2000);
}

updateStats();
