// paste code here
//
destinations = {};
destinations.horseHeadNebula = [286.485, -31.5231666666667];

function goTo(name){
  var destination = destinations[name];
  wwt.gotoRaDecZoom(destination[0], destination[1], 30, false);
}
