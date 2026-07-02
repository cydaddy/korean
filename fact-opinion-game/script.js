// 3학년 수준 사실과 의견 구분 문제 은행 (총 36문항)
const questionBank = [
    {
        id: 1,
        text: "몸속에 소금이 없다면 사람은 생명을 유지할 수 없어요.",
        type: "fact",
        explanation: "소금은 우리 몸의 수분을 조절하고 신경을 작동하게 하는 등 생명 유지에 꼭 필요해요. 이는 의학적·과학적 실험으로 입증된 참인 '사실'입니다."
    },
    {
        id: 2,
        text: "어떤 물건이 흔하다고 해서 그것을 하찮게 여겨서는 안 돼요.",
        type: "opinion",
        explanation: "물건을 소중히 다루어야 한다는 개인의 가치관과 도덕적 주장을 담은 문장이에요. 사람마다 생각하는 중요도가 다를 수 있으므로 '의견'입니다."
    },
    {
        id: 3,
        text: "우리나라의 가을철에는 나뭇잎이 울긋불긋 단풍으로 변해요.",
        type: "fact",
        explanation: "가을철 기온이 낮아지면서 나뭇잎의 엽록소가 파괴되어 붉거나 노랗게 변하는 현상으로, 누구나 눈으로 관찰 가능한 '사실'입니다."
    },
    {
        id: 4,
        text: "알록달록 단풍이 든 가을 산의 풍경이 사계절 중 제일 아름다워요.",
        type: "opinion",
        explanation: "어떤 사람은 하얀 눈이 덮인 겨울 산이나 푸른 여름 산을 더 아름답다고 느낄 수 있어요. 개인의 미적 기준을 나타내므로 '의견'입니다."
    },
    {
        id: 5,
        text: "세종대왕은 백성들이 쉽게 글을 읽고 쓰도록 한글을 창제하셨어요.",
        type: "fact",
        explanation: "훈민정음 해례본과 조선왕조실록 등 역사적 책과 유물에 명확히 기록되어 전해 내려오는 역사적 '사실'입니다."
    },
    {
        id: 6,
        text: "한글은 전 세계 모든 글자 중에서 배우기가 가장 쉬운 글자에요.",
        type: "opinion",
        explanation: "한글이 과학적이고 훌륭하지만, 외국인이나 처음에 한글을 배우는 아이 등 상황에 따라 어렵게 느껴질 수 있으므로 주관적인 '의견'입니다."
    },
    {
        id: 7,
        text: "지구는 태양의 둘레를 1년에 한 바퀴씩 공전하고 있어요.",
        type: "fact",
        explanation: "천문학적인 정밀 관측과 과학 기구들을 통해 증명되어 의심할 여지가 없는 우주 과학적인 '사실'입니다."
    },
    {
        id: 8,
        text: "지구보다 신비로운 화성에 가서 우주 주택을 짓고 사는 것이 훨씬 흥미진진할 거에요.",
        type: "opinion",
        explanation: "화성 생활에 대한 개인의 호기심과 상상을 나타내며, 사람에 따라 화성에 사는 것이 무섭고 힘들게 생각될 수도 있으므로 '의견'입니다."
    },
    {
        id: 9,
        text: "진돗개는 귀가 쫑긋하고 꼬리가 말려 있는 한국 고유의 개 품종이에요.",
        type: "fact",
        explanation: "진돗개의 신체적 특징과 유전학적 분류는 표준 규격과 연구에 따라 입증된 객관적인 '사실'입니다."
    },
    {
        id: 10,
        text: "귀여운 강아지가 고양이보다 훨씬 사람 말을 잘 알아들어서 키우기 좋아요.",
        type: "opinion",
        explanation: "동물을 키우는 스타일이나 친근감에 대한 개인적인 선호입니다. 고양이를 더 좋아하는 사람도 있으므로 '의견'입니다."
    },
    {
        id: 11,
        text: "순수한 물은 1기압 상태에서 섭씨 100도에 끓기 시작해요.",
        type: "fact",
        explanation: "과학 실험실에서 온도계를 꽂아 끓는점을 측정하면 언제나 똑같이 증명할 수 있는 자연 과학적인 '사실'입니다."
    },
    {
        id: 12,
        text: "추운 날씨에는 시원한 음료수보다 따뜻한 코코아 한 잔을 마시는 게 최고예요.",
        type: "opinion",
        explanation: "사람 취향에 따라 추운 겨울에도 아이스크림이나 차가운 물을 선호할 수 있으므로, 맛과 기분에 대한 개인적 '의견'입니다."
    },
    {
        id: 13,
        text: "조선시대 이순신 장군은 거북선을 앞세워 한산도 대첩에서 크게 이기셨어요.",
        type: "fact",
        explanation: "역사서에 상세히 기록되어 있어 실제 일어났음을 입증할 수 있는 역사적 '사실'입니다."
    },
    {
        id: 14,
        text: "이순신 장군이야말로 우리나라 역사 속 위인들 중 가장 본받을 점이 많은 분이에요.",
        type: "opinion",
        explanation: "존경하는 인물이나 본받고 싶은 가치관은 세종대왕, 김구 등 사람마다 다르게 꼽을 수 있으므로 '의견'입니다."
    },
    {
        id: 15,
        text: "식물은 햇빛과 물, 이산화탄소를 이용해 스스로 양분을 만드는 광합성을 해요.",
        type: "fact",
        explanation: "생물학적 실험을 통해 식물의 생존 원리로 증명된 변하지 않는 자연의 '사실'입니다."
    },
    {
        id: 16,
        text: "집안에 화초를 여러 개 기르는 일은 너무 귀찮고 방이 좁아 보여 별로예요.",
        type: "opinion",
        explanation: "식물을 기르며 힐링하고 인테리어가 예뻐진다고 느끼는 사람도 있습니다. 가드닝에 대한 개인의 주관적인 '의견'입니다."
    },
    {
        id: 17,
        text: "대한민국의 헌법에 따라 공식적으로 지정된 수도는 서울특별시에요.",
        type: "fact",
        explanation: "국가의 법률과 행정 문서에 명시되어 있어 공적으로 확인할 수 있는 법적인 '사실'입니다."
    },
    {
        id: 18,
        text: "서울은 대중교통이 무척 복잡하고 소음이 많아서 살기에 아주 불만족스러운 곳이에요.",
        type: "opinion",
        explanation: "서울의 문화 시설이나 편리한 교통망 덕분에 아주 살기 좋다고 평가하는 사람도 많으므로 주관적인 '의견'입니다."
    },
    {
        id: 19,
        text: "태극기는 흰색 바탕에 빨강과 파랑의 태극 문양, 그리고 모서리에 4괘가 있어요.",
        type: "fact",
        explanation: "국기의 규격을 눈으로 관찰하면 누구나 똑같이 동의하는 시각적인 '사실'입니다."
    },
    {
        id: 20,
        text: "우리나라 태극기가 다른 나라의 국기들과 비교했을 때 디자인이 제일 세련되었어요.",
        type: "opinion",
        explanation: "미적인 아름다움이나 디자인에 대한 감상은 개인의 주관적이고 애국적인 감정이 섞인 '의견'입니다."
    },
    {
        id: 21,
        text: "바다에 사는 고래는 아가미가 아닌 허파로 숨을 쉬는 포유류 동물이에요.",
        type: "fact",
        explanation: "고래의 호흡 방식과 신체 내부 구조를 과학적으로 확인해 분류한 생물학적 '사실'입니다."
    },
    {
        id: 22,
        text: "아쿠아리움에서 커다란 고래상어를 관람하는 것이 돌고래 쇼를 보는 것보다 백 배 재밌어요.",
        type: "opinion",
        explanation: "어떤 쇼가 더 즐거운지는 관객의 흥미와 관심사에 따라 매번 다르게 결정되므로 '의견'입니다."
    },
    {
        id: 23,
        text: "공공 도서관에서는 책을 읽는 사람들을 방해하지 않기 위해 조용히 이용해야 해요.",
        type: "fact",
        explanation: "도서관법 및 이용 규칙에 지정된 공공장소에서의 행동 수칙을 담은 객관적인 사회적 '사실'입니다."
    },
    {
        id: 24,
        text: "도서관에 비치된 재미있는 줄글 책들은 만화책보다 훨씬 유익해요.",
        type: "opinion",
        explanation: "만화책을 통해서도 풍부한 상식이나 어휘를 배울 수 있다고 생각하는 사람도 있어, 책의 유익함에 대한 '의견'입니다."
    },
    {
        id: 25,
        text: "독도는 경상북도 울릉군 울릉읍 독도리에 주소를 두고 있는 대한민국 영토예요.",
        type: "fact",
        explanation: "행정 구역상 주소와 지도 정보, 역사적 공문서에 한국의 영토로 명시된 지리적 '사실'입니다."
    },
    {
        id: 26,
        text: "우리는 아름답고 가치 있는 땅인 독도를 사랑하고 지키기 위해 편지를 써서 널리 알려야 해요.",
        type: "opinion",
        explanation: "독도를 사랑하고 지키기 위해 '편지를 쓰자'는 실천적인 행동 방향과 주장을 나타낸 '의견'입니다."
    },
    {
        id: 27,
        text: "초등학교는 법에 정해진 의무교육 과정으로 보통 6년 동안 다녀요.",
        type: "fact",
        explanation: "대한민국의 초·중등교육법에 지정된 의무 교육 제도와 학제를 기술한 법률적 '사실'입니다."
    },
    {
        id: 28,
        text: "초등학교 3학년 때 배우는 국어와 수학 과목이 학교 공부 중에서 제일 재밌어요.",
        type: "opinion",
        explanation: "체육을 제일 좋아하거나 과학 실험이 더 재미있다고 느끼는 학생도 많기 때문에 주관적인 배움의 흥미를 담은 '의견'입니다."
    },
    {
        id: 29,
        text: "해바라기는 해가 뜨는 동쪽에서 서쪽으로 꽃 봉오리가 움직이는 성질이 있어요.",
        type: "fact",
        explanation: "성장 호르몬 작용에 의해 어린 해바라기가 빛을 향해 굽는 '굴광성' 현상을 관찰할 수 있는 과학적 '사실'입니다."
    },
    {
        id: 30,
        text: "노랗게 만개한 해바라기 밭에서 찍은 노란 옷 사진은 최고의 추억이 될 거예요.",
        type: "opinion",
        explanation: "사진의 분위기나 옷 색깔 매칭이 예쁜지에 대한 개인의 심미적인 취향이자 '의견'입니다."
    },
    {
        id: 31,
        text: "피아노는 총 88개의 흰색과 검은색 건반으로 이루어진 건반악기에요.",
        type: "fact",
        explanation: "피아노의 구조와 건반 개수는 물리적으로 정해져 있고 세어볼 수 있는 객관적인 '사실'입니다."
    },
    {
        id: 32,
        text: "피아노 연주 소리를 들으면 마음이 편안해지고 세상에서 가장 맑은 느낌을 받아요.",
        type: "opinion",
        explanation: "어떤 사람은 바이올린이나 드럼 소리가 더 편안하게 느껴질 수 있으며, 음악적 자극에 대한 감상(의견)입니다."
    },
    {
        id: 33,
        text: "사과는 수분이 많고 비타민 C가 들어 있어 건강에 도움이 되는 과일이에요.",
        type: "fact",
        explanation: "영양학적인 연구와 성분 분석을 통해 사과 속에 어떤 영양소가 들었는지 증명된 영양학적 '사실'입니다."
    },
    {
        id: 34,
        text: "아침 식사 때 향긋한 사과를 한 입 베어 무는 것이 과일 중에 가장 맛이 깔끔해요.",
        type: "opinion",
        explanation: "아침에 바나나나 오렌지를 먹었을 때 더 만족스러워하는 사람도 있으므로 입맛에 따른 '의견'입니다."
    },
    {
        id: 35,
        text: "잠자리는 머리, 가슴, 배의 3부분과 6개의 다리, 4개의 날개를 가진 곤충이에요.",
        type: "fact",
        explanation: "생물학 교과서와 생물 백과사전에 공인된 곤충의 구조를 기록한 동물학적 '사실'입니다."
    },
    {
        id: 36,
        text: "하늘을 쌩쌩 날아다니는 잠자리는 눈이 크고 생김새가 참 멋있게 생겼어요.",
        type: "opinion",
        explanation: "징그럽다거나 무섭다고 여기는 3학년 친구들도 있으므로, 외모를 보고 멋지다 판단한 '의견'입니다."
    }
];

// 뱃지 데이터베이스
const BADGE_DB = {
    first_win: { id: "first_win", name: "새내기 탐정", icon: "🔍", desc: "첫 번째 탐정 훈련을 무사히 마쳤어요!", req: "훈련 1회 완료" },
    combo_3: { id: "combo_3", name: "콤보 탐정", icon: "⚡", desc: "3문제 연속으로 정확하게 알아맞혔어요!", req: "3연속 정답" },
    combo_7: { id: "combo_7", name: "추리 마스터", icon: "🔥", desc: "7문제 연속으로 단서를 해독했어요!", req: "7연속 정답" },
    full_hearts: { id: "full_hearts", name: "하트 수호자", icon: "💖", desc: "단 한 번의 실수도 없이 하트 5개를 지켰어요!", req: "하트 5개 만점 클리어" },
    perfect: { id: "perfect", name: "완벽한 추리", icon: "👑", desc: "모든 단서(10문제)를 다 맞혀 100점을 획득했어요!", req: "100점 획득" },
    play_3: { id: "play_3", name: "열혈 탐정", icon: "📚", desc: "도전정신이 가득! 훈련을 총 3회 마쳤어요!", req: "훈련 3회 완수" }
};

// 게임 상태 변수
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let hearts = 5;
let combo = 0;
let maxCombo = 0;
let roundCorrectCount = 0;
let isAnswered = false;

// Local Storage에서 저장된 유저 데이터 불러오기
let playCount = parseInt(localStorage.getItem("fact_opinion_play_count")) || 0;
let unlockedBadges = JSON.parse(localStorage.getItem("fact_opinion_unlocked_badges")) || [];

// DOM 요소들
const mainMenu = document.getElementById("main-menu");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const feedbackDialog = document.getElementById("feedback-dialog");
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackTitle = document.getElementById("feedback-title");
const correctAnswerName = document.getElementById("correct-answer-name");
const feedbackExplanation = document.getElementById("feedback-explanation");
const currentQNum = document.getElementById("current-q-num");
const progressBar = document.getElementById("progress-bar");
const heartsDisplay = document.getElementById("hearts-display");
const clueText = document.getElementById("clue-text");
const comboDisplayArea = document.getElementById("combo-display-area");
const badgeShelfDisplay = document.getElementById("badge-shelf-display");
const resultScore = document.getElementById("result-score");
const resultCombo = document.getElementById("result-combo");
const resultMedalIcon = document.getElementById("result-medal-icon");
const resultTitle = document.getElementById("result-title");
const roundBadgesList = document.getElementById("round-badges-list");
const roundBadgesContainer = document.getElementById("round-badges-container");

// 초기 페이지 로드 시 뱃지 정렬
window.addEventListener("DOMContentLoaded", () => {
    loadBadges();
});

// 메인 화면 뱃지 렌더링
function loadBadges() {
    badgeShelfDisplay.innerHTML = "";
    Object.keys(BADGE_DB).forEach(key => {
        const badge = BADGE_DB[key];
        const isUnlocked = unlockedBadges.includes(key);
        
        const badgeEl = document.createElement("div");
        badgeEl.className = `badge-item ${isUnlocked ? 'unlocked' : 'locked'}`;
        badgeEl.setAttribute("data-tooltip", `${badge.name}: ${badge.desc} (${badge.req})`);
        
        badgeEl.innerHTML = `
            <span class="badge-icon">${isUnlocked ? badge.icon : "🔒"}</span>
            <span class="badge-name">${badge.name}</span>
        `;
        badgeShelfDisplay.appendChild(badgeEl);
    });
}

// 게임 시작
function startGame() {
    // 게임 변수 초기화
    currentQuestionIndex = 0;
    score = 0;
    hearts = 5;
    combo = 0;
    maxCombo = 0;
    roundCorrectCount = 0;
    isAnswered = false;
    comboDisplayArea.innerHTML = "";

    // 문제 은행에서 무작위로 10개 문제 선택
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, 10);

    // 화면 전환
    mainMenu.classList.add("hidden");
    mainMenu.classList.remove("active");
    resultScreen.classList.add("hidden");
    resultScreen.classList.remove("active");
    quizScreen.classList.remove("hidden");
    quizScreen.classList.add("active");

    updateHeartsDisplay();
    loadQuestion();
}

// 문제 로드
function loadQuestion() {
    isAnswered = false;
    const currentQ = currentQuestions[currentQuestionIndex];
    
    // UI 업데이트
    currentQNum.textContent = currentQuestionIndex + 1;
    progressBar.style.width = `${((currentQuestionIndex + 1) / 10) * 100}%`;
    clueText.textContent = currentQ.text;
    
    // 선택 버튼 활성화 (혹시 모를 더블클릭 방지 해제)
    document.querySelectorAll(".btn-choice").forEach(btn => {
        btn.removeAttribute("disabled");
    });
}

// 하트(생명) 표시 업데이트
function updateHeartsDisplay() {
    let heartsHtml = "";
    for (let i = 0; i < 5; i++) {
        if (i < hearts) {
            heartsHtml += "❤️";
        } else {
            heartsHtml += "🖤";
        }
    }
    heartsDisplay.innerHTML = heartsHtml;
}

// 답안 제출 버튼 클릭
function submitAnswer(userChoice) {
    if (isAnswered) return;
    isAnswered = true;

    // 더블클릭 방지를 위한 버튼 비활성화
    document.querySelectorAll(".btn-choice").forEach(btn => {
        btn.setAttribute("disabled", "true");
    });

    const currentQ = currentQuestions[currentQuestionIndex];
    const isCorrect = currentQ.type === userChoice;

    if (isCorrect) {
        // 정답
        score += 10;
        roundCorrectCount++;
        combo++;
        maxCombo = Math.max(maxCombo, combo);
        
        // 정답 효과음 대신 화면 이펙트
        createParticles();
        showComboEffect();

        // 다이얼로그 내용 설정
        feedbackIcon.textContent = "🎉";
        feedbackTitle.textContent = "정답이에요! 참 잘했어요!";
        feedbackTitle.style.color = "var(--color-success)";
        
        correctAnswerName.textContent = currentQ.type === "fact" ? "사실 🔍" : "의견 💭";
        correctAnswerName.className = `highlight-answer ${currentQ.type}`;
        
        feedbackExplanation.textContent = currentQ.explanation;
    } else {
        // 오답
        hearts--;
        combo = 0;
        
        // 하트가 깎였을 때 진동 애니메이션 부여
        heartsDisplay.classList.remove("shake");
        void heartsDisplay.offsetWidth; // 리플로우 유도
        heartsDisplay.classList.add("shake");
        
        updateHeartsDisplay();

        feedbackIcon.textContent = "😢";
        feedbackTitle.textContent = "아쉽게도 정답이 아니에요!";
        feedbackTitle.style.color = "var(--color-primary)";
        
        correctAnswerName.textContent = currentQ.type === "fact" ? "사실 🔍" : "의견 💭";
        correctAnswerName.className = `highlight-answer ${currentQ.type}`;
        
        feedbackExplanation.textContent = currentQ.explanation;
    }

    // 다음 버튼 텍스트 변경
    const nextBtn = document.getElementById("btn-next-action");
    if (currentQuestionIndex === 9 || hearts === 0) {
        nextBtn.textContent = "결과 보고서 보기 ➔";
    } else {
        nextBtn.textContent = "다음 단서로 ➔";
    }

    // 다이얼로그 표시
    feedbackDialog.showModal();
}

// 콤보 팝업 이펙트
function showComboEffect() {
    if (combo >= 2) {
        comboDisplayArea.innerHTML = `<div class="combo-badge">🔥 ${combo}연속 정답!</div>`;
    } else {
        comboDisplayArea.innerHTML = "";
    }
}

// 파티클(꽃가루/별) 폭죽 생성
function createParticles() {
    const container = document.getElementById("particle-container");
    const emojis = ["🌟", "✨", "🎉", "🍬", "🎈", "🔍", "💭"];
    
    for (let i = 0; i < 24; i++) {
        const particle = document.createElement("span");
        particle.className = "particle";
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // 무작위 퍼짐 각도 및 거리 연산
        const angle = Math.random() * Math.PI * 2;
        const velocity = 80 + Math.random() * 120;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity - 100; // 살짝 위로 날아가게
        const rotate = Math.random() * 360;
        
        particle.style.setProperty("--x", `${x}px`);
        particle.style.setProperty("--y", `${y}px`);
        particle.style.setProperty("--r", `${rotate}deg`);
        
        // 화면 중앙 부근에서 발사되도록 위치 설정
        particle.style.left = `calc(50% + ${Math.random() * 60 - 30}px)`;
        particle.style.top = `40%`;
        
        container.appendChild(particle);
        
        // 애니메이션 끝나면 삭제
        setTimeout(() => {
            particle.remove();
        }, 1200);
    }
}

// 다이얼로그 닫고 다음 스텝으로
function closeFeedbackAndNext() {
    feedbackDialog.close();
    
    // 게임 오버 혹은 최종 문제 클리어 시 결과창으로
    if (hearts === 0 || currentQuestionIndex === 9) {
        endGame();
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// 게임 결과 처리
function endGame() {
    playCount++;
    localStorage.setItem("fact_opinion_play_count", playCount);

    // 이번 라운드에 새롭게 해금된 뱃지 판독
    const newlyUnlockedThisRound = [];

    // 1. 새내기 탐정 (첫 판 완료)
    if (!unlockedBadges.includes("first_win") && playCount >= 1) {
        newlyUnlockedThisRound.push("first_win");
    }
    // 2. 콤보 탐정 (3연속 정답)
    if (!unlockedBadges.includes("combo_3") && maxCombo >= 3) {
        newlyUnlockedThisRound.push("combo_3");
    }
    // 3. 추리 마스터 (7연속 정답)
    if (!unlockedBadges.includes("combo_7") && maxCombo >= 7) {
        newlyUnlockedThisRound.push("combo_7");
    }
    // 4. 하트 수호자 (하트 5개 만점 클리어 - 끝까지 다 가고 하트가 5개인 경우)
    if (!unlockedBadges.includes("full_hearts") && hearts === 5 && currentQuestionIndex === 9) {
        newlyUnlockedThisRound.push("full_hearts");
    }
    // 5. 완벽한 추리 (10문항 모두 정답)
    if (!unlockedBadges.includes("perfect") && roundCorrectCount === 10) {
        newlyUnlockedThisRound.push("perfect");
    }
    // 6. 열혈 탐정 (총 3판 완료)
    if (!unlockedBadges.includes("play_3") && playCount >= 3) {
        newlyUnlockedThisRound.push("play_3");
    }

    // 전역 잠금해제 뱃지 상태 업데이트
    if (newlyUnlockedThisRound.length > 0) {
        unlockedBadges = [...unlockedBadges, ...newlyUnlockedThisRound];
        localStorage.setItem("fact_opinion_unlocked_badges", JSON.stringify(unlockedBadges));
    }

    // 결과 화면 렌더링
    resultScore.textContent = roundCorrectCount;
    resultCombo.textContent = maxCombo;

    // 메달 디자인 업데이트
    if (roundCorrectCount === 10) {
        resultMedalIcon.textContent = "👑";
        resultTitle.textContent = "명탐정 훈련 완료! 완벽해요!";
    } else if (roundCorrectCount >= 7) {
        resultMedalIcon.textContent = "🎖️";
        resultTitle.textContent = "훌륭해요! 이제 어엿한 탐정이네요!";
    } else if (roundCorrectCount >= 4) {
        resultMedalIcon.textContent = "🔍";
        resultTitle.textContent = "잘했어요! 조금만 더 훈련해 봐요!";
    } else {
        resultMedalIcon.textContent = "🌱";
        resultTitle.textContent = "차근차근 연습하면 명탐정이 될 수 있어요!";
    }

    // 이번 판에서 획득하거나 기존에 획득한 뱃지 띄워주기
    roundBadgesList.innerHTML = "";
    if (newlyUnlockedThisRound.length > 0) {
        roundBadgesContainer.classList.remove("hidden");
        newlyUnlockedThisRound.forEach(key => {
            const badge = BADGE_DB[key];
            const badgeItem = document.createElement("div");
            badgeItem.className = "round-badge-item";
            badgeItem.innerHTML = `<span>${badge.icon}</span> <strong>${badge.name}</strong> 획득!`;
            roundBadgesList.appendChild(badgeItem);
        });
    } else {
        roundBadgesContainer.classList.add("hidden");
    }

    // 화면 전환
    quizScreen.classList.add("hidden");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("hidden");
    resultScreen.classList.add("active");
}

// 처음 홈 화면으로 이동
function showMainMenu() {
    loadBadges(); // 메인메뉴 뱃지 상태 리프레시
    resultScreen.classList.add("hidden");
    resultScreen.classList.remove("active");
    mainMenu.classList.remove("hidden");
    mainMenu.classList.add("active");
}

// 중간 탈출 처리
function goHome() {
    if (confirm("정말 처음 화면으로 돌아갈까요? 진행 중인 탐정 훈련이 취소돼요!")) {
        quizScreen.classList.add("hidden");
        quizScreen.classList.remove("active");
        mainMenu.classList.remove("hidden");
        mainMenu.classList.add("active");
        loadBadges();
    }
}
