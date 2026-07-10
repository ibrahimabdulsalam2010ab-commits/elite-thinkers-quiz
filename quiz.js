let currentQuestion = 0;
let score = 0;

document.getElementById("total").textContent = questions.length;

function loadQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;
    document.getElementById("number").textContent = currentQuestion + 1;

    const options = document.getElementById("options");
    options.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.style.display = "block";
        btn.style.margin = "10px auto";
        btn.style.padding = "10px";
        btn.style.width = "80%";

        btn.onclick = () => {
            if (option === q.answer) {
                score++;
            }

            document.querySelectorAll("#options button").forEach(b => b.disabled = true);
        };

        options.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
}

loadQuestion();
