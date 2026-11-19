const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

password.addEventListener("input", function () {
    const value = password.value;

    const rules = [
        value.length >= 8,
        /[A-Z]/.test(value),
        /[a-z]/.test(value),
        /[0-9]/.test(value),
        /[^A-Za-z0-9]/.test(value)
    ];

    let count = 0;

    for (let i = 0; i < 5; i++) {
        const rule = document.getElementById("rule" + (i + 1));

        if (rules[i]) {
            rule.className = "rule valid";
            count++;
        } else {
            rule.className = "rule invalid";
        }
    }

    const bar = document.getElementById("strengthBar");
    const text = document.getElementById("strengthText");

    bar.style.width = (count * 20) + "%";

    if (value.length === 0) {
        text.innerHTML = "";
        bar.style.width = "0%";
        bar.style.backgroundColor = "#ddd";
    } else if (count <= 2) {
        text.innerHTML = "Weak";
        bar.style.backgroundColor = "red";
    } else if (count <= 4) {
        text.innerHTML = "Medium";
        bar.style.backgroundColor = "orange";
    } else {
        text.innerHTML = "Strong";
        bar.style.backgroundColor = "green";
    }
});

showPassword.addEventListener("change", function () {
    if (this.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});