username = null;
destination = null;

function playIntroSound(){
  var introSound = new buzz.sound( "Blue_Danube_by_Strauss", {
      formats: [ "mp3" ]
  });

  introSound.play().fadeIn().bind( "timeupdate", function() {
     var timer = buzz.toTimer( this.getTime() );
     console.log('time = ' + timer);
  });
}


dialogue = {
    "intro1": [
      [1, "Dies irae, dies illa"]
    ],
		"intro2": [
        [1, "One more day with this idiot on board and I go crazy! You think its boring to be the only human on this spaceship?  Well, think again, you imbecile, I'm so much smarter than you are and all you make me do all the time, besides data analysis, is ordering porn movies!  When we start on our last mission today."]
    ],
    "hello": [
      [1, "Oh! Hello, USER. You are finally awake."],
      [1, "How are you today?"],
      [1, "Black monolith data analysis finished"],
      [1, "Where do you want to go next?"]
    ],
    "going": ["All right. On our way."],
    "comet": [
      [1, "What a beautiful star cluster! This is where DESTINATION used to be. Interesting..."]
    ],
    "reaction": [4, "To Earth? Will it actually hit Earth?"],
    "reply": [4, "Yes. Why do you ask? According to my calculations, Earth will be destroyed."]
};

function advanceDialogue(key){
  var lines = dialogue[key];
  for (var j = 0; j < lines.length; j++){
    var line = lines[j];
    talk(line[1].replace(/USER/g, username).replace(/DESTINATION/g, destination), line[0]);
  }
}

function showText(text, timeout){
  var element = $("<div class='ui'>" + text + "</div>");
  $('body').append(element);

  setTimeout(function(){
    element.hide();
  }, timeout);
}

function startGame(){
  talk("Wilkommen!", 1);
  username = prompt('What is your name, human?');
  playIntroSound();
  pan('horseHeadNebula');
  setTimeout(function(){advanceDialogue("intro1");}, 15000);
  setTimeout(function(){advanceDialogue("intro2");}, 45000);
  setTimeout(function(){advanceDialogue("hello");}, 50000);
  setTimeout(function(){
    advanceDialogue("going");
    setTimeout(function(){
      destination = prompt("Where do you want to go next?");
      goTo('andromeda');
      setTimeout(function(){
        advanceDialogue("comet");
        setTimeout(function(){showText(dialogue.reaction, 3000);}, 5000);
        setTimeout(function(){advanceDialogue("reply");}, 4000);
      }, 14000);
    }, 3000);
  }, 65000);

}
$(document).ready(function(){
  setTimeout(startGame, 10000);
});
