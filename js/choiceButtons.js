// Story Stats
var calm = 0;
var excited= 0;


function Story1Choice1() {
   calm += 1;
   $("#story1ResultTitle").text("You put the egg by the fire.");
   $("#story1ResultText").text("Now it's warm and calm.");
   NavStory1Result();
}

function Story1Choice2() {
   excited += 1; 
   $("#story1ResultTitle").text("You put the egg by the window.");
   $("#story1ResultText").text("The wind and snow inspire and excite it.");
   NavStory1Result();
}

function NavStory1Result() {
   document.getElementById('btnStory1Choice1').style.display = 'none';
   document.getElementById('btnStory1Choice2').style.display = 'none';
   document.getElementById('story1Result').style.display = 'block';
}

function ContinueToStory2(){
   document.getElementById('btnContinueToStory2').style.display = 'none';
   document.getElementById('story2').style.display = 'block';
   document.getElementById('navStory2').style.display = 'block';
}

function Story2Choice1() {
   calm += 1;
   $("#story2ResultTitle").text("You brought the egg to the libray.");
   $("#story2ResultText").text("The quiet made it a bit calmer.");
   NavStory2Result();
}

function Story2Choice2() {
    excited += 1;
   $("#story2ResultTitle").text("You brought the egg to the show.");
   $("#story2ResultText").text("The air routines got it very excited.");
   NavStory2Result();
}

function NavStory2Result() {
   document.getElementById('btnStory2Choice1').style.display = 'none';
   document.getElementById('btnStory2Choice2').style.display = 'none';
   document.getElementById('story2Result').style.display = 'block';
}

function ContinueToStoryEnd(){
   generateEnding();
   document.getElementById('btnContinueToStoryEnd').style.display = 'none';
   document.getElementById('storyEnd').style.display = 'block';
   document.getElementById('navStoryEnd').style.display = 'block';
}

function generateEnding(){
  var ending = "";
  if(calm >= 2){
    ending += "Your creature is super calm!";
  }else if(calm == 1){
    ending += "Your creature is kinda calm...";
  }else{
    ending += "Your creature is not calm at all.";
  }
  
  if(excited >= 2){
  ending += " Your creature is super excitable!";
  }else if(excited == 1){
    ending += " Your creature is kinda excitable...";
  }else{
    ending += " Your creature is not excitable at all.";
  }
  
  
  $("#endingText").text(ending);
}