// Game State
let currentMode = ''; // 'practice' or 'challenge'
let currentIndex = 0;
let score = 0;
let questions = [];

// DOM Elements
const screens = {
    menu: document.getElementById('main-menu'),
    practice: document.getElementById('practice-mode'),
    challenge: document.getElementById('challenge-mode'),
    completion: document.getElementById('completion-screen')
};

// Initialize Game
function startGame(mode) {
    currentMode = mode;
    currentIndex = 0;
    score = 0;

    // Shuffle questions
    questions = [...vocabulary].sort(() => Math.random() - 0.5);

    // Reset UI
    document.getElementById('p-feedback').classList.add('hidden');
    document.getElementById('c-feedback').classList.add('hidden');
    document.getElementById('p-stem-input').value = '';
    document.getElementById('p-basic-input').value = '';
    document.getElementById('c-basic-input').value = '';

    showScreen(mode);

    if (mode === 'practice') {
        loadPracticeQuestion();
    } else {
        loadChallengeQuestion();
    }
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });

    // Small delay for transition effect
    setTimeout(() => {
        screens[screenName].classList.remove('hidden');
        setTimeout(() => {
            screens[screenName].classList.add('active');
        }, 10);
    }, 100);
}

function goHome() {
    showScreen('menu');
}

// Practice Mode Logic
function loadPracticeQuestion() {
    if (currentIndex >= 10) { // Limit to 10 questions
        showCompletion();
        return;
    }

    const question = questions[currentIndex];
    document.getElementById('p-current').innerText = currentIndex + 1;
    document.getElementById('p-total').innerText = 10;

    const container = document.getElementById('practice-card');
    container.innerHTML = '';

    question.examples.forEach(ex => {
        const div = document.createElement('div');
        div.className = 'example-sentence';
        // Replace **text** with strong tag, but initially hidden or just styled?
        // The requirement is to find the unchanging part.
        // Let's just show the full sentence. The user needs to find the stem.
        // The data has **markers**, let's remove them for display or style them if needed?
        // Replace **stem**suffix with <span class="target-word">stemsuffix</span>
        div.innerHTML = ex.replace(/\*\*([^*]+)\*\*(\S*)/g, '<span class="target-word">$1$2</span>');
        container.appendChild(div);
    });

    // Clear inputs
    document.getElementById('p-stem-input').value = '';
    document.getElementById('p-basic-input').value = '';
    document.getElementById('p-feedback').className = 'feedback hidden';
    document.getElementById('p-stem-input').focus();
}

function checkPracticeAnswer() {
    const question = questions[currentIndex];
    const stemInput = document.getElementById('p-stem-input').value.trim();
    const basicInput = document.getElementById('p-basic-input').value.trim();
    const feedback = document.getElementById('p-feedback');

    if (stemInput === question.stem && basicInput === question.basic) {
        feedback.innerText = "정답입니다! 참 잘했어요! 🎉";
        feedback.className = "feedback correct";
        feedback.classList.remove('hidden');

        setTimeout(() => {
            currentIndex++;
            loadPracticeQuestion();
        }, 1500);
    } else {
        feedback.innerText = "다시 한번 생각해보세요. 🤔";
        feedback.className = "feedback incorrect";
        feedback.classList.remove('hidden');
    }
}

// Challenge Mode Logic
function loadChallengeQuestion() {
    if (currentIndex >= 10) {
        showCompletion();
        return;
    }

    const question = questions[currentIndex];
    document.getElementById('c-score').innerText = score;

    const container = document.getElementById('challenge-card');
    container.innerHTML = '';

    // Pick ONE random example
    const randomEx = question.examples[Math.floor(Math.random() * question.examples.length)];
    const div = document.createElement('div');
    div.className = 'example-sentence';
    div.innerHTML = randomEx.replace(/\*\*([^*]+)\*\*(\S*)/g, '<span class="target-word">$1$2</span>');
    container.appendChild(div);

    // Clear input
    document.getElementById('c-basic-input').value = '';
    document.getElementById('c-feedback').className = 'feedback hidden';
    document.getElementById('c-basic-input').focus();
}

function checkChallengeAnswer() {
    const question = questions[currentIndex];
    const basicInput = document.getElementById('c-basic-input').value.trim();
    const feedback = document.getElementById('c-feedback');

    if (basicInput === question.basic) {
        score += 10;
        document.getElementById('c-score').innerText = score;
        feedback.innerText = "정답! 훌륭해요! 🌟";
        feedback.className = "feedback correct";
        feedback.classList.remove('hidden');

        setTimeout(() => {
            currentIndex++;
            loadChallengeQuestion();
        }, 1000);
    } else {
        feedback.innerText = `아쉬워요. 정답은 '${question.basic}'입니다.`;
        feedback.className = "feedback incorrect";
        feedback.classList.remove('hidden');

        setTimeout(() => {
            currentIndex++;
            loadChallengeQuestion();
        }, 2000);
    }
}

function showCompletion() {
    const title = document.getElementById('result-title');
    const msg = document.getElementById('result-message');

    if (currentMode === 'practice') {
        title.innerText = "연습 완료! 🎉";
        msg.innerText = "모든 문제를 연습했어요. 이제 실전 모드에 도전해보세요!";
    } else {
        title.innerText = "도전 완료! 🏆";
        msg.innerText = `당신의 점수는 ${score}점입니다!`;
    }

    showScreen('completion');
}

// Event Listeners for Enter key
document.getElementById('p-basic-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPracticeAnswer();
    }
});

document.getElementById('c-basic-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkChallengeAnswer();
    }
});
