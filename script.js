const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("playerName");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    localStorage.setItem("playerName", name);
    window.location.href = "quiz.html";
  });
}document.querySelector('button').onclick=()=>alert('Quiz engine coming next!');
