function openNav() {
    document.getElementById("myNav").style.width = "20vw";
  }
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0vw";
}

/* Opens the login if closed, closes the login if open */
function openLogin() {
  if (document.getElementById("loginPage").style.width == "20vw") {
    closeLogin()
    return
  }
  document.getElementById("loginPage").style.width = "20vw";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeLogin() {
  document.getElementById("loginPage").style.width = "0vw";
}

/* Tab transition animation */
function unfade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op < 0.1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 100);
}

/* Product quantity increment functions */
function increment() {
  if (document.getElementById('number-hold').value <= 0) {
    document.getElementById('number-hold').value = 1
    return
  }
  document.getElementById('number-hold').stepUp();
}
function decrement() {
  if (document.getElementById('number-hold').value <= 1) {
      document.getElementById('number-hold').value = 1
      return
  }
  document.getElementById('number-hold').stepDown();
}