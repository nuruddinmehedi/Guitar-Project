window.document.addEventListener('keydown',playaudio);
function playaudio(e){
  const keydiv = document.querySelector('div[key-valu="'+e.keyCode+'"]');
  const audio = document.querySelector('audio[key-valu="'+e.keyCode+'"]');
  if(!audio) return ;
  audio.currentTime=0;
  audio.play();
  keydiv.classList="play";
}
const alldiv= document.querySelectorAll("div[key-valu]");
alldiv.forEach(key=> key.addEventListener("transitionend",removeplayclass));
function removeplayclass(){
    if(!this) return ;
this.classList="";
}