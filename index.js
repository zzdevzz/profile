const memes = document.getElementById("containerMeme")

document.getElementById("buttonEl").addEventListener("click", function(){
  memes.classList.toggle("show");
  window.scrollBy({
    top: memes.classList.contains("show") ? 500 : -350,
    left: 0,
    behavior: 'smooth'
  })
})
