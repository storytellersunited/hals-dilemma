// paste code here
//
function talk(speech, voice){
  console.log('Talking: ' + speech);
	var msg = new SpeechSynthesisUtterance(speech);
  var voice = speechSynthesis.getVoices()[voice];
  msg.voice = voice;
  speechSynthesis.speak(msg);
}

destinations = {};
destinations.horseHeadNebula = [85.2458, -2.4583];
destinations.saturn = [HMS(16,42,12.38), DMS(-20, 26, 13.5)];
destinations.andromeda = [HMS(0, 42, 44.3), DMS(41, 16, 9)];

function goTo(name, zoom){
  if (zoom === undefined) zoom = 1;
  var destination = destinations[name];
  wwt.gotoRaDecZoom(destination[0], destination[1], zoom, false);
}

function pan(name){
  var destination = destinations[name];

  var total = 1;
  var steps = 300;
  var ra = destination[0] - total;

  function arrived(){
    for (var i = 0; i < steps; i++){
      (function(i){
        setTimeout(function(){
          wwt.gotoRaDecZoom(ra + ((total/steps)*i), destination[1], 1, false);
        }, 100*i);
      })(i);
    }
    wwt.remove_arrived(arrived);
  }

  wwt.add_arrived(arrived);
  wwt.gotoRaDecZoom(ra, destination[1], 1, false);
}

function HMS(h, m, s) {
     h = h + (m/60) + (s/3600);
     var d = h * 15; // Convert from hours to degrees (360/24 = 15)
     return d;
}

function DMS(d, m, s) {
   if(d < 0) { 
       m = -m; 
       s = -s; 
   }
   d = d + (m/60) + (s/3600);
   return d;
}

