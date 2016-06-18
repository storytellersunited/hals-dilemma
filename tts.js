// paste code here
//
destinations = {};
destinations.horseHeadNebula = [85.2042, -2.4583];

function goTo(name){
  var destination = destinations[name];
  wwt.gotoRaDecZoom(destination[0], destination[1], 60, false);
}
