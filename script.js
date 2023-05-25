let stageNum = 1;
let countdownTimer = 1800;
let startButton;
let completeButton;
let inpX;
let countdownBoolean = 0;

let countdownList = [];
let stagesName = ["REVIEW","GENERATE","REPORT","EMAIL"]
let stagesDuration = [1800,1800,3600,900]

function setup() {
  createCanvas(window.innerWidth - 10, window.innerHeight - 10);

  inpX = createInput();
  inpX.position(160, 32);
  inpX.size(100);

  startButton = createButton("Start");
  startButton.position(280, 32);
  startButton.mousePressed(systemStart);

  completeButton = createButton("Finish Stage");
  completeButton.position(
    width / 2 - completeButton.width / 2 - 175,
    height / 2 + 50
  );
  completeButton.mousePressed(finishStage);

  completeButton = createButton("Next Stage");
  completeButton.position(
    width / 2 - completeButton.width / 2 - 75,
    height / 2 + 50
  );
  completeButton.mousePressed(nextStage);

  saveButton = createButton("Save Data");
  saveButton.position(width - 200, height - 100);
  saveButton.mousePressed(saveImage);
}

function draw() {
  frameRate(1);
  background(220);

  textSize(20);
  textAlign(LEFT);
  fill(0);
  text("Order No.# :", 40, 50);

  countdownFunction(); //my countdown function

  noStroke();
  fill(200);
  rect(width - 250, 0, 250, height);

  for (let index = 0; index < stageNum-1; index = index + 1) {
    fill(0);
    textSize(20);
    text(str(countdownList[index]), width - 150, 100 + index * 30);
    
  }
}

function systemStart() {
  orderNum = inpX.value();
  console.log(orderNum);
  countdownBoolean = 1;
  fill(0);
  text(orderNum, width - 150,100);
}

function countdownFunction() {
  textSize(25);
  textAlign(CENTER);

  text("Stage: " + stageNum, width / 2 - 125, height / 2 - 150);
  textSize(32);
  text(str(stagesName[stageNum-1]), width / 2 - 125, height / 2 - 100); 
  
  
  countdownTimer = countdownTimer - countdownBoolean;

  if (countdownTimer <= 0) {
    fill(255, 0, 0);
  } else if (countdownTimer <= 10) {
    fill(255, 127, 80);
  } else {
    fill(0, 163, 108);
  }

  text(countdownTimer, width / 2 - 125, height / 2);
}

function finishStage() {
  countdownList.push(countdownTimer);
  countdownBoolean = 0;
}

function nextStage() {
  stageNum = stageNum + 1;
  countdownTimer = stagesDuration[stageNum-1];
  countdownBoolean = 1;
}

function saveImage() {
  save(orderNum);
}
