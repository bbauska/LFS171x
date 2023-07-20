/* functions.js - called from index.html within bbauska/lfs171x.bauska.org/main. */

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

/* --~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ script function: scrollFunction() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-- */
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the table of contents.
function topFunction() {
  document.body.scrollTop = 860;
  document.documentElement.scrollTop = 860;
}
</script>

function myfunction()   // write shit for testing.
 {   
document.write("welcome to Learning from Brian.  Pick it up as I go along.  Love the shit out of git.");  
         } 
<a href = "javascript:history.back()">Back to previous page</a>
