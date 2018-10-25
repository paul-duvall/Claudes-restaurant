$(function(){

  const heroLogo = document.querySelector('.hero_logo');
  const heroText = document.querySelector('.fancy_text');
  const menu = $('#menu');
  const slickMenuBtn = document.getElementsByClassName('.slicknav_menu');

  console.log(slickMenuBtn);

  $(heroLogo).fadeIn(3000);
  $(heroText).fadeIn(5000);

  $('#menu').slicknav({
    label:'',
    duration: 400,
  });

  // $('.slicknav_menu').click(function(event){
  //   event.preventDefault();
  //   $('.section--top').css("background-color", "red");
  //   if($('.slicknav_btn').hasClass('.slicknav_open')) {
  //     $('.section--top').css("background-color", "red");
  //   } else {

  //   }
  // });

});