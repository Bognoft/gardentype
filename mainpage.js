// Selecting necessary DOM elements for the typing game
// these elements are used to display the typing text, input field, statistics, and control buttons
const typingtext = document.querySelector(".typingtext p");
const inputfield = document.querySelector(".wrapper .inputfield");
const mistaketag = document.querySelector(".mistake span");
const timetag = document.querySelector(".time span b");
const wpmtag = document.querySelector(".wpm span");
const cpmtag = document.querySelector(".cpm span");
const tryagainbutton = document.querySelector("button");
const gamewrapper = document.getElementById("gamewrapper");
const homepage = document.getElementById("homepage");
const scorespage = document.getElementById("scorespage");
const leveltitle = document.getElementById("leveltitle");
const leveldifficulty = document.getElementById("leveldifficulty");

// Game state variables
// these variables track the timer, typing progress, mistakes, and current level
let timer;
let maximumtime = 60;
let timeleft = maximumtime;
let characterindex = 0;
let mistakes = 0;
let istyping = false;
let currentlevel = 0;

// Object to store game scores and statistics
// keeps track of best scores per level, total games played, and overall performance
let gamescores = {
    levels: {},
    totalgames: 0,
    allwpmscores: [],
    allaccuracies: []
};

// Load paragraph function
// loads the paragraph for the current level and prepares it for typing
// wraps each character in a span for individual styling and tracking
function loadParagraph() {
    typingtext.innerHTML = "";
    
    paragraphs[currentlevel].split("").forEach(character => {
        let span = `<span>${character}</span>`;
        typingtext.innerHTML += span;
    });
    
    typingtext.querySelectorAll("span")[0].classList.add("active");
    
    document.addEventListener("keydown", () => inputfield.focus());
    typingtext.addEventListener("click", () => inputfield.focus());
}

//initialize typing function
// handles user input, compares typed characters with the paragraph
// updates character styling, mistake count, and calls timer and WPM calculation
function initTyping() {
    let characters = typingtext.querySelectorAll("span");
    
    let typedcharacter = inputfield.value.split("")[characterindex];

    if (timeleft > 0) {
        if (!istyping) {
            timer = setInterval(initTimer, 1000);
            istyping = true;
        }

        if (typedcharacter == null) {
            if (characterindex > 0) {
                characterindex--;
                
                if (characters[characterindex].classList.contains("incorrect")) {
                    mistakes--;
                }
                
                characters[characterindex].classList.remove("correct", "incorrect");
            }
        } 
        else {
            if (characters[characterindex].innerText === typedcharacter) {
                characters[characterindex].classList.add("correct");
            } else {
                mistakes++;
                characters[characterindex].classList.add("incorrect");
            }
            characterindex++;
        }

        characters.forEach(span => span.classList.remove("active"));
        
        if (characterindex < characters.length) {
            characters[characterindex].classList.add("active");
        } else {
            clearInterval(timer);
            inputfield.value = "";
            saveScore();
        }
        
        mistaketag.innerText = mistakes;
        cpmtag.innerText = characterindex - mistakes;
        
    } else {
        clearInterval(timer);
        inputfield.value = "";
        saveScore();
    }
    
    calculateWPM();
}

//initialize timer function
// decreases time left every second
// updates time display
// calls calculateWPM to update words per minute
function initTimer() {
    if (timeleft > 0) {
        timeleft--;
        timetag.innerText = timeleft;
        calculateWPM();
    } else {
        clearInterval(timer);
    }
}

//calculate wpm words per minute
//formula: total characters typed divided by 5 divided by time elapsed in minutes
//note: in typing, a word is defined as 5 characters
//example: if you type 300 characters in 2 minutes:
//wpm equals 300 divided by 5 divided by 2 equals 60 divided by 2 equals 30 wpm
function calculateWPM() {
    let wordsperminute;
    
    if (characterindex > 0) {
        let totaltypedcharacters = characterindex;
        let timetakeninminutes = (maximumtime - timeleft) / 60;
        
        wordsperminute = Math.round(((totaltypedcharacters / 5) / (maximumtime - timeleft)) * 60);
        
        if (isNaN(wordsperminute) || wordsperminute < 0 || wordsperminute == Infinity) {
            wordsperminute = 0;
        }
    } else {
        wordsperminute = 0;
    }
    
    wpmtag.innerText = wordsperminute;
}

//save score function
// saves the current score if it's better than previous best for the level
// updates total games played and overall statistics
// called at end of game or when time runs out
function saveScore() {
    const currentwpm = parseInt(wpmtag.innerText);
    const currentcpm = parseInt(cpmtag.innerText);
    const accuracy = Math.round(((characterindex - mistakes) / characterindex) * 100) || 0;
    
    if (!gamescores.levels[currentlevel]) {
        gamescores.levels[currentlevel] = {
            wpm: 0,
            cpm: 0,
            accuracy: 0,
            completed: false
        };
    }
    
    if (currentwpm > gamescores.levels[currentlevel].wpm) {
        gamescores.levels[currentlevel] = {
            wpm: currentwpm,
            cpm: currentcpm,
            accuracy: accuracy,
            completed: true
        };
        
        document.getElementById(`star${currentlevel}`).innerText = "⭐";
        document.querySelectorAll('.levelbutton')[currentlevel].classList.add('completed');
    }
    
    gamescores.totalgames++;
    gamescores.allwpmscores.push(currentwpm);
    gamescores.allaccuracies.push(accuracy);
    
    updateHomeStats();
}

//update home stats function
// updates the statistics shown on the home page
function updateHomeStats() {
    const completed = Object.values(gamescores.levels).filter(level => level.completed).length;
    document.getElementById('completedlevels').innerText = completed;
    
    const bestwpm = Math.max(...gamescores.allwpmscores, 0);
    document.getElementById('bestwpm').innerText = bestwpm;
    
    document.getElementById('totalgames').innerText = gamescores.totalgames;
    
    const averageaccuracy = gamescores.allaccuracies.length > 0
        ? Math.round(gamescores.allaccuracies.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0) / gamescores.allaccuracies.length)
        : 0;
    document.getElementById('averageaccuracy').innerText = averageaccuracy + '%';
}

//reset game function
// resets all game state variables to initial values
// reloads the paragraph for the current level
// and focuses the input field for typing
// called when starting a new game or retrying
function resetGame() {
    loadParagraph();
    clearInterval(timer);
    
    timeleft = maximumtime;
    characterindex = 0;
    mistakes = 0;
    istyping = false;
    inputfield.value = "";
    
    timetag.innerText = timeleft;
    mistaketag.innerText = 0;
    wpmtag.innerText = 0;
    cpmtag.innerText = 0;
    
    inputfield.focus();
}


//start level function
// sets up the game for the selected level gamit yung currentlevel index and lalagay yung mga nasa paragraph.js dahil sa levelinformation
// updates level title and difficulty
// and then pagkaselect mo rereset nya yung game gamit yung resetgame function para di masave yung previous state
function startLevel(levelindex) {
    currentlevel = levelindex;
    
    maximumtime = levelinformation[levelindex].time;
    timeleft = maximumtime;
    
    leveltitle.innerText = `Level ${levelindex + 1}`;
    leveldifficulty.innerText = `Difficulty: ${levelinformation[levelindex].difficulty} ${levelinformation[levelindex].description}`;
    
    homepage.style.display = 'none';
    scorespage.style.display = 'none';
    gamewrapper.classList.add('active');
    
    document.querySelectorAll('.navbutton').forEach(button => button.classList.remove('active'));
    
    resetGame();
}

//shows home function
//pag naging active na yung home button hhide na niya yung score and game page
//then palaging irrfresh yung stats sa home page gamit yung updateHomeStats function
function showHome() {
    homepage.style.display = 'block';
    scorespage.style.display = 'none';
    gamewrapper.classList.remove('active');
    
    document.querySelectorAll('.navbutton').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.navbutton')[0].classList.add('active');
    
    updateHomeStats();
}

//shows scores function
//shows your best scores for each level
// nilalagay sa score page and nilalagay siya sa scoreslist div
// if hindi pa na complete yung level, ipapakita na not completed yet
function showScores() {
    homepage.style.display = 'none';
    scorespage.style.display = 'block';
    gamewrapper.classList.remove('active');
    
    document.querySelectorAll('.navbutton').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.navbutton')[1].classList.add('active');
    
    let scoreshtml = '';
    
    for (let index = 0; index < 20; index++) {
        const score = gamescores.levels[index];
        
        if (score && score.completed) {
            scoreshtml += `
                <div class="scoreitem">
                    <div class="levelname">Level ${index + 1}: ${levelinformation[index].description}</div>
                    <div class="scorestats">
                        <span><strong>WPM:</strong> ${score.wpm}</span>
                        <span><strong>CPM:</strong> ${score.cpm}</span>
                        <span><strong>Accuracy:</strong> ${score.accuracy}%</span>
                    </div>
                </div>
            `;
        } else {
            scoreshtml += `
                <div class="scoreitem noscore">
                    <div class="levelname">Level ${index + 1}: ${levelinformation[index].description}</div>
                    <div class="scorestats">
                        <span>Not completed yet</span>
                    </div>
                </div>
            `;
        }
    }
    
    document.getElementById('scoreslist').innerHTML = scoreshtml;
}

// event listeners
// tignan kung may input na sa typing area
// check kung clinick yung try again button na may reseetgame function
inputfield.addEventListener("input", initTyping);
tryagainbutton.addEventListener("click", resetGame);

// pagkainitialize ng website
// load mga paragraphs
// focus yung input sa typing area
// update stats
loadParagraph();
inputfield.focus();
updateHomeStats();