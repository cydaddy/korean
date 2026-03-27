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
let useSameSet = false; // 같은 문제 세트 사용 여부
let sharedSentenceQueue = []; // 같은 세트 모드에서 공유되는 큐

// ============================================================
// 효과음 (Web Audio API)
// ============================================================
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new AudioCtx();
    }
    // Resume if suspended (browser autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playCorrectSound() {
    const ctx = getAudioCtx();
    // 명랑한 도-미-솔 화음 + 글리산도 상승
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5 E5 G5 C6
    notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.02, ctx.currentTime + i * 0.08 + 0.15);
        gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.3);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.35);
    });
}

function playWrongSound() {
    const ctx = getAudioCtx();
    // 낮고 탁한 "삑삑" 실패음 + 피치 하강
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(220, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.4);

    osc2.type = 'square';
    osc2.frequency.setValueAtTime(180, ctx.currentTime + 0.05);
    osc2.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.45);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

    osc1.start(ctx.currentTime);
    osc2.start(ctx.currentTime + 0.05);
    osc1.stop(ctx.currentTime + 0.5);
    osc2.stop(ctx.currentTime + 0.5);
}

function playFinishSound() {
    const ctx = getAudioCtx();
    // 팡파레 느낌 - 빠른 아르페지오 + 롤
    const sequence = [
        { freq: 523.25, t: 0 },
        { freq: 659.25, t: 0.1 },
        { freq: 783.99, t: 0.2 },
        { freq: 1046.50, t: 0.3 },
        { freq: 1318.51, t: 0.4 },
        { freq: 1046.50, t: 0.55 },
        { freq: 1318.51, t: 0.65 },
        { freq: 1567.98, t: 0.75 },
    ];
    sequence.forEach(({ freq, t }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + t);
        gain.gain.setValueAtTime(0, ctx.currentTime + t);
        gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.25);
        osc.start(ctx.currentTime + t);
        osc.stop(ctx.currentTime + t + 0.3);
    });
}

// 시작 화면 버튼용 - 경쾌한 팝 소리
function playPopSound(variation = 0) {
    const ctx = getAudioCtx();
    const freqs = [660, 740, 820, 900];
    const freq = freqs[variation % freqs.length];

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.18);
}

// 게임 시작 알림음 (인원 선택 시)
function playStartSound() {
    const ctx = getAudioCtx();
    const notes = [523.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
        gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + i * 0.1 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.25);
        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.3);
    });
}

function playScissorSound() {
    const ctx = getAudioCtx();
    // 가위 "싹둑" 소리 느낌 - 노이즈 + 짧은 클릭
    const bufferSize = ctx.sampleRate * 0.08;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3);
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 3000;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.6, ctx.currentTime);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(ctx.currentTime);
}

// ============================================================
// 핀치 투 줌 완전 차단
// touchmove 2+ 터치: 예외 없이 항상 차단
// 슬라이더 조작은 커스텀 터치 핸들러(setupSliderCustomTouch)가 따로 처리
// ============================================================
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault(); // 무조건 줌 차단
    }
}, { passive: false });

// Safari 전용 gesture 이벤트 줌 차단
document.addEventListener('gesturestart',  (e) => e.preventDefault(), { passive: false });
document.addEventListener('gesturechange', (e) => e.preventDefault(), { passive: false });
document.addEventListener('gestureend',   (e) => e.preventDefault(), { passive: false });

// ============================================================
// 슬라이더 커스텀 터치 핸들러
// document.touchmove 가 preventDefault()를 호출해도
// 우리가 직접 value를 계산/갱신하므로 슬라이더가 정상 작동
// ============================================================
function setupSliderCustomTouch(pid) {
    const slider = document.getElementById(`slider-${pid}`);
    if (!slider) return;

    let activeTouchId = null;

    slider.addEventListener('touchstart', (e) => {
        // 첫 터치 ID를 기억
        if (activeTouchId === null) {
            activeTouchId = e.changedTouches[0].identifier;
        }
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
        for (const t of e.changedTouches) {
            if (t.identifier === activeTouchId) {
                const rect = slider.getBoundingClientRect();
                const ratio = Math.max(0, Math.min(1,
                    (t.clientX - rect.left) / rect.width
                ));
                const min = parseFloat(slider.min) || 0;
                const max = parseFloat(slider.max) || 40;
                slider.value = min + ratio * (max - min);
                // oninput 핸들러(adjustHeight) 수동 트리거
                slider.dispatchEvent(new Event('input'));
                break;
            }
        }
    }, { passive: true }); // passive:true → document 핸들러와 충돌 없음

    slider.addEventListener('touchend', (e) => {
        for (const t of e.changedTouches) {
            if (t.identifier === activeTouchId) {
                activeTouchId = null;
                break;
            }
        }
    }, { passive: true });
}

// ============================================================
// UI Elements
// ============================================================
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const playersContainer = document.getElementById('players-container');

const levelBtns = document.querySelectorAll('.level-btn');
const playerBtns = document.querySelectorAll('.player-btn');
const levelDisplay = document.getElementById('level-display');
const btnHome = document.getElementById('btn-home');
const btnRestart = document.getElementById('btn-restart');
const sameSetBtns = document.querySelectorAll('.same-set-btn');

// ============================================================
// 가위 버튼 터치 위임 핸들러 (한 번만 등록)
// iOS/Android는 동시 접촉 시 touchstart를 하나로 묶어
// 공통 조상에 발생시킴 → changedTouches를 순회해 모두 처리
// ============================================================
playersContainer.addEventListener('touchstart', (e) => {
    for (const t of e.changedTouches) {
        const el = document.elementFromPoint(t.clientX, t.clientY);
        if (!el) continue;
        const btn = el.closest('.slash-btn');
        if (!btn || btn.dataset.pid === undefined) continue;
        const pid     = parseInt(btn.dataset.pid);
        const idx     = parseInt(btn.dataset.idx);
        const correct = parseInt(btn.dataset.correct);
        const cont    = document.getElementById(`sentence-${pid}`);
        handleSplit(pid, idx, correct, cont);
    }
}, { passive: true });

// Events
levelBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        levelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedLevel = parseInt(btn.dataset.level);
        playPopSound(idx);
    });
});

sameSetBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        sameSetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        useSameSet = btn.dataset.same === 'true';
        playPopSound(idx + 2);
    });
});

playerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        numPlayers = parseInt(btn.dataset.players);
        playStartSound();
        setTimeout(() => startGame(), 200);
    });
});

btnHome.addEventListener('click', () => {
    playPopSound(3);
    showScreen(startScreen);
});

btnRestart.addEventListener('click', () => {
    playPopSound(3);
    showScreen(startScreen);
});

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getPool() {
    if (selectedLevel === 1) return [...sentencesLevel1];
    else if (selectedLevel === 2) return [...sentencesLevel2];
    else if (selectedLevel === 3) return [...sentencesLevel3];
    else return [...allSentences];
}

function initPlayerQueues() {
    playerSentenceQueues = {};
    
    if (useSameSet) {
        // 공유 큐: 모든 플레이어가 같은 순서로 같은 문제를 풂
        sharedSentenceQueue = shuffleArray(getPool());
    }

    for (let i = 1; i <= numPlayers; i++) {
        if (useSameSet) {
            // 각 플레이어에게 공유큐의 복사본을 줌 (같은 순서, 같은 문제)
            playerSentenceQueues[i] = [...sharedSentenceQueue];
        } else {
            // 각 플레이어마다 독립적으로 섞음
            playerSentenceQueues[i] = shuffleArray(getPool());
        }
    }
}

function startGame() {
    levelDisplay.textContent = selectedLevel === 4 ? '4단계 (종합)' : `${selectedLevel}단계`;
    showScreen(gameScreen);
    
    players = [];
    currentRank = 1;
    playerPenalty = {};
    playersContainer.innerHTML = '';
    
    initPlayerQueues();
    
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
        setupSliderCustomTouch(i); // 슬라이더 커스텀 터치 등록
    }
}

function getNextSentence(pid) {
    if (playerSentenceQueues[pid].length === 0) {
        playerSentenceQueues[pid] = useSameSet
            ? shuffleArray(getPool())
            : shuffleArray(getPool());
    }
    
    const obj = playerSentenceQueues[pid].pop();
    const sWords = obj.s.split(' ');
    const pWords = obj.p.split(' ');
    
    return {
        words: [...sWords, ...pWords],
        correctIndex: sWords.length - 1
    };
}

function loadSentence(pid) {
    const player = players.find(p => p.id === pid);
    if (player.finished) return;
    
    const container = document.getElementById(`sentence-${pid}`);
    container.innerHTML = '';
    
    const data = getNextSentence(pid);
    
    for (let i = 0; i < data.words.length; i++) {
        const group = document.createElement('div');
        group.className = 'word-group';
        
        const wSpan = document.createElement('span');
        wSpan.className = 'word';
        wSpan.textContent = data.words[i];
        group.appendChild(wSpan);
        
        if (i < data.words.length - 1) {
            const btn = document.createElement('div');
            btn.className = 'slash-btn';
            btn.innerHTML = '✂️';
            // 터치 정보를 data 속성으로 보관 (위임 핸들러가 사용)
            btn.dataset.pid     = pid;
            btn.dataset.idx     = i;
            btn.dataset.correct = data.correctIndex;
            // 데스크톱/마우스 지원용
            btn.onclick = () => handleSplit(pid, i, data.correctIndex, container);
            group.appendChild(btn);
        }
        
        container.appendChild(group);
    }
}

function handleSplit(pid, clickedIndex, correctIndex, container) {
    const player = players.find(p => p.id === pid);
    if (player.finished) return;
    if (playerPenalty[pid]) return;
    
    const isCorrect = clickedIndex === correctIndex;
    showFeedback(pid, isCorrect);
    
    if (isCorrect) {
        playCorrectSound();
        player.score++;
        document.getElementById(`score-${pid}`).textContent = `${player.score} / ${TARGET_SCORE}`;
        
        if (player.score >= TARGET_SCORE) {
            player.finished = true;
            player.rank = currentRank++;
            playFinishSound();
            
            // 완주 메시지 표시
            const rankEmoji = ['🥇', '🥈', '🥉', '🏅'];
            const emoji = rankEmoji[player.rank - 1] || '🎉';
            container.innerHTML = `<div style="font-size: 3rem; color: var(--primary); font-weight: bold; text-align:center;">${emoji}<br><br>${player.rank}등 완주!<br><br>🎉</div>`;
            checkGameEnd();
        } else {
            setTimeout(() => {
                loadSentence(pid);
            }, 300);
        }
    } else {
        playWrongSound();
        applyPenalty(pid);
    }
}

function applyPenalty(pid) {
    playerPenalty[pid] = true;
    const panel = document.getElementById(`player-${pid}`);
    
    panel.classList.add('shake');
    setTimeout(() => panel.classList.remove('shake'), 400);
    
    const btns = panel.querySelectorAll('.slash-btn');
    btns.forEach(btn => {
        btn.classList.add('disabled');
    });
    
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

// 마지막 사람도 다 풀어야 종료 - 모든 플레이어가 finished여야 결과 화면으로
function checkGameEnd() {
    const allFinished = players.every(p => p.finished);
    if (allFinished) {
        setTimeout(showResult, 1000);
    }
}

function showResult() {
    showScreen(resultScreen);
    
    const sortedPlayers = [...players].sort((a, b) => a.rank - b.rank);
    
    document.getElementById('winner-text').textContent = `🏆 우승: ${sortedPlayers[0].id}P 🏆`;
    
    const rankEmoji = ['🥇', '🥈', '🥉', '🏅', '🎖️', '🎖️'];
    const rankingsHtml = sortedPlayers.map(p => `
        <div class="rank-item">
            <strong>${rankEmoji[p.rank - 1] || ''} ${p.rank}등</strong> : ${p.id}P (점수: ${p.score})
        </div>
    `).join('');
    
    document.getElementById('rankings').innerHTML = rankingsHtml;
}

function adjustHeight(pid) {
    const slider = document.getElementById(`slider-${pid}`);
    const container = document.getElementById(`sentence-${pid}`);
    const fb = document.getElementById(`feedback-${pid}`);
    
    const offset = slider.value;
    container.style.transform = `translateY(${offset}vh)`;
    fb.style.marginTop = `${offset}vh`;
}
