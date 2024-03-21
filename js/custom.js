
  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });
    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();

  
  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })

     

      document.addEventListener('DOMContentLoaded', function() {
        const nameElement = document.getElementById('nameElement'); // Ensure this ID matches your HTML element
        const nameText = nameElement.textContent;
        nameElement.textContent = ''; // Clear the text initially
      
        function typeLetter(index) {
          if (index <= nameText.length) {
            // Display text up to the current index
            nameElement.innerHTML = nameText.substr(0, index);
      
            // Add a cursor-like element after the current letter
            if (index < nameText.length) {
              nameElement.innerHTML += '<span class="current-letter">|</span>';
            }
      
            setTimeout(() => {
              // Move to the next letter by increasing the index
              if (index < nameText.length) {
                nameElement.innerHTML = nameText.substr(0, index + 1);
              }
              typeLetter(index + 1);
            }, 250); // Adjust the timing as needed
          }
        }
      
        typeLetter(0); // Start typing from the first letter
      });
      
