// Define the stages and their durations (in seconds)
const stages = [
    { name: 'Stage 1', duration: 10 },
    { name: 'Stage 2', duration: 20 },
    { name: 'Stage 3', duration: 15 }
  ];
  
  let currentStage = 0; // Index of the current stage
  let countdownInterval; // Variable to store the interval ID
  
  const countdownElement = document.getElementById('countdown');
  const startButton = document.getElementById('startBtn');
  const stopButton = document.getElementById('stopBtn');
  
  // Function to start the countdown for the current stage
  function startCountdown() {
    clearInterval(countdownInterval); // Clear any existing interval
  
    const stage = stages[currentStage];
    let remainingTime = stage.duration;
  
    countdownInterval = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        currentStage++;
  
        if (currentStage >= stages.length) {
          countdownElement.textContent = 'Timer Finished';
          startButton.disabled = true;
        } else {
          startCountdown(); // Move to the next stage
        }
      } else {
        countdownElement.textContent = `${stage.name}: ${remainingTime}`;
        remainingTime--;
      }
    }, 1000);
  }
  
  // Function to stop the current countdown
  function stopCountdown() {
    clearInterval(countdownInterval);
    countdownElement.textContent = 'Countdown stopped';
    startButton.disabled = false;
  }
  
  // Event listeners for the buttons
  startButton.addEventListener('click', startCountdown);
  stopButton.addEventListener('click', stopCountdown);
  