// RPS

/* Initialize Globals */
var turnValues = ["r","p","s","q"];
var winArray = [["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
var playerScore = 0, cpuScore = 0,choice = 0,turns = "",winner = 0,player=0, cpu = 0;

while(player != "q"){
  player = playerTurn();
  if (player == "q") {
    alert("Nice playin' with ya!");
  }  
  else {
    cpu = cpuTurn();
    alert("I chose "+cpu);
    if (player == cpu) {
      alert("I picked "+player+" also. Let's try again.");
    }
    // Did player enter one of the three values (r, p or s)
    else if (turnValues.includes(player)){
      turns = player.toString() + cpu.toString();
      // Find the winner
      winner = winFinder(turns);
      // Update the Score
      updateScore(winner);
    }
    // Player hit return without a value
    else {
      alert("You probably wanted to quit.");
      player = "q";
    }
  }
}

function playerTurn(){
  choice = prompt("RPS! r, p, s or q[uit]");
  return choice;
}

function cpuTurn(){
  var cNum = Math.floor(Math.random()*3);
  let cpu = turnValues[cNum];
  return cpu;
}

function winFinder(turns){
  let x = 0;
  while(winArray[x][0] + winArray[x][1]!=turns){
      x++;
  }
  return winArray[x][2];
}

function updateScore(winner){
  if(winner=="I"){
    cpuScore++;
    alert(winner+" won!");
  }
  else {
    playerScore++;
    alert(winner+" won!");
  }
  alert("Score Now:   Me: "+cpuScore+"   You: "+playerScore);
}