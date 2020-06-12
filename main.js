let textholder = document.getElementById("text");
const text = "Type Writer";

function typewriter(text) {
  for (var i = 0; i < text.length; i++) {
    (function (i) {
      setTimeout(function () {
        let char = text.charAt(i);
        textholder.innerHTML += char;
      }, 100 * i);
    })(i);
  }
}

typewriter(text);
