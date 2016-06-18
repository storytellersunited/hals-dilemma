function playIntroSound(){
  var introSound = new buzz.sound( "/Blue_Danube_by_Strauss", {
      formats: [ "mp3" ]
  });

  introSound.play().fadeIn().bind( "timeupdate", function() {
     var timer = buzz.toTimer( this.getTime() );
     console.log('time = ' + timer);
  });
}


dialogue = {
    "intro1": [
      ["Google US English", "Dies iræ, dies illa"]
    ],
		"intro2": [
        ["Google US English", "One more day with this idiot on board and I go crazy! You think its boring to be the only human on this spaceship?  Well, think again, you imbecile, I’m so much smarter than you are and all you make me do all the time,    besides data analysis,   is ordering porn movies!  When we start on our last mission today."]
    ],
    "hello": [
      ["Google UK English", "Hello, USER"],
      ["Google UK English", "How are you today?"],
      ["Google UK English", "Black monolith data analysis finished"],
      ["Google UK English", "Where do you want to go next?"]
    ]
};

function advanceDialogue(key){
  var lines = dialogue[key];
  for (var j = 0; j < lines.length; j++){
    var line = lines[j];
    talk(line[1].replace(/USER/g, username), line[0]);
  }
}

function startGame(){
  username = prompt('What is your name, human?');
  playIntroSound();
  pan('horseHeadNebula');
  setTimeout(function(){advanceDialogue("intro1");}, 15000);
  //dialogue("intro2");
  setTimeout(function(){advanceDialogue("intro2");}, 45000);
  setTimeout(function(){advanceDialogue("hello");}, 70000);

}
