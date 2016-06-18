function playIntroSound(){
  var introSound = new buzz.sound( "/Blue_Danube_by_Strauss", {
      formats: [ "mp3" ]
  });

  introSound.play().fadeIn().bind( "timeupdate", function() {
     var timer = buzz.toTimer( this.getTime() );
     console.log('time = ' + timer);
  });
}


