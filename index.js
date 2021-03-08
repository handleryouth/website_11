const answer = document.querySelectorAll(".answer")
const question = document.querySelectorAll(".question")


  for(var i = 0; i<5; i++){
  question[i].addEventListener("click", function() {
    if (answer[i].classList.contains("hidden")) {
      answer[i].classList.remove("hidden");
      answer[i].classList.add("visible");
      document.querySelectorAll(".arrow-down")[i].style.transform = "rotate(180deg)";
    } else {
      answer[i].classList.remove("visible");
      answer[i].classList.add("hidden");
      document.querySelectorAll(".arrow-down")[i].style.transform = "rotate(0deg)";
    }
  })
}
