function openNav() {
    document.getElementById("myNav").style.width = "20vw";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0vw";
  }

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