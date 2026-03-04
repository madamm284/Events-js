// Button changes text
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("text").textContent = "This!";
});
  //Reset button
  const undoButton =document.createElement("button");
  undoButton.textContent="Undo";
  const topLeftTask =document.querySelector(".top-left");
  topLeftTask.appendChild(undoButton);
  undoButton.addEventListener("click", ()=>{text.textContent="Change me to";
    
  })


//  Live input -> output
const input = document.querySelector("#nameInput");
const log = document.getElementById("output");

input.addEventListener("input", (e) => {
  log.textContent = e.target.value;
});

// Reset button 
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";


const topRightTask = document.querySelector(".top-right");
topRightTask.appendChild(resetBtn);

resetBtn.addEventListener("click", () => {
  log.textContent = "";
  input.value = "";
});

// 3) Hover box
const box = document.getElementById("box");

box.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "purple";
});

box.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "grey";
});

// 4) Enter key alert
const keyInput = document.getElementById("keyInput");

keyInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    alert("You pressed Enter!");
  }
});