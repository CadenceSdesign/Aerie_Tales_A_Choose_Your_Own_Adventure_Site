var strom ="";
var leisure="";

function Story1Choice1() {
    document.getElementById('btnStory1Choice2').style.visibility = 'hidden';
    storm="calm";
    document.getElementById('story2').style.display = 'block';
    document.getElementById('navStory2').style.display = 'block';
    location.href ="#story2";
}

function Story1Choice2() {
    document.getElementById('btnStory1Choice1').style.visibility = 'hidden';
    storm="exited";
    document.getElementById('story2').style.display = 'block';
    document.getElementById('navStory2').style.display = 'block';
    location.href ="#story2";
}

function Story2Choice1() {
    document.getElementById('btnStory2Choice2').style.visibility = 'hidden';
    leisure="calm";
    generateEnding();
    document.getElementById('storyEnd').style.display = 'block';
    document.getElementById('navStoryEnd').style.display = 'block';
    location.href ="#storyEnd";
}

function Story2Choice2() {
    document.getElementById('btnStory2Choice1').style.visibility = 'hidden';
    leisure="exited";
    generateEnding();
    document.getElementById('storyEnd').style.display = 'block';
    document.getElementById('navStoryEnd').style.display = 'block';
    location.href ="#storyEnd";
    
}

function generateEnding(){
  var ending = "";
  if(storm=="calm" && leisure=="calm"){
    ending += "Your creature is super calm!";
  }else if(storm=="calm" || leisure=="calm"){
    ending += "Your creature is kinda calm...";
  }else{
    ending += "Your creature is not calm at all.";
  }
  
  if(storm=="exited" && leisure=="exited"){
  ending += " Your creature is super excitable!";
  }else if(storm=="exited" || leisure=="exited"){
    ending += " Your creature is kinda excitable...";
  }else{
    ending += " Your creature is not excitable at all.";
  }
  
  
  document.getElementById("endingText").innerHTML = ending;
}