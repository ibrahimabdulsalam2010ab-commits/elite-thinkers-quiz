const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    const name = document.getElementById("playerName").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("playerName", name);

    window.location.href = "quiz.html";
});
