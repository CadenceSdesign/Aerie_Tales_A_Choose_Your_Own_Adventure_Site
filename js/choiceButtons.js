// Story Stats
var calm = 0;
var excited= 0;


function Story1Choice1() {
    document.getElementById('btnStory1Choice2').style.visibility = 'hidden';
    calm += 1;
    document.getElementById('story2').style.display = 'block';
    document.getElementById('navStory2').style.display = 'block';
}

function Story1Choice2() {
    document.getElementById('btnStory1Choice1').style.visibility = 'hidden';
    excited += 1;
    document.getElementById('story2').style.display = 'block';
    document.getElementById('navStory2').style.display = 'block';
}

function Story2Choice1() {
    document.getElementById('btnStory2Choice2').style.visibility = 'hidden';
    calm += 1;
    generateEnding();
    document.getElementById('storyEnd').style.display = 'block';
    document.getElementById('navStoryEnd').style.display = 'block';
}

function Story2Choice2() {
    document.getElementById('btnStory2Choice1').style.visibility = 'hidden';
    excited += 1;
    generateEnding();
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
  
  
  document.getElementById("endingText").innerHTML = ending;
}