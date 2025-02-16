let num1, num2, correctAns, score = 0;  

function loadNewQuestion() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    correctAns = num1 * num2;

    document.getElementById("dropZone").innerText = `What is ${num1} multiply ${num2}?`;
    document.getElementById("dropZone").classList.remove("correct", "wrong");

    let answers = [
        correctAns,
        correctAns + Math.floor(Math.random() * 5) + 1,
        correctAns - Math.floor(Math.random() * 5) - 1  
    ];
    answers = answers.sort(() => Math.random() - 0.5);

    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = "";
    answers.forEach((answer, index) => {
        const option = document.createElement("div");
        option.className = "option";
        option.innerText = answer;
        option.draggable = true;
        option.id = "option" + index;
        option.ondragstart = drag;
        optionsContainer.appendChild(option);
    });
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let draggedItem = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(draggedItem);
    let dropZone = document.getElementById("dropZone");

    if (parseInt(draggedElement.innerText) === correctAns) { 
        score++; 
        dropZone.innerText = "Correct! 🎉";
        dropZone.classList.add("correct");
    } else {
        score = 0;  
        dropZone.innerText = "Wrong! Try Again. ❌";
        dropZone.classList.add("wrong");
    }

    document.getElementById("score").innerText = `Score: ${score}`;

    setTimeout(loadNewQuestion, 1000);
}


window.onload = loadNewQuestion;
