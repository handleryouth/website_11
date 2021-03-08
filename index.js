
document.getElementById("first").addEventListener("click", function(){
  if(document.querySelectorAll(".answer")[0].style.visibility === "hidden"){
    document.querySelectorAll(".answer")[0].style.visibility = "visible"
    document.querySelectorAll(".arrow-down")[0].style.transform = "rotate(180deg)"
  }
  else{
    document.querySelectorAll(".answer")[0].style.visibility = "hidden"
    document.querySelectorAll(".arrow-down")[0].style.transform = "rotate(0deg)"
  }
})

document.getElementById("second").addEventListener("click", function(){
  if(document.querySelectorAll(".answer")[1].style.visibility === "hidden"){
    document.querySelectorAll(".answer")[1].style.visibility = "visible"
    document.querySelectorAll(".arrow-down")[1].style.transform = "rotate(180deg)"
  }
  else{
    document.querySelectorAll(".answer")[1].style.visibility = "hidden"
    document.querySelectorAll(".arrow-down")[1].style.transform = "rotate(0deg)"
  }
})

document.getElementById("third").addEventListener("click", function(){
  if(document.querySelectorAll(".answer")[2].style.visibility === "hidden"){
    document.querySelectorAll(".answer")[2].style.visibility = "visible"
    document.querySelectorAll(".arrow-down")[2].style.transform = "rotate(180deg)"
  }
  else{
    document.querySelectorAll(".answer")[2].style.visibility = "hidden"
    document.querySelectorAll(".arrow-down")[2].style.transform = "rotate(0deg)"
  }
})

document.getElementById("fourth").addEventListener("click", function(){
  if(document.querySelectorAll(".answer")[3].style.visibility === "hidden"){
    document.querySelectorAll(".answer")[3].style.visibility = "visible"
    document.querySelectorAll(".arrow-down")[3].style.transform = "rotate(180deg)"
  }
  else{
    document.querySelectorAll(".answer")[3].style.visibility = "hidden"
    document.querySelectorAll(".arrow-down")[3].style.transform = "rotate(0deg)"
  }
})

document.getElementById("fifth").addEventListener("click", function(){
  if(document.querySelectorAll(".answer")[4].style.visibility === "hidden"){
    document.querySelectorAll(".answer")[4].style.visibility = "visible"
    document.querySelectorAll(".arrow-down")[4].style.transform = "rotate(180deg)"
  }
  else{
    document.querySelectorAll(".answer")[4].style.visibility = "hidden"
    document.querySelectorAll(".arrow-down")[4].style.transform = "rotate(0deg)"
  }
})
