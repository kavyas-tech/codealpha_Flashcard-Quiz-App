function login(){

    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if(user === "kavya" && pass === "1234"){

        alert("Login Successful!");

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("appPage").style.display = "block";

        document.getElementById("welcome").innerHTML =
        "Hello Kavya!";

        displayCard();

    } else {

        alert("Invalid Username or Password");

    }
}

// Flashcards Data
let flashcards = [
{
    question:"What is HTML?",
    answer:"HyperText Markup Language"
},
{
    question:"What is CSS?",
    answer:"Cascading Style Sheets"
},
{
    question:"What is JavaScript?",
    answer:"Programming Language for Web Development"
}
];

let currentIndex = 0;

// Display Card
function displayCard(){

    document.getElementById("question").innerHTML =
    flashcards[currentIndex].question;

    document.getElementById("answer").innerHTML =
    flashcards[currentIndex].answer;

    document.getElementById("answer").style.display = "none";
}

// Show Answer
function toggleAnswer(){

    let ans = document.getElementById("answer");

    if(ans.style.display === "none"){
        ans.style.display = "block";
    } else {
        ans.style.display = "none";
    }
}

// Next Card
function nextCard(){

    currentIndex++;

    if(currentIndex >= flashcards.length){
        currentIndex = 0;
    }

    displayCard();
}

// Previous Card
function prevCard(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = flashcards.length - 1;
    }

    displayCard();
}

// Add Card
function addCard(){

    let q = document.getElementById("newQuestion").value.trim();
    let a = document.getElementById("newAnswer").value.trim();

    if(q === "" || a === ""){
        alert("Please enter Question and Answer");
        return;
    }

    flashcards.push({
        question:q,
        answer:a
    });

    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";

    alert("Flashcard Added Successfully!");
}

// Edit Card
function editCard(){

    let q = prompt(
        "Edit Question:",
        flashcards[currentIndex].question
    );

    let a = prompt(
        "Edit Answer:",
        flashcards[currentIndex].answer
    );

    if(q && a){

        flashcards[currentIndex].question = q;
        flashcards[currentIndex].answer = a;

        displayCard();

        alert("Flashcard Updated!");
    }
}

// Delete Card
function deleteCard(){

    if(confirm("Delete this flashcard?")){

        flashcards.splice(currentIndex,1);

        if(flashcards.length === 0){

            document.getElementById("question").innerHTML =
            "No Flashcards Available";

            document.getElementById("answer").innerHTML = "";
            return;
        }

        currentIndex = 0;

        displayCard();

        alert("Flashcard Deleted!");
    }
}