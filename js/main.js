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

  $(document).ready(function(){
    $("#phoneactivedeactive").click(function(){
      $(".phone-input--group").toggleClass('hide-input');
      $("#phoneactivedeactive").toggleClass('active');
    });
  });
  $(document).ready(function(){
    $("#priceactivedeactive").click(function(){
      $(".price-input--group").toggleClass('hide-input');
      $("#priceactivedeactive").toggleClass('active');
    });
  });


  // Post Active and Inactive Window

  $(document).ready(function(){
    $('.continue-btn').click(function(){
      $('.agreement-section').addClass('d-hide')
      $('.state-area').removeClass('d-hide')
    })
    $('.btn-province').click(function(){
      $('.state-area').addClass('d-hide')
      $('.city-area').removeClass('d-hide')
    })
    $('.city-area--btn').click(function(){
      $('.city-area').addClass('d-hide')
      $('.image-upload').removeClass('d-hide')
    })
    $('.upload-btn').click(function(){
      $('.image-upload').addClass('d-hide')
      $('.state-area').addClass('d-hide')
      $('.post-product').removeClass('d-hide')
    })
  })