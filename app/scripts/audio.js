var AudioContext = window.AudioContext|| window.webkitAudioContext|| false;

if (AudioContext) {
    var context = new AudioContext;
} else {
    alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox");
}    var context      = new AudioContext();

window.addEventListener('devicemotion', function(event){
        beta = event.accelerationIncludingGravity.y;
        beta2 = event.acceleration.y;
        oscillator.detune.value = beta*-10;
        biquadFilter.frequency.value = beta*-10;

}, false);


function Keep() {
  var oscillator = context.createOscillator();
  var gainNode = context.createGain();
  gainNode.gain.value = 5;
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.type = 'triangle';
  oscillator.frequency.value = 150;
  oscillator.detune.value = 0;
  oscillator.start(0);
  // oscillator.stop(5);
}


var oscillator = context.createOscillator();
var type      = oscillator.type;
var biquadFilter = context.createBiquadFilter();
    biquadFilter.type = "allpass";
    biquadFilter.gain.value = 25;
var gainNode = context.createGain();
gainNode.gain.value = 5;
function Detune() {
  oscillator = context.createOscillator();
  oscillator.connect(biquadFilter);
  biquadFilter.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.type            = 'triangle';
  oscillator.frequency.value = 150;
  oscillator.start(0);
  // oscillator.stop(5);
}

