answer = document.querySelectorAll(".answer")
question = document.querySelectorAll(".question")

  question[0].addEventListener("click", function() {
    if (answer[0].classList[1] === "hidden") {
      answer[0].classList.remove("hidden");
      answer[0].classList.add("visible");
      document.querySelectorAll(".arrow-down")[0].style.transform = "rotate(180deg)";
    } else {
      answer[0].classList.remove("visible");
      answer[0].classList.add("hidden");
      document.querySelectorAll(".arrow-down")[0].style.transform = "rotate(0deg)";
    }
  })

  question[1].addEventListener("click", function() {
    if (answer[1].classList[1] === "hidden") {
      answer[1].classList.remove("hidden");
      answer[1].classList.add("visible");
      document.querySelectorAll(".arrow-down")[1].style.transform = "rotate(180deg)";
    } else {
      answer[1].classList.remove("visible");
      answer[1].classList.add("hidden");
      document.querySelectorAll(".arrow-down")[1].style.transform = "rotate(0deg)";
    }
  })

  question[2].addEventListener("click", function() {
    if (answer[2].classList[1] === "hidden") {
      answer[2].classList.remove("hidden");
      answer[2].classList.add("visible");
      document.querySelectorAll(".arrow-down")[2].style.transform = "rotate(180deg)";
    } else {
      answer[2].classList.remove("visible");
      answer[2].classList.add("hidden");
      document.querySelectorAll(".arrow-down")[2].style.transform = "rotate(0deg)";
    }
  })

  question[3].addEventListener("click", function() {
    if (answer[3].classList[1] === "hidden") {
      answer[3].classList.remove("hidden");
      answer[3].classList.add("visible");
      document.querySelectorAll(".arrow-down")[3].style.transform = "rotate(180deg)";
    } else {
      answer[3].classList.remove("visible");
      answer[3].classList.add("hidden");
      document.querySelectorAll(".arrow-down")[3].style.transform = "rotate(0deg)";
    }
  })

  question[4].addEventListener("click", function() {
    if (answer[4].classList[1] === "hidden") {
      answer[4].classList.remove("hidden");
      answer[4].classList.add("visible");
      document.querySelectorAll(".arrow-down")[4].style.transform = "rotate(180deg)";
    } else {
      answer[4].classList.remove("visible");
      answer[4].classList.add("hidden");
      document.querySelectorAll(".arrow-down")[4].style.transform = "rotate(0deg)";
    }
  })
