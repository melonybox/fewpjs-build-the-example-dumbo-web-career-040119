// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like_btn = document.querySelectorAll(".like-glyph")

like_btn.forEach(function(heart_icon) {
  heart_icon.addEventListener("click", function(event) {

    if (event.target.innerText === EMPTY_HEART) {
      mimicServerCall()
      .then(function() {
        event.target.innerText = FULL_HEART;
        event.target.classList.add("activated-heart");
      })
      .catch(function() {
        let error_message = document.getElementById("modal")
        error_message.classList.remove("hidden");
        function add_hidden() {
          error_message.classList.add("hidden");
        }
        setTimeout(add_hidden,5000);
      })
      // console.log(mimicServerCall());
    } else {
      event.target.innerText = EMPTY_HEART;
      event.target.classList.remove("activated-heart");
    }
    // let temp_heart = event.target.innerText
    // if temp_heart === EMPTY_HEART

    // console.log(temp_heart);
  });
});

// elementsArray.forEach(function(elem) {
//     elem.addEventListener("input", function() {
//         //this function does stuff
//     });
// });



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
