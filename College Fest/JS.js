var h = function(){

  function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds){
    break;
  }
}
}

    $('.k').mouseover(function(){
        $('.j').addClass('show-menu');
        $('#i').css('right','130px');
    });
    $('.k').mouseout(function(){
        $('.j').removeClass('show-menu');
        $('#i').css('right','10px');
    });
    var elem = document.getElementById("banner");
    var k = ['Where dreams come true','Where kadkaadjh','where akjsdaha askhdsa','Where askd akjshd akshkajsd'];
    var i = 0;
    setInterval(change,2000);
    function change(){
      elem.innerHTML = k[i];
      i=i+1;
      if(i >= k.length) { i = 0; }
    }






  }
