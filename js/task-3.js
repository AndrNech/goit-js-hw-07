const input = document.getElementById('name-input');
const greeting = document.getElementById('name-output');

input.addEventListener("input", (event) => {
    if (input.value.trim()) {
        greeting.textContent = input.value.trim();
    } else {
        greeting.textContent = "Anonymous";
    }
});