const sentencesLevel1 = [
    // 1+2 (주어부 1단어, 서술부 2단어)
    { s: "나는", p: "물을 마십니다." },
    { s: "엄마가", p: "요리를 하십니다." },
    { s: "기차가", p: "빠르게 달립니다." },
    { s: "아빠가", p: "신문을 읽으십니다." },
    { s: "동생이", p: "그림을 그립니다." },
    { s: "영희가", p: "피아노를 칩니다." },
    { s: "오빠가", p: "축구를 합니다." },
    { s: "친구가", p: "편지를 씁니다." },
    { s: "꽃이", p: "활짝 피었습니다." },
    { s: "바람이", p: "시원하게 붑니다." },
    { s: "구름이", p: "빠르게 흘러갑니다." },
    { s: "자동차가", p: "쌩쌩 달립니다." },
    { s: "비행기가", p: "높이 날아갑니다." },
    { s: "강아지가", p: "꼬리를 흔듭니다." },
    { s: "토끼가", p: "당근을 먹습니다." },
    { s: "아기가", p: "방긋 웃습니다." },
    { s: "고양이가", p: "세수를 합니다." },
    { s: "선생님이", p: "우리를 가르치십니다." },
    
    // 2+1 (주어부 2단어, 서술부 1단어)
    { s: "예쁜 꽃이", p: "피었습니다." },
    { s: "맑은 물이", p: "흐릅니다." },
    { s: "하얀 눈이", p: "내립니다." },
    { s: "푸른 하늘이", p: "맑습니다." },
    { s: "우리 강아지가", p: "귀엽습니다." },
    { s: "착한 이웃이", p: "도와줍니다." },
    { s: "빨간 사과가", p: "맛있습니다." },
    { s: "시원한 수박이", p: "최고입니다." },
    { s: "노래하는 새가", p: "아름답습니다." },
    { s: "아기 오리가", p: "헤엄칩니다." },
    { s: "동네 친구가", p: "이사했습니다." },
    { s: "달리는 기차가", p: "빠릅니다." },
    { s: "맛있는 빵이", p: "구워졌습니다." },
    { s: "둥근 달이", p: "떴습니다." },
    { s: "키 큰 형이", p: "도착했습니다." },
    { s: "새로운 짝꿍이", p: "반가워합니다." },
    { s: "따뜻한 햇살이", p: "눈부십니다." },
    { s: "넓은 바다가", p: "시원합니다." }
];

const sentencesLevel2 = [ // 긴 서술부 (총 8어절 이하)
    // 주어부 1단어 + 서술부 길게
    { s: "사람들이", p: "주말을 맞이하여 조용한 공원으로 나들이를 갔습니다." },
    { s: "사자가", p: "드넓은 초원에서 먹이를 찾아 천천히 걸어갑니다." },
    { s: "할아버지가", p: "마당 귀퉁이에 예쁜 꽃들을 꼼꼼하게 심으셨습니다." },
    { s: "코끼리가", p: "동물원 물가에서 긴 코로 신나게 물장구를 칩니다." },
    { s: "선생님이", p: "우리를 위해 신기한 과학 실험을 준비하셨습니다." },
    { s: "농부가", p: "더운 날씨에도 밭에서 땀방울을 한가득 흘리십니다." },
    { s: "철수가", p: "학원이 끝나고 집으로 빨리 달려와서 쉬었습니다." },
    { s: "원숭이가", p: "나무에 매달리며 장난스럽게 막춤을 신나게 춥니다." },
    
    // 주어부 2단어 + 서술부 길게
    { s: "우리 삼촌이", p: "여러 나라를 여행하며 멋진 사진을 찍으셨습니다." },
    { s: "새하얀 토끼가", p: "풀밭에서 뛰며 맛있는 당근을 열심히 찾습니다." },
    { s: "동네 친구들이", p: "비가 오는데도 골목에서 아주 재미있게 뛰놀았습니다." },
    { s: "경찰 아저씨가", p: "길 잃은 꼬마를 무사히 집으로 데려다주셨습니다." },
    { s: "귀여운 다람쥐가", p: "겨울을 대비해 맛있는 도토리를 입안에 모았습니다." },
    
    // 주어부 3단어 + 서술부 길게
    { s: "새로 산 자전거가", p: "예쁜 별무늬로 아주 눈부시게 반짝입니다." },
    { s: "착한 우리 고양이가", p: "방바닥에 편히 누워 볼록한 배를 긁습니다." },
    { s: "동생과 만든 눈사람이", p: "따뜻한 오후 햇살을 받아 서서히 녹습니다." },
    { s: "일찍 일어나신 할머니께서", p: "마당 화초들에게 맑은 시냇물을 듬뿍 뿌리셨습니다." },
    { s: "늦게 잠든 내가", p: "아침에 서둘러 학교로 허겁지겁 뛰어갔습니다." }
];

const sentencesLevel3 = [ // 긴 주어부 (총 8어절 이하)
    // 서술부 1단어 + 주어부 길게
    { s: "밭에서 구슬땀을 뻘뻘 흘리며 일하시는 삼촌이", p: "대단합니다." },
    { s: "가을 산을 붉게 물들이는 예쁜 단풍나무가", p: "환상적입니다." },
    { s: "밤늦게까지 몰래 재미있는 만화를 다 본 동생이", p: "지각했습니다." },
    { s: "바닷가에서 예쁘고 동그란 조약돌을 줍는 아이들이", p: "신났습니다." },
    { s: "비 오는 골목에서 불쌍한 길가 강아지를 안아준 소년이", p: "나타났습니다." },
    
    // 서술부 2단어 + 주어부 길게
    { s: "아침부터 좁은 소파에서 낄낄대는 개구쟁 형이", p: "참 웃깁니다." },
    { s: "엄마가 정성껏 보글보글 끓여주신 된장찌개가", p: "정말 맛있습니다." },
    { s: "밤하늘을 투명한 보석처럼 화려하게 수놓은 별들이", p: "무척 아름답습니다." },
    { s: "봄바람을 맞으며 길가에 예쁘게 피어난 민들레꽃이", p: "활짝 피었습니다." },
    
    // 서술부 3단어 + 주어부 길게
    { s: "가족들과 즐거웠던 여름 바다 여행이", p: "자꾸 머릿속에 맴돕니다." },
    { s: "할머니에게 들었던 무서운 고양이 이야기가", p: "아주 생생하게 떠오릅니다." },
    { s: "단정하게 교복을 챙겨 입은 언니가", p: "무척 매력적이고 당당합니다." },
    { s: "책상 위에 가득 쌓인 수학 문제집들이", p: "무섭고 부담스럽게 느껴집니다." }
];

const allSentences = [
    ...sentencesLevel1, 
    ...sentencesLevel2, 
    ...sentencesLevel3
];

let selectedLevel = 1;
let numPlayers = 1;
let players = [];
let currentRank = 1;
const TARGET_SCORE = 10;
let playerSentenceQueues = {};
let playerPenalty = {}; // 페널티 중인 플레이어 추적

// Screens
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const playersContainer = document.getElementById('players-container');

// Buttons
const levelBtns = document.querySelectorAll('.level-btn');
const playerBtns = document.querySelectorAll('.player-btn');
const levelDisplay = document.getElementById('level-display');
const btnHome = document.getElementById('btn-home');
const btnRestart = document.getElementById('btn-restart');

// Events
levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        levelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedLevel = parseInt(btn.dataset.level);
    });
});

playerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        numPlayers = parseInt(btn.dataset.players);
        startGame();
    });
});

btnHome.addEventListener('click', () => {
    showScreen(startScreen);
});

btnRestart.addEventListener('click', () => {
    showScreen(startScreen);
});

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function shuffleArray(array) {
    // Fisher-Yates array shuffle function
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initPlayerQueues() {
    playerSentenceQueues = {};
    
    for (let i = 1; i <= numPlayers; i++) {
        let pool;
        if (selectedLevel === 1) pool = [...sentencesLevel1];
        else if (selectedLevel === 2) pool = [...sentencesLevel2];
        else if (selectedLevel === 3) pool = [...sentencesLevel3];
        else pool = [...allSentences]; // 4단계 종합
        
        playerSentenceQueues[i] = shuffleArray(pool);
    }
}

function startGame() {
    levelDisplay.textContent = selectedLevel === 4 ? '4단계 (종합)' : `${selectedLevel}단계`;
    showScreen(gameScreen);
    
    // Initialize Game state
    players = [];
    currentRank = 1;
    playerPenalty = {};
    playersContainer.innerHTML = '';
    
    initPlayerQueues();
    
    // Grid Setup (가로로만 분할: 전자칠판 접근성을 위해 무조건 1줄로 나열)
    playersContainer.style.gridTemplateColumns = `repeat(${numPlayers}, 1fr)`;
    playersContainer.style.gridTemplateRows = '1fr';

    for (let i = 1; i <= numPlayers; i++) {
        players.push({
            id: i,
            score: 0,
            rank: null,
            finished: false
        });
        
        const panel = document.createElement('div');
        panel.className = 'player-panel';
        panel.dataset.pid = i;
        panel.id = `player-${i}`;
        
        panel.innerHTML = `
            <div class="player-title">${i}P</div>
            <div class="score-display" id="score-${i}">0 / ${TARGET_SCORE}</div>
            <div class="sentence-container" id="sentence-${i}" style="transition: transform 0.1s ease-out; margin-bottom: 50px;"></div>
            <div class="feedback" id="feedback-${i}">O</div>
            
            <div class="height-control">
                <span style="font-size: 1rem; color: #888; font-weight: bold; margin-bottom: 5px;">👇 위치 내리기 👇</span>
                <input type="range" min="0" max="40" value="0" class="height-slider" id="slider-${i}" oninput="adjustHeight(${i})">
            </div>
        `;
        
        playersContainer.appendChild(panel);
        loadSentence(i);
    }
}

function getNextSentence(pid) {
    // 큐가 비었다면 문제를 새로 섞어서 보충 (문제가 바닥나지 않도록)
    if (playerSentenceQueues[pid].length === 0) {
        let pool;
        if (selectedLevel === 1) pool = [...sentencesLevel1];
        else if (selectedLevel === 2) pool = [...sentencesLevel2];
        else if (selectedLevel === 3) pool = [...sentencesLevel3];
        else pool = [...allSentences];
        
        playerSentenceQueues[pid] = shuffleArray(pool);
    }
    
    const obj = playerSentenceQueues[pid].pop(); // 큐에서 하나씩 빼옴 (중복 안 나오게)
    const sWords = obj.s.split(' ');
    const pWords = obj.p.split(' ');
    
    return {
        words: [...sWords, ...pWords],
        correctIndex: sWords.length - 1 // split is placed AFTER this index
    };
}

function loadSentence(pid) {
    const player = players.find(p => p.id === pid);
    if (player.finished) return;
    
    const container = document.getElementById(`sentence-${pid}`);
    container.innerHTML = '';
    
    const data = getNextSentence(pid);
    
    for (let i = 0; i < data.words.length; i++) {
        // 단어와 가위 기호가 서로 다른 줄로 떨어지지 않도록 묶어주는 래퍼
        const group = document.createElement('div');
        group.className = 'word-group';
        
        // Word span
        const wSpan = document.createElement('span');
        wSpan.className = 'word';
        wSpan.textContent = data.words[i];
        group.appendChild(wSpan);
        
        // Split button (not for the last word)
        if (i < data.words.length - 1) {
            const btn = document.createElement('div');
            btn.className = 'slash-btn';
            btn.innerHTML = '✂️';
            btn.onclick = () => handleSplit(pid, i, data.correctIndex, container);
            group.appendChild(btn);
        }
        
        container.appendChild(group);
    }
}

function handleSplit(pid, clickedIndex, correctIndex, container) {
    const player = players.find(p => p.id === pid);
    if (player.finished) return;
    if (playerPenalty[pid]) return; // 페널티 중에는 입력 무시
    
    const isCorrect = clickedIndex === correctIndex;
    showFeedback(pid, isCorrect);
    
    if (isCorrect) {
        player.score++;
        document.getElementById(`score-${pid}`).textContent = `${player.score} / ${TARGET_SCORE}`;
        
        if (player.score >= TARGET_SCORE) {
            player.finished = true;
            player.rank = currentRank++;
            container.innerHTML = `<div style="font-size: 3rem; color: var(--primary); font-weight: bold; text-align:center;">축하합니다! 🎉<br><br>${player.rank}등</div>`;
            checkGameEnd();
        } else {
            setTimeout(() => {
                loadSentence(pid);
            }, 300);
        }
    } else {
        // 페널티: 1.5초 동안 모든 가위 버튼을 비활성화
        applyPenalty(pid);
    }
}

function applyPenalty(pid) {
    playerPenalty[pid] = true;
    const panel = document.getElementById(`player-${pid}`);
    
    // 흔들기 효과
    panel.classList.add('shake');
    setTimeout(() => panel.classList.remove('shake'), 400);
    
    // 가위 버튼 비활성화 + 회색 처리
    const btns = panel.querySelectorAll('.slash-btn');
    btns.forEach(btn => {
        btn.classList.add('disabled');
    });
    
    // 1.5초 후 해제
    setTimeout(() => {
        playerPenalty[pid] = false;
        btns.forEach(btn => btn.classList.remove('disabled'));
    }, 1500);
}

function showFeedback(pid, isCorrect) {
    const fb = document.getElementById(`feedback-${pid}`);
    fb.textContent = isCorrect ? 'O' : 'X';
    fb.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
    setTimeout(() => fb.className = 'feedback', 300);
}

function checkGameEnd() {
    const activePlayers = players.filter(p => !p.finished);
    if (activePlayers.length === 0 || (numPlayers > 1 && activePlayers.length === 1)) {
        // Finish game
        if (activePlayers.length === 1) {
            activePlayers[0].finished = true;
            activePlayers[0].rank = currentRank;
        }
        
        setTimeout(showResult, 1000);
    }
}

function showResult() {
    showScreen(resultScreen);
    
    const sortedPlayers = [...players].sort((a, b) => a.rank - b.rank);
    
    document.getElementById('winner-text').textContent = `🏆 우승: ${sortedPlayers[0].id}P 🏆`;
    
    const rankingsHtml = sortedPlayers.map(p => `
        <div class="rank-item">
            <strong>${p.rank}등</strong> : ${p.id}P (점수: ${p.score})
        </div>
    `).join('');
    
    document.getElementById('rankings').innerHTML = rankingsHtml;
}

function adjustHeight(pid) {
    const slider = document.getElementById(`slider-${pid}`);
    const container = document.getElementById(`sentence-${pid}`);
    const fb = document.getElementById(`feedback-${pid}`);
    
    const offset = slider.value; // 0 ~ 40 vh
    container.style.transform = `translateY(${offset}vh)`;
    
    // 피드백 기호(O, X)도 같이 내려오게 축 조정. 
    // 기존에 translate(-50%, -50%) 였으므로 calc 함수 활용 
    fb.style.marginTop = `${offset}vh`;
}
