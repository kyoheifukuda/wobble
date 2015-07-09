var AudioContext = window.AudioContext;
var context      = new AudioContext();



window.addEventListener('deviceorientation', function(event){
    document.getElementById('beta').innerHTML = event.beta;
});

var getfrec,
    frec;
window.setInterval(function(){
  getfrec = document.getElementById('beta').innerHTML;
  frec = Math.floor(getfrec);
  Setup();
  console.log(frec);
  return frec;
},100);

function Setup() {
    var t0 = context.currentTime;
        var oscillator = context.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.value = 200;
        oscillator.detune.value = frec*100;
        oscillator.connect(context.destination);
        oscillator.start(t0);
        oscillator.stop(t0 + 0.5);
}