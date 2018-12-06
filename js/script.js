$(function(){
  const heroLogo = document.querySelector('.hero_logo');
  const heroText = document.querySelector('.fancy_text');
  // const menu = $('#menu');
  const slickMenuBtn = document.getElementsByClassName('.slicknav_menu');

  // console.log(slickMenuBtn);

  $(heroLogo).fadeIn(3000);
  $(heroText).fadeIn(5000);

  $('#menu').slicknav({
    label:'',
    duration: 400,
  });
});


// **************************** Menu tabs ****************************

// On the menu page, displays the lunch menu as a default
document.getElementById('Lunch').style.display = "block";

function openMenu(evt, menuName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}