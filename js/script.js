let derniere_position_de_scroll_connue = 0;
let ticking = false;

function moveSomaire(position_scroll) {
  sommaire = document.getElementById("sommaire")
  if (position_scroll>100){
    sommaire.style.position = 'fixed'
    sommaire.style.top = 0
    console.log("MOVE")
  }else{
    sommaire.style.position = 'absolute'
    sommaire.style.top = 200
    console.log("STAY")
  }
}

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      moveSomaire(derniere_position_de_scroll_connue);
      ticking = false;
    });
  }else{
    console.log("FALSE SCROLL")
  }

  ticking = true;
});