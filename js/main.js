var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(document).ready(function() {
  $(".login-popup--open").click(function () {
      $(".login-popup").addClass("login-popup--show");      
  });
  $(".login-popup--close").click(function () {
      $(".login-popup").removeClass("login-popup--show");      
  });
  });