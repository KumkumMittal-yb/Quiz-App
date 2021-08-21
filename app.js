const answers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const scorecard = document.querySelector(".score-card");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  for (let i = 0; i < 4; i++) {
    if (userAnswers[i] === answers[i]) {
      score += 25;
    }
  }
  scrollTo(0, 0);
  let i = 0;

  const timer = setInterval(() => {
    scorecard.querySelector("span").innerText = `${i}%`;
    if(i===score)
    {
        clearInterval(timer);
    }
    i++;
  }, 20);
  scorecard.classList.remove("d-none");
});
