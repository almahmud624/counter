/// set initial count value
let count = 0;

/// select value and buttons
const value = document.getElementById("initial-value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease-btn")) {
      count--;
    } else if (styles.contains("increase-btn")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
