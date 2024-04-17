const memes = document.getElementById("containerMeme")
const buttonEl = document.getElementById("buttonEl")

buttonEl.addEventListener("click", function(){
  memes.classList.toggle("show");
  window.scrollBy({
    top: memes.classList.contains("show") ? 500 : -350,
    left: 0,
    behavior: 'smooth'
  })
  buttonEl.textContent = memes.classList.contains("show") ? "😔 Ahh Unlucky... Click to Collapse" : "🍕 Wait... There's More Free Pizza!"
})
