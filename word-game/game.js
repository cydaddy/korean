const WORD_DB = [
    // 어찌하다 (동사)
    { word: '달린다', type: '어찌' }, { word: '밥을 먹는다', type: '어찌' },
    { word: '춤춘다', type: '어찌' }, { word: '노래한다', type: '어찌' },
    { word: '잠을 잔다', type: '어찌' }, { word: '공부한다', type: '어찌' },
    { word: '놀이터에서 논다', type: '어찌' }, { word: '책을 읽는다', type: '어찌' },
    { word: '학교에 간다', type: '어찌' }, { word: '그림을 그린다', type: '어찌' },
    { word: '크게 웃는다', type: '어찌' }, { word: '엉엉 운다', type: '어찌' },
    { word: '길을 걷는다', type: '어찌' }, { word: '영화관에서 본다', type: '어찌' },
    { word: '음악을 듣는다', type: '어찌' }, { word: '과자를 산다', type: '어찌' },
    { word: '물을 마신다', type: '어찌' }, { word: '장난감을 만든다', type: '어찌' },
    { word: '바위 뒤에 숨는다', type: '어찌' }, { word: '보물을 찾는다', type: '어찌' },
    { word: '옷을 입는다', type: '어찌' }, { word: '신발을 신는다', type: '어찌' },
    { word: '자전거를 탄다', type: '어찌' }, { word: '만나서 인사한다', type: '어찌' },
    { word: '청소를 한다', type: '어찌' }, { word: '수영장에서 수영한다', type: '어찌' },
    { word: '도화지를 자른다', type: '어찌' }, { word: '공을 던진다', type: '어찌' },
    { word: '선물을 받는다', type: '어찌' }, { word: '연필을 줍는다', type: '어찌' },

    // 어떠하다 (형용사)
    { word: '예쁘다', type: '어떠' }, { word: '아주 차갑다', type: '어떠' },
    { word: '멋지다', type: '어떠' }, { word: '너무 슬프다', type: '어떠' },
    { word: '하늘이 푸르다', type: '어떠' }, { word: '정말 아름답다', type: '어떠' },
    { word: '날씨가 따뜻하다', type: '어떠' }, { word: '매우 크다', type: '어떠' },
    { word: '정말 작다', type: '어떠' }, { word: '귀엽다', type: '어떠' },
    { word: '정말 기쁘다', type: '어떠' }, { word: '무섭다', type: '어떠' },
    { word: '산이 높다', type: '어떠' }, { word: '천장이 낮다', type: '어떠' },
    { word: '기차가 길다', type: '어떠' }, { word: '끈이 짧다', type: '어떠' },
    { word: '떡볶이가 맵다', type: '어떠' }, { word: '국물이 짜다', type: '어떠' },
    { word: '사탕이 달다', type: '어떠' }, { word: '약이 쓰다', type: '어떠' },
    { word: '레몬이 시다', type: '어떠' }, { word: '물이 뜨겁다', type: '어떠' },
    { word: '바람이 시원하다', type: '어떠' }, { word: '가방이 무겁다', type: '어떠' },
    { word: '깃털이 가볍다', type: '어떠' }, { word: '비행기가 빠르다', type: '어떠' },
    { word: '거북이가 느리다', type: '어떠' }, { word: '기분이 좋다', type: '어떠' },
    { word: '화가 난 상태이다', type: '어떠' }, { word: '신나고 즐겁다', type: '어떠' },

    // 무엇이다 (체언+서술격 조사)
    { word: '학생이다', type: '무엇' }, { word: '사과이다', type: '무엇' },
    { word: '우리 선생님이다', type: '무엇' }, { word: '학교이다', type: '무엇' },
    { word: '내 책상이다', type: '무엇' }, { word: '새 연필이다', type: '무엇' },
    { word: '귀여운 강아지이다', type: '무엇' }, { word: '가방이다', type: '무엇' },
    { word: '내 친구이다', type: '무엇' }, { word: '도서관 책이다', type: '무엇' },
    { word: '초록색 나무이다', type: '무엇' }, { word: '푸른 바다이다', type: '무엇' },
    { word: '높은 산이다', type: '무엇' }, { word: '흐르는 강이다', type: '무엇' },
    { word: '아름다운 꽃이다', type: '무엇' }, { word: '우리 집이다', type: '무엇' },
    { word: '3학년 교실이다', type: '무엇' }, { word: '까만 칠판이다', type: '무엇' },
    { word: '하얀 분필이다', type: '무엇' }, { word: '노란 지우개이다', type: '무엇' },
    { word: '숙제 공책이다', type: '무엇' }, { word: '검은 뿔테 안경이다', type: '무엇' },
    { word: '겨울 모자이다', type: '무엇' }, { word: '새 신발이다', type: '무엇' },
    { word: '따뜻한 옷이다', type: '무엇' }, { word: '맛있는 포도이다', type: '무엇' },
    { word: '빨간 수박이다', type: '무엇' }, { word: '달콤한 바나나이다', type: '무엇' },
    { word: '하얀 고양이이다', type: '무엇' }, { word: '작은 참새이다', type: '무엇' }
];

// Web Audio API for Sound Effects
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const Sound = {
    playTone: function(freq, type, duration, vol=0.1) {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    },
    correct: function() {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    },
    wrong: function() {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    },
    finish: function() {
        this.playTone(523.25, 'square', 0.1);
        setTimeout(() => this.playTone(659.25, 'square', 0.1), 100);
        setTimeout(() => this.playTone(783.99, 'square', 0.2), 200);
        setTimeout(() => this.playTone(1046.50, 'square', 0.4), 300);
    },
    gameOver: function() {
        this.playTone(400, 'sine', 0.2);
        setTimeout(() => this.playTone(500, 'sine', 0.2), 200);
        setTimeout(() => this.playTone(600, 'sine', 0.4), 400);
        setTimeout(() => this.playTone(800, 'sine', 0.6, 0.2), 600);
    },
    click: function() {
        this.playTone(800, 'sine', 0.05, 0.05);
    }
};

const TARGET_SCORE = 10;
let playerCount = 1;
let gameMode = 'same'; // 'same' or 'diff'
let sharedQuestions = []; // Array of words for 'same' mode
let players = [];
let finishedPlayers = []; // Track rankings
let isGameOver = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const playersContainer = document.getElementById('players-container');
const btnBack = document.getElementById('btn-back');
const winnerText = document.getElementById('winner-text');
const btnRestart = document.getElementById('btn-restart');

// Event Listeners for Player Selection
if (btnBack) {
    btnBack.addEventListener('click', () => {
        Sound.click();
        isGameOver = true;
        gameScreen.classList.remove('active');
        startScreen.classList.add('active');
    });
}
document.querySelectorAll('.btn-mode').forEach(btn => {
    btn.addEventListener('click', (e) => {
        Sound.click();
        document.querySelectorAll('.btn-mode').forEach(b => {
            b.style.background = 'var(--surface)';
            b.style.color = 'var(--text-color)';
        });
        const selectedBtn = e.target;
        selectedBtn.style.background = 'var(--accent)';
        selectedBtn.style.color = '#fff';
        gameMode = selectedBtn.getAttribute('data-mode');
    });
});

document.querySelectorAll('.btn-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
        Sound.click();
        playerCount = parseInt(e.target.getAttribute('data-players'));
        startGame();
    });
});

btnRestart.addEventListener('click', () => {
    Sound.click();
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
});

function startGame() {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    isGameOver = false;
    
    // Generate a long shared sequence just in case
    sharedQuestions = [];
    for(let i=0; i<50; i++) {
        sharedQuestions.push(generateRandomWord());
    }
    
    finishedPlayers = [];
    initPlayers();
    
    // Give initial questions
    players.forEach(p => nextQuestionFor(p.id));
}

function initPlayers() {
    playersContainer.innerHTML = '';
    players = [];
    
    for (let i = 1; i <= playerCount; i++) {
        players.push({
            id: i,
            score: 0,
            locked: false,
            finished: false,
            rank: 0
        });

        const panel = document.createElement('div');
        panel.className = 'player-panel';
        panel.id = `player-${i}`;
        
        // Inline CSS variable for character color
        const colorVar = `var(--p${i}-color)`;
        
        panel.innerHTML = `
            <div class="player-header" style="background: ${colorVar}; color: white; text-shadow: 1px 1px 0 #000;">${i}P</div>
            <div class="player-question" id="question-${i}">준비...</div>
            <div class="track-area">
                <div class="finish-line"></div>
                <!-- z-index and positions -->
                <div class="character" id="char-${i}" style="background: ${colorVar}; color: white; text-shadow: 1px 1px 0 #000;">
                    ${i}P
                </div>
                <!-- Feedback overlay (O/X) -->
                <div class="feedback-overlay" id="feedback-${i}">O</div>
            </div>
            <div class="button-area">
                <button class="answer-btn" data-player="${i}" data-type="어찌">어찌하다</button>
                <button class="answer-btn" data-player="${i}" data-type="어떠">어떠하다</button>
                <button class="answer-btn" data-player="${i}" data-type="무엇">무엇이다</button>
            </div>
        `;
        playersContainer.appendChild(panel);
    }

    // Attach button events
    // Using pointdown or click. To support multiple simultaneous touches on whiteboards:
    document.querySelectorAll('.answer-btn').forEach(btn => {
        // Prevent default double-tap zoom or scrolling
        btn.addEventListener('touchstart', handleAnswer, { passive: false });
        btn.addEventListener('mousedown', handleAnswer);
    });
}

function generateRandomWord() {
    const idx = Math.floor(Math.random() * WORD_DB.length);
    return WORD_DB[idx];
}

function nextQuestionFor(pId) {
    if (isGameOver) return;
    const player = players.find(p => p.id === pId);
    if (!player) return;

    let nextWord;
    if (gameMode === 'same') {
        nextWord = sharedQuestions[player.score % sharedQuestions.length];
    } else {
        nextWord = generateRandomWord();
    }
    
    player.currentWord = nextWord;
    const qText = document.getElementById(`question-${pId}`);
    qText.textContent = nextWord.word;
    
    // Pop animation for new word
    qText.style.transform = 'scale(1.1)';
    setTimeout(() => {
        qText.style.transform = 'scale(1)';
    }, 150);
}

function handleAnswer(e) {
    if (e.cancelable) e.preventDefault(); // Prevent mousedown if touchstart fired
    if (isGameOver) return;

    const btn = e.currentTarget;
    const pId = parseInt(btn.getAttribute('data-player'));
    const ansType = btn.getAttribute('data-type');
    
    const player = players.find(p => p.id === pId);
    if (!player || player.locked || !player.currentWord || player.finished) return;

    const panel = document.getElementById(`player-${pId}`);
    const feedback = document.getElementById(`feedback-${pId}`);
    const char = document.getElementById(`char-${pId}`);

    if (ansType === player.currentWord.type) {
        // Correct Answer
        Sound.correct();
        player.score += 1;
        
        // Show O feedback
        feedback.textContent = 'O';
        feedback.className = 'feedback-overlay correct';
        
        // Move character
        // Bottom moves from 10px to roughly 90%
        const progress = (player.score / TARGET_SCORE) * 85; 
        char.style.bottom = `calc(10px + ${progress}%)`;

        // Check Win Condition
        if (player.score >= TARGET_SCORE) {
            Sound.finish();
            player.finished = true;
            player.rank = finishedPlayers.length + 1;
            finishedPlayers.push(player);
            
            // Mark as finished visually
            panel.classList.add('finished');
            const qText = document.getElementById(`question-${pId}`);
            qText.textContent = `${player.rank}등!`;

            if (finishedPlayers.length === playerCount) {
                endGame();
            }
        } else {
            // Update individual question
            nextQuestionFor(pId);
        }
        
        // Reset feedback animation
        setTimeout(() => {
            if (feedback.className.includes('correct')) {
                feedback.className = 'feedback-overlay';
            }
        }, 500);

    } else {
        // Wrong Answer
        Sound.wrong();
        player.locked = true;
        
        // Show X feedback
        feedback.textContent = 'X';
        feedback.className = 'feedback-overlay wrong';
        
        // Shake panel effect & turn buttons gray
        panel.classList.add('shake');
        panel.classList.add('locked');
        
        // Unlock after penalty time (1.5s)
        setTimeout(() => {
            player.locked = false;
            panel.classList.remove('shake');
            panel.classList.remove('locked');
            if (feedback.className.includes('wrong')) {
                feedback.className = 'feedback-overlay';
            }
        }, 1500);
    }
}

function endGame() {
    isGameOver = true;
    setTimeout(() => {
        Sound.gameOver();
        gameScreen.classList.remove('active');
        resultScreen.classList.add('active');
        
        let resultHTML = '<div style="display:flex; flex-direction:column; gap:10px; margin-bottom: 20px;">';
        finishedPlayers.forEach(p => {
            resultHTML += `<div style="font-size: 2rem; color: var(--text-color); font-weight: bold;">
                <span style="color: var(--p${p.id}-color); font-size: 2.5rem;">${p.rank}등</span> : ${p.id}P
            </div>`;
        });
        resultHTML += '</div>';
        
        winnerText.innerHTML = resultHTML;
    }, 1000);
}
