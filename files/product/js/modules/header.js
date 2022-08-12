
export function headerFix() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("header").style.background = 'linear-gradient(rgba($header_color, .9), rgba($header_color, .6), rgba($header_color, .0),)';
        

      } else {
        document.querySelector("header").style.backgroundColor = 'rgba(24, 44, 62, .0)';
        
      }
    }
}


