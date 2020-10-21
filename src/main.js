/* Set the width of the side navigation to 250px */
function openNav() {
  let m = document.getElementById("mySidenav")
  if(m.style.width==="300px"){
    m.style.width = "0";
  }else{
    m.style.width = "300px";
  }
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
  scrollBar()
};

function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}