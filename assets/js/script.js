// Pour les barres de progressions
var skills = {
  ht: 90,
  js: 50,
  pp: 50,
  sl: 50,
  jy: 60,
  boots: 90,
  wp:80
};

$.each(skills, function(key, value) {
  var skillbar = $("." + key);

  skillbar.animate(
    {
      width: value + "%"
    },
    8000,
    function() {
      $(".speech-bubble").fadeIn();
    }
  );
});
// FIn des barres de progression
//1er boutons qui clignote
function cligno (){
   $('.blinking_pad').fadeOut(300).fadeIn(300);
}
//je définis ma variable x
var x;
$(document).ready(function(){
//Similaire à setTimeout, elle déclenche répétitivement la même action à intervalles réguliers.
    x = setInterval('cligno()',2200);
//setTimeout définit une action à exécuter et un délai avant son exécution
    setTimeout('myStopFunction()', 10000);
});
function myStopFunction() {
//stop la fonction Interval
  clearInterval(x);
}
// changement de couleur des pad
var change;
$('div').click(function(){
  change = $(this).attr('id');
switch (change) {
  case 'pad1':
    $("#pad1").toggleClass("color1");
  break;
  case 'pad2':
    $("#pad2").toggleClass("color3");
  break;
  case 'pad3':
    $("#pad3").toggleClass("color1");
  break;
  case 'pad4':
    $("#pad4").toggleClass("color2");
  break;
  case 'pad5':
    $("#pad5").toggleClass("color4");
  break;
  case 'pad6':
    $("#pad6").toggleClass("color3");
  break;
  case 'pad7':
    $("#pad7").toggleClass("color4");
  break;
  case 'pad8':
    $("#pad8").toggleClass("color2");
  break;
  case 'pad9':
    $("#pad9").toggleClass("color1");
  break;
  default:
}
  });
