let stageNum = 1;
let countdownTimer = 1800;
let startButton;
let finishStageButton;
let nextStageButton;
let inpX;
let countdownBoolean = 0;

let joinTime;
let times = [];
let stageTime;

let countdownList = [];
let stagesName = ["REVIEW", "GENERATE", "REPORT", "EMAIL", "COMPLETE"];
let stagesDuration = [30 * 60, 45 * 60, 45 * 60, 10 * 60];

let triggerorderNum = " ";


//____________________________________________________
let bubbles = []; // Array to store bubble objects
let rowHeight = 30; // Height between rows
//____________________________________________________

function setup() {
  createCanvas(window.innerWidth - 10, window.innerHeight - 10);

  inpX = createInput("BT-XXX");
  inpX.position(160, 32);
  inpX.size(100);

  startButton = createButton("Start");
  startButton.position(280, 32);
  startButton.mousePressed(systemStart);

  finishStageButton = createButton("Finish Stage");
  finishStageButton.position(
    width / 3 - finishStageButton.width / 2 - 50,
    height / 2 + 50
  );
  finishStageButton.mousePressed(finishStage);

  nextStageButton = createButton("Next Stage");
  nextStageButton.position(
    width / 3 - nextStageButton.width / 2 + 50,
    height / 2 + 50
  );
  nextStageButton.mousePressed(nextStage);

  saveButton = createButton("Save Image");
  saveButton.position(width - 200, height - 200);
  saveButton.mousePressed(saveImg);
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
  rect(width - width / 3, 0, width / 3, height);

  for (let index = 0; index < stageNum - 1; index = index + 1) {
    fill(0);
    textSize(20);
    textAlign(LEFT);
    text(
      Math.floor((stagesDuration[index] - countdownList[index]) / 60) +
        " : " +
        ((stagesDuration[index] - countdownList[index]) % 60),
      width /6*5, 150 + index * 30
    ); //countdown time

    text(stagesName[index], width /3*2 +50, 150 + index * 30); //stage name
  }
  funcTime(width/3,height/4*3);
  fill(0);
  textSize(25);
  textAlign(LEFT);
  text("#" + triggerorderNum, width /3*2 +50, 50);
  textSize(20);
  text(day()+" / "+ month()+" / "+year(),width /3*2 +50,80);

  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];
    displayTime(bubble); // Call displayTime() for each bubble object
  }
  
}

//____________________________________________
//my other functions
//______________________

function systemStart() {
  orderNum = inpX.value();

  if (orderNum != "BT-XXX") {
    console.log(orderNum);
    countdownBoolean = 1;
    fill(0);
    triggerorderNum = orderNum;
    
    
  } else {
    fill(255, 0, 0);
    textSize(15);
    text("*Invalid Input", 160, 80);
  }
}

function countdownFunction() {
  textSize(25);
  textAlign(CENTER);

  text("Stage: " + stageNum, width / 3, height / 2 - 150);
  textSize(32);
  text(str(stagesName[stageNum - 1]), width / 3, height / 2 - 100);

  countdownTimer = countdownTimer - countdownBoolean;

  if (countdownTimer <= 0) {
    fill(255, 0, 0);
  } else if (countdownTimer <= 10) {
    fill(255, 127, 80);
  } else {
    fill(0, 163, 108);
  }

  text(countdownTimer, width / 3, height / 2);
}

function finishStage() {
  countdownList.push(countdownTimer);
  countdownBoolean = 0;
}

function nextStage() {
  stageNum = stageNum + 1;
  countdownTimer = stagesDuration[stageNum - 1];
  countdownBoolean = 1;

  let yPos = (bubbles.length + 5.1) * rowHeight; // Calculate y position based on the number of instances
  let bubble = { x: width - 120, y: yPos }; // Create a new bubble object with fixed y position
  bubbles.push(bubble); // Add the new bubble object to the bubbles array

  updateTime(bubble); // Update the joinTime for the newly added bubble object
}

function saveImg() {
  save(orderNum);
}

function funcTime(w,h) {
  let time = [hour(), minute(), second()];
  let separator = " : ";
  let joinTime = join(time, separator);
  fill(200);
  textSize(100);
  textAlign(CENTER);
  text(joinTime, w, h);
}

//____________________________________________

function updateTime(bubble) {
  let time = [hour(), minute(), second()];
  let separator = " : ";
  let joinTime = join(time, separator); // Update the joinTime variable

  bubble.joinTime = joinTime; // Assign the joinTime to the bubble object
}

function displayTime(bubble) {
  fill(0);
  textSize(20);
  text(bubble.joinTime, bubble.x, bubble.y); // Display the joinTime for the bubble object
}


//____________________________________________
