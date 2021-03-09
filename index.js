const answer = document.querySelectorAll(".answer")
const question = document.querySelectorAll(".question")
const arrow = document.querySelectorAll(".arrow-down")


  question[0].addEventListener("click", function() {
    if (answer[0].classList[1] === "hidden") {
      answer[0].classList.remove("hidden");
      answer[0].classList.add("visible");
      arrow[0].classList.remove("normal");
      arrow[0].classList.add("rotating");
    } else {
      answer[0].classList.remove("visible");
      answer[0].classList.add("hidden");
      arrow[0].classList.remove("rotating");
      arrow[0].classList.add("normal")
    }
  })

  question[1].addEventListener("click", function() {
    if (answer[1].classList[1] === "hidden") {
      answer[1].classList.remove("hidden");
      answer[1].classList.add("visible");
      arrow[1].classList.add("rotating");
      arrow[1].classList.remove("normal");
    } else {
      answer[1].classList.remove("visible");
      answer[1].classList.add("hidden");
      arrow[1].classList.remove("rotating");
      arrow[1].classList.add("normal");
    }
  })

  question[2].addEventListener("click", function() {
    if (answer[2].classList[1] === "hidden") {
      answer[2].classList.remove("hidden");
      answer[2].classList.add("visible");
      arrow[2].classList.add("rotating");
      arrow[2].classList.remove("normal");
    } else {
      answer[2].classList.remove("visible");
      answer[2].classList.add("hidden");
      arrow[2].classList.remove("rotating");
      arrow[2].classList.add("normal");
    }
  })

  question[3].addEventListener("click", function() {
    if (answer[3].classList[1] === "hidden") {
      answer[3].classList.remove("hidden");
      answer[3].classList.add("visible");
      arrow[3].classList.add("rotating");
      arrow[3].classList.remove("normal");
    } else {
      answer[3].classList.remove("visible");
      answer[3].classList.add("hidden");
      arrow[3].classList.remove("rotating");
      arrow[3].classList.add("normal");
    }
  })

  question[4].addEventListener("click", function() {
    if (answer[4].classList[1] === "hidden") {
      answer[4].classList.remove("hidden");
      answer[4].classList.add("visible");
      arrow[4].classList.add("rotating");
      arrow[4].classList.remove("normal");
    } else {
      answer[4].classList.remove("visible");
      answer[4].classList.add("hidden");
      arrow[4].classList.remove("rotating");
      arrow[4].classList.add("normal");
    }
  })
