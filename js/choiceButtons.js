// Story Stats
var calm = 0;
var excited= 0;

function setColorTheme(){
   if (currColor === "purple"){
      document.documentElement.style.setProperty("--backgroundImgHeader", "url('../img/header-bg-purple.jpg')");
      document.documentElement.style.setProperty("--colorDark", "#8b46a3");
      document.documentElement.style.setProperty("--colorMed", "#a161b7");
      document.documentElement.style.setProperty("--colorLight", "#b27dc4");
      document.documentElement.style.setProperty("--colorVeryLight", "#fbf9fc");
   }else if (currColor === "yellow"){
      document.documentElement.style.setProperty("--backgroundImgHeader", "url('../img/header-bg-yellow.jpg')");
      document.documentElement.style.setProperty("--colorDark", "#ffbf00");
      document.documentElement.style.setProperty("--colorMed", "#ffcf40");
      document.documentElement.style.setProperty("--colorLight", "#ffdc73");
      document.documentElement.style.setProperty("--colorVeryLight", "#fff9e8");
   }else{
      //default is blue
   }
}

function setStory1() {
    setColorTheme();
    $("#egg").load(route + "egg.txt");
    $("#eggSaying").load(route + "eggSaying.txt");
    $("#story1Title").load(route + "story1Title.txt");
    $("#story1Par").load(route + "story1Par.txt");
    $("#story1Button1Title").load(route + "story1Button1Title.txt");
    $("#story1Button1Par").load(route + "story1Button1Par.txt");
    $("#story1Button2Title").load(route + "story1Button2Title.txt");
    $("#story1Button2Par").load(route + "story1Button2Par.txt");

    $.get(route + "story1Button1Icon.txt", function (data) {
        var icon = data;
        $("#story1Button1Icon").addClass(icon);
    });
    $.get(route + "story1Button2Icon.txt", function (data) {
        var icon = data;
        $("#story1Button2Icon").addClass(icon);
    });

    $.get(route + "story2Button1Icon.txt", function (data) {
        var icon = data;
        $("#story2Button1Icon").addClass(icon);
    });
    $.get(route + "story2Button2Icon.txt", function (data) {
        var icon = data;
        $("#story2Button2Icon").addClass(icon);
    });
}   


function Story1Choice1() {
   calm += 1;
   $("#story1ResultTitle").load(route + "story1Choice1Title.txt");
   $("#story1ResultPar").load(route + "story1Choice1Par.txt");
   NavStory1Result();
}

function Story1Choice2() {
   excited += 1; 
   $("#story1ResultTitle").load(route + "story1Choice2Title.txt");
   $("#story1ResultPar").load(route + "story1Choice2Title.txt");
   NavStory1Result();
}

function NavStory1Result() {
   document.getElementById('btnStory1Choice1').style.display = 'none';
   document.getElementById('btnStory1Choice2').style.display = 'none';
   document.getElementById('story1Result').style.display = 'block';
}

function ContinueToStory2(){
   $("#story2Title").load(route + "story2Title.txt");
   $("#story2Par").load(route + "story2Par.txt");
   $("#story2Button1Title").load(route + "story2Button1Title.txt");
   $("#story2Button1Par").load(route + "story2Button1Par.txt");
   $("#story2Button2Title").load(route + "story2Button2Title.txt");
   $("#story2Button2Par").load(route + "story2Button2Par.txt");
   document.getElementById('btnContinueToStory2').style.display = 'none';
   document.getElementById('story2').style.display = 'block';
   document.getElementById('navStory2').style.display = 'block';
}

function Story2Choice1() {
   calm += 1;
   $("#story2ResultTitle").load(route + "story2Choice1Title.txt");
   $("#story2ResultPar").load(route + "story2Choice1Par.txt");
   NavStory2Result();
}

function Story2Choice2() {
   excited += 1;
   $("#story2ResultTitle").load(route + "story2Choice2Title.txt");
   $("#story2ResultPar").load(route + "story2Choice2Par.txt");
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
  }else if(calm === 1){
    ending += "Your creature is kinda calm...";
  }else{
    ending += "Your creature is not calm at all.";
  }
  
  if(excited >= 2){
  ending += " Your creature is super excitable!";
  }else if(excited === 1){
    ending += " Your creature is kinda excitable...";
  }else{
    ending += " Your creature is not excitable at all.";
  }
  
  
  $("#endingText").text(ending);
}