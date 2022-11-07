// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll(".like-glyph");

likeButtons.forEach(likeGlyph => {
  likeGlyph.addEventListener("click", handleClickEvent);
});

function handleClickEvent(e) {
  mimicServerCall()
    .then( () => {
      console.log("SUCCESS");
      const heart = e.target;
      if (heart.classList.contains("activated-heart")) {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
      else {
        heart.textContent = FULL_HEART;
        heart.classList.add("activated-heart");
      }
    })
    .catch( (e) => {
      console.log("FAILURE");
      const errorMessage = document.querySelector("#modal");
      const errorText = document.querySelector("#modal-message");
      errorText.textContent = e;
      errorMessage.classList.remove("hidden");
      setTimeout( () => {
        errorMessage.classList.add("hidden");
      }, 3000);
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
