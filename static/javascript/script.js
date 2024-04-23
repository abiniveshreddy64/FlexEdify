let navLinks = document.getElementById("navLinks");
document.addEventListener("DOMContentLoaded", function() {
    const pie = document.getElementById("pie");
    const ngval = document.getElementById("ngval");

    function updatePieChart(degrees) {
      pie.style.setProperty("--ng", `${degrees}deg`);
      ngval.textContent = `${Math.floor(degrees/3.6)}%`;
    }
    const chatbotIcon = document.getElementById('chatbotIcon');
    const chatbotContainer = document.getElementById('chatbotContainer');
  
    chatbotIcon.addEventListener('click', function () {
        if (chatbotContainer.style.display === 'block') {
            chatbotContainer.style.display = 'none'; // If visible, hide it
          } else {
            chatbotContainer.style.display = 'block'; // If hidden, show it
          }
    });
    function animatePieChart() {
      let currentDegrees = 0;
      const targetDegrees = 120;
      const animationDuration = 2000; // milliseconds
      const frameDuration = 16; // milliseconds per frame

      const totalFrames = animationDuration / frameDuration;

      const increment = targetDegrees / totalFrames;

      function updateFrame() {
        currentDegrees += increment;
        updatePieChart(currentDegrees);

        if (currentDegrees < targetDegrees) {
          requestAnimationFrame(updateFrame);
        }
      }

      updateFrame();
    }

    animatePieChart();
  });
  document.querySelector('.dropdown-link[href="http://20.0.31.48:5000/auth/download_csv"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.open('http://20.0.31.48:5000/auth/download_csv', '_blank');
});

document.querySelector('.dropdown-link[href="https://drive.google.com/drive/u/0/folders/1119ni9RIRnzYgTHSYpcAzMlHOX9aPvDM"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.open('https://drive.google.com/drive/u/0/folders/1119ni9RIRnzYgTHSYpcAzMlHOX9aPvDM', '_blank');
});

function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px';
}
function goToPage(url) {
    window.location.href = url;
}
function checkAnswer() {
    var inputValue = document.getElementById('answerInput').value;
    
    if (inputValue.trim() === "") {
        alert("Please enter a valid answer before submitting.");
        return;
    }

    var isCorrect = inputValue.trim() === '-3,-7' || inputValue.trim() === '-7,-3';

    var optionsContainer = document.getElementById('optionsContainer1');
    optionsContainer.style.display = isCorrect 
    ? (alert("The answer is correct, you can move to the next question"), setTimeout(function () {
        window.location.href =  "/";
    }, 1000)) 
    : 'block';


    var btndisable = document.getElementById('submit1');
    btndisable.disabled = !isCorrect;
}

/*function submitAnswer() {
    // Perform your answer validation or submission logic here

    // Display success message
    const successContainer = document.createElement('div');
    successContainer.classList.add('success-container');
    successContainer.innerHTML = 'Thanks for your precious time. Your answers have been submitted successfully. Thank you!';
    successContainer.style.display = 'block';
    document.body.appendChild(successContainer);

    // Wait for 5 seconds and then redirect
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
}*/
function submitAnswer() {
    // Your existing code to handle the submission goes here
    const answerInput1 = document.getElementById("answerInput1").value;
    const answerInput2 = document.getElementById("answerInput2").value;
    const answerInput3 = document.getElementById("answerInput3").value;
    const answerInput4 = document.getElementById("answerInput4").value;
    const answerInput5 = document.getElementById("answerInput5").value;
    const answerInput6 = document.getElementById("answerInput6").value;
    const answerInput7 = document.getElementById("answerInput7").value;
  
    // Check if any input is empty
    if (!answerInput1 || !answerInput2 || !answerInput3|| !answerInput4|| !answerInput5|| !answerInput6|| !answerInput7) {
      alert("Please answer all questions."); // You can replace this with your desired validation message
      return;
    }
    // Display the overlay and dialogbox
    /*const overlay = document.getElementById('overlay');
    const dialogbox = document.getElementById('maindialog');
    overlay.style.display = 'block';
    dialogbox.style.display = 'block';*/
  
    // Set a timeout to hide the overlay and dialogbox after 5 seconds
    setTimeout(() => {
      //overlay.style.display = 'none';
      //dialogbox.style.display = 'none';
      // Redirect to index.html
      alert("Your responses have been recorded, thank you!");
      window.location.href = '/';
    }, 1000);
  }
  

var chances = 0;
function selectOption(option) {
    var objanswers = {1:'option1-2',2:'option2-3',3:'option3-1'};
    var indices = option.match(/\d+/g);
    console.log(indices);
    var containerIndex = indices[0];
    var optionIndex = indices[1];
    var subOption = document.getElementById("optlab" + containerIndex + "-" + optionIndex);
    
    for (var i = 1; i <= 3; i++) { //i will have to use dictionary for multiple as loop will go from 2 to 5
        var otherLabel = document.getElementById("optlab" +containerIndex + "-" + i);
        otherLabel.style.display = 'none';
    }
    if (option != objanswers[containerIndex]){
        subOption.innerHTML = "Wrong Answer!<br> multiply coeff of x**2 and constant";
        chances++;
        if (chances==2){
            var mainDialog = document.getElementById("maindialog");
            mainDialog.style.display='flex';
            var overlay = document.getElementById('overlay');
            overlay.style.display = 'block';

        }
    } else{
        subOption.innerHTML = "Well Done!, it's correct, Please, move to next question";
        for (var i = 1; i <= 3; i++) {
            var otherOption = document.getElementById("option" + containerIndex + "-" + i);
            if (otherOption) {
                otherOption.disabled = true;
            }
        }
        var nextContainer = document.getElementById('optionsContainer' + (parseInt(containerIndex) + 1));
        if (nextContainer) {
            nextContainer.style.display = 'block';
            chances = 0;
        } else {
            alert('Well Done!');
            // If there are no more containers, display the inner HTML for 3 seconds and reload the page
            setTimeout(function () {
                window.location.href = '/';
            }, 3000);
        }
    }
    subOption.style.display = 'block';
}
/*function selectOption(option) {
    var correct = 'option2';
    var value = String(option);
    console.log(value[value.length-1]);
    var subOption = document.getElementById("optlab"+value[value.length-1]);
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    for (var i = 1; i <= 3; i++) {
        var otherLabel = document.getElementById("optlab" + i);
        otherLabel.style.display = 'none';
    }
    if (option != correct){
        subOption.innerHTML = "Wrong Answer!<br> multiply coeff of x**2 and constant";
    } else{
        subOption.innerHTML = "Well Done!, it's correct, Please, move to next question";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        var optionsContainer = document.getElementById('optionsContainer2');
        optionsContainer.style.display = 'block';
    }
    subOption.style.display = 'inline-block';
}*/

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

function start() {
    
    
    // Run the function when the script is loaded
    run();
}

const chatbotIcon = document.getElementById('chatbotIcon');
        const chatbotContainer = document.getElementById('chatbotContainer');

        chatbotIcon.addEventListener('click', () => {
            if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
                chatbotContainer.style.display = 'block';
            } else {
                chatbotContainer.style.display = 'none';
            }
        });