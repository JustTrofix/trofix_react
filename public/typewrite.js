document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Web Developer", "Discord Bot Developer", "Student"];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.getElementsByClassName("typewrite")[0].innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 120);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
          StartTextAnimation(0);

     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  setTimeout(function() {
  StartTextAnimation(0);
   }, 120);
});
