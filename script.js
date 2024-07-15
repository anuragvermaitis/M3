let n = 5;
let totalQuestion = n;
let currentQuestion = null;
let time = 0;
let duration = 0;
let currentTime = 0;
let intervalId;
let intervalUd;

function mins(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;

    return `This question took you ${minutes} minutes and ${seconds} seconds`;
}

function minsLive(secs){
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;

    return `${minuetes}:${seconds}`
}

function getRandomQuestion() {
    return Math.ceil(Math.random() * n);
}

function showQuestion() {
    document.getElementById('time').innerHTML = '';

    currentQuestion = getRandomQuestion();
    // alert (currentQuestion);
    console.log(currentQuestion);

    document.getElementById('question').src = `img/question${currentQuestion}.jpeg`;
    // document.getElementById('solution').src = `img/solution${currentQuestion}.png`;
    document.getElementById('question').style.display = 'block';
    document.getElementById('solution').style.display = 'none';

    

    time = 0;
    // dura = 0;
    if (intervalId) {
        clearInterval(intervalId); // Clear previous intrvl
    }
    intervalId = setInterval(() => {
        time += 1;
        duration = mins(time);
        // dura = minsLive(time);
    }, 1000);

    intervalUd = setInterval(()=>{
        currentTime = minsLive(time);
        document.getElementById('timeLive').innerHTML = currentTime;
    }, 1000);
    
}

function showSolution() {
    clearInterval(intervalUd);
    document.getElementById('time').innerHTML = duration;
    clearInterval(intervalId);
    clearInterval(intervalUd);

    document.getElementById('solution').src = `img/solution${currentQuestion}.jpeg`;
    document.getElementById('solution').style.display = 'block';
}
