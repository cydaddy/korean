// 퀴즈 문제 데이터베이스 (초등학교 3학년 국어 성취 기준에 맞춘 10문항)
const questions = [
    {
        id: 1,
        category: "reader",
        categoryName: "읽는 사람은 누구일까? (독자)",
        situation: "교장 선생님께 우리 반 급식에 바라는 점을 건의하는 편지를 써요.",
        text: "교장 선생님, 안녕? 나 3학년 민수야! 내일 급식에 맛있는 소시지 반찬 꼭 준비해 줘. 다음 주에는 짜장면이랑 피자도 먹고 싶어! 그럼 안녕~",
        answer: 1,
        explanation: "교장 선생님께 쓰는 편지인데 친구에게 말하듯이 '안녕?', '~해 줘'와 같은 편안한 말투를 사용했어요. 읽는 사람인 교장 선생님께 알맞은 높임말과 조심스러운 표현을 써야 해요."
    },
    {
        id: 2,
        category: "topic",
        categoryName: "무엇에 대해 쓸까? (주제)",
        situation: "우리 동네의 아름다운 공원을 소개하는 글을 써요.",
        text: "우리 동네 솔바람 공원은 나무가 참 많아요. 그런데 어제 나는 집에서 누나랑 보드게임을 했어요. 보드게임은 정말 재미있어서 밤늦게까지 하다가 잠이 들었어요.",
        answer: 3,
        explanation: "동네 공원을 소개하는 글인데 공원 이야기는 아주 조금만 쓰고, 갑자기 집에서 한 보드게임 이야기만 가득 썼어요. 무엇에 대해 쓸지(주제)를 더 깊이 생각하고 글을 써야 해요."
    },
    {
        id: 3,
        category: "length",
        categoryName: "얼마만큼 쓸까? (분량)",
        situation: "즐거웠던 주말 이야기를 일기장에 자세히 써요.",
        text: "어제 가족들과 동물원에 다녀왔다. 참 좋았다.",
        answer: 2,
        explanation: "즐거웠던 주말 일을 일기장에 자세히 쓰기로 했는데 겨우 한 줄만 적었어요. 동물원에서 있었던 일과 느낀 점을 충분히 생각하며 '얼마만큼 쓸지(분량)'를 결정해 보세요."
    },
    {
        id: 4,
        category: "goal",
        categoryName: "글쓰기의 목표는 무엇인가? (목적)",
        situation: "다친 다리로 병원에 입원한 짝꿍을 위로하는 편지를 써요.",
        text: "민우야, 다리가 다쳐서 입원했다니 많이 아프겠다. 그런데 내일 수학 시험 범위가 어디까지인지 아니? 그리고 네가 빌려 간 내 필통은 언제 돌려줄 거야?",
        answer: 4,
        explanation: "아픈 친구를 위로하기 위해 쓰는 편지인데, 친구를 걱정하는 말 대신 숙제나 물건을 돌려달라는 내용이 대부분이에요. 글을 쓰는 원래 목표(목적)를 잘 기억해야 해요."
    },
    {
        id: 5,
        category: "reader",
        categoryName: "읽는 사람은 누구일까? (독자)",
        situation: "유치원에 다니는 동생들에게 불조심을 강조하는 포스터 문구를 써요.",
        text: "화재는 가연성 물질의 급격한 연소 반응이므로, 유아기 아동들은 주변의 발화원을 철저히 격리하고 신속하게 소방 시설을 가동해야 합니다.",
        answer: 1,
        explanation: "유치원 동생들이 읽을 글인데 '가연성 물질', '연소 반응', '발화원 격리'와 같은 어렵고 복잡한 한자어들이 가득해요. 읽는 사람인 어린 동생들의 눈높이에 맞게 쉬운 말로 써야 해요."
    },
    {
        id: 6,
        category: "length",
        categoryName: "얼마만큼 쓸까? (분량)",
        situation: "학급 신문의 '나를 소개해요' 코너에 세 줄 내로 소개 글을 써요.",
        text: "안녕하세요! 저는 3학년 1반 이지민입니다. 저는 2017년 봄에 아주 건강하게 태어났어요. 첫 돌 잔치 때는 실을 잡았고요, 세 살 때는 유치원에서 블록 놀이를 좋아했어요. 네 살 때는...",
        answer: 2,
        explanation: "학급 신문에서 정해준 분량은 '세 줄 내'인데, 태어났을 때부터 아주 길고 상세하게 자기소개를 적었어요. 지면의 크기에 맞춰 '얼마만큼 쓸지' 분량을 지켜야 해요."
    },
    {
        id: 7,
        category: "goal",
        categoryName: "글쓰기의 목표는 무엇인가? (목적)",
        situation: "실수로 친구의 소중한 연필을 부러뜨려 미안한 마음을 전하는 편지를 써요.",
        text: "지후야, 아까 실수로 네 연필을 부러뜨려서 참 미안해. 그런데 그 연필은 조금 낡아 보이더라. 사실 우리 아빠가 어제 나한테 엄청 비싸고 멋진 변신 필통이랑 금테 연필을 사주셨거든!",
        answer: 4,
        explanation: "미안한 마음을 전하고 사과하려는 목표로 편지를 썼지만, 끝부분에 자신의 학용품을 자랑하면서 사과의 분위기가 깨졌어요. 글을 쓰는 목적을 잊지 마세요."
    },
    {
        id: 8,
        category: "topic",
        categoryName: "무엇에 대해 쓸까? (주제)",
        situation: "우리 반 친구들에게 '내가 가장 좋아하는 동물'을 설명하는 글을 써요.",
        text: "내가 가장 좋아하는 동물은 강아지야. 강아지는 꼬리를 흔들 때 참 귀여워. 참, 우리 엄마는 요리를 아주 잘하셔. 오늘 저녁에 엄마가 맛있는 떡볶이를 만들어 주시기로 했어!",
        answer: 3,
        explanation: "좋아하는 동물을 설명하는 글인데 갑자기 엄마 요리 솜씨와 오늘 먹을 떡볶이 이야기로 흘러갔어요. 처음 정한 주제('내가 좋아하는 동물')를 벗어나지 않도록 주의해야 해요."
    },
    {
        id: 9,
        category: "reader",
        categoryName: "읽는 사람은 누구일까? (독자)",
        situation: "누워 있는 갓난아기 동생에게 편지를 써요.",
        text: "귀여운 동생아! 다음 주 토요일에 나랑 동네 운동장에서 축구 시합을 하자. 오프사이드 규칙은 네가 잘 모를 테니까 내가 차근차근 설명해 줄게. 꼭 나와서 골키퍼를 맡아 줘!",
        answer: 1,
        explanation: "아직 걷지도 못하고 글도 못 읽는 갓난아기 동생에게 다음 주에 축구 시합을 하자고 제안했어요. 읽는 사람의 나이와 상태를 전혀 고려하지 않은 글이에요."
    },
    {
        id: 10,
        category: "goal",
        categoryName: "글쓰기의 목표는 무엇인가? (목적)",
        situation: "새로 산 동화책을 친구들에게 추천하는 글을 써요.",
        text: "이번에 읽은 '피터팬' 책은 정말 재밌어. 그런데 얘들아, 오늘 날씨가 참 덥지 않니? 이따가 학교 끝나고 분식집 앞에서 슬러시 같이 사 먹으러 갈 사람 구한다!",
        answer: 4,
        explanation: "동화책을 친구들에게 널리 알리고 추천하려는 목표로 썼는데, 책에 대한 설명은 한 줄뿐이고 친구들과 슬러시를 사 먹자는 이야기만 적었어요. 글을 쓰는 목적을 달성하지 못했어요."
    }
];

// 보기 옵션 리스트
const options = [
    { id: 1, text: "👥 읽는 사람은 누구일까?", label: "읽는 사람" },
    { id: 2, text: "📏 얼마만큼 쓸까?", label: "분량" },
    { id: 3, text: "✏️ 무엇에 대해 쓸까?", label: "주제" },
    { id: 4, text: "🎯 글쓰기의 목표는 무엇인가?", label: "목표" }
];

// 게임 상태 변수
let currentQuestionIndex = 0;
let score = 0;
let hearts = 5;
let wrongAnswersCount = {
    reader: 0,
    length: 0,
    topic: 0,
    goal: 0
};
let isAnswered = false;

// DOM 요소
const mainMenu = document.getElementById("main-menu");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const feedbackDialog = document.getElementById("feedback-dialog");

// 게임 시작
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    hearts = 5;
    wrongAnswersCount = {
        reader: 0,
        length: 0,
        topic: 0,
        goal: 0
    };
    isAnswered = false;

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

// 홈으로 이동
function goHome() {
    if (confirm("정말 처음 화면으로 돌아갈까요? 진행 중인 모험이 사라져요!")) {
        quizScreen.classList.add("hidden");
        quizScreen.classList.remove("active");
        resultScreen.classList.add("hidden");
        resultScreen.classList.remove("active");
        mainMenu.classList.remove("hidden");
        mainMenu.classList.add("active");
    }
}

// 하트 표시 업데이트
function updateHeartsDisplay() {
    const heartsDisplay = document.getElementById("hearts-display");
    let heartsHtml = "";
    for (let i = 0; i < 5; i++) {
        if (i < hearts) {
            heartsHtml += '<span class="heart active">❤️</span>';
        } else {
            heartsHtml += '<span class="heart spent">🤍</span>';
        }
    }
    heartsDisplay.innerHTML = heartsHtml;
}

// 문제 로드
function loadQuestion() {
    isAnswered = false;
    const currentQuestion = questions[currentQuestionIndex];

    // 문제 번호 & 프로그레스 바
    document.getElementById("current-q-num").textContent = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progressPercent}%`;

    // 문제 본문 텍스트
    document.getElementById("writing-situation").textContent = `📍 글쓰기 상황: ${currentQuestion.situation}`;
    document.getElementById("writing-text").textContent = currentQuestion.text;

    // 보기 카드 렌더링
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    options.forEach(option => {
        const choiceBtn = document.createElement("button");
        choiceBtn.className = "choice-card";
        choiceBtn.innerHTML = `
            <div class="choice-num">${option.id}</div>
            <div class="choice-text">${option.text}</div>
        `;
        choiceBtn.onclick = () => selectChoice(option.id, choiceBtn);
        choicesContainer.appendChild(choiceBtn);
    });
}

// 보기 선택 처리
function selectChoice(selectedId, selectedElement) {
    if (isAnswered) return;
    isAnswered = true;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = (selectedId === currentQuestion.answer);

    // 모든 보기 카드 비활성화
    const choiceCards = document.querySelectorAll(".choice-card");
    choiceCards.forEach(card => card.classList.add("disabled"));

    if (isCorrect) {
        score++;
        selectedElement.classList.add("correct");
        showFeedback(true, currentQuestion);
    } else {
        hearts--;
        wrongAnswersCount[currentQuestion.category]++;
        selectedElement.classList.add("incorrect");
        
        // 정답 카드도 같이 보여줌
        choiceCards.forEach(card => {
            const numEl = card.querySelector(".choice-num");
            if (numEl && parseInt(numEl.textContent) === currentQuestion.answer) {
                card.classList.add("correct-reveal");
            }
        });

        updateHeartsDisplay();
        showFeedback(false, currentQuestion);
    }
}

// 피드백 팝업창 띄우기
function showFeedback(isCorrect, question) {
    const iconEl = document.getElementById("feedback-icon");
    const titleEl = document.getElementById("feedback-title");
    const answerNameEl = document.getElementById("correct-answer-name");
    const explanationEl = document.getElementById("feedback-explanation");
    const nextBtnEl = document.getElementById("btn-next-action");

    // 다이얼로그 클래스 설정
    feedbackDialog.className = isCorrect ? "correct-modal" : "incorrect-modal";

    if (isCorrect) {
        iconEl.textContent = "🎉";
        titleEl.textContent = "정답이에요! 대단해요!";
    } else {
        iconEl.textContent = "💡";
        titleEl.textContent = "아쉽지만 괜찮아요! 다시 배워봐요!";
    }

    const correctOption = options.find(opt => opt.id === question.answer);
    answerNameEl.textContent = correctOption.text;
    explanationEl.textContent = question.explanation;

    // 마지막 문제일 경우 버튼 텍스트 변경
    if (currentQuestionIndex === questions.length - 1) {
        nextBtnEl.textContent = "결과 보러 가기 🏆";
    } else if (hearts <= 0) {
        nextBtnEl.textContent = "결과 보러 가기 (하트 소진) 🏆";
    } else {
        nextBtnEl.textContent = "다음 문제로 ➔";
    }

    // 모달 노출
    feedbackDialog.showModal();
}

// 피드백 닫고 다음 단계로 진행
function closeFeedbackAndNext() {
    feedbackDialog.close();

    // 하트가 없거나 마지막 문제이면 게임 종료 화면으로
    if (hearts <= 0 || currentQuestionIndex === questions.length - 1) {
        showResults();
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// 결과 화면 출력
function showResults() {
    quizScreen.classList.add("hidden");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("hidden");
    resultScreen.classList.add("active");

    // 점수 표시
    document.getElementById("result-correct-count").textContent = score;
    
    // 남은 하트 표시
    const resultHeartsEl = document.getElementById("result-hearts");
    let heartsHtml = "";
    for (let i = 0; i < 5; i++) {
        if (i < hearts) {
            heartsHtml += "❤️";
        } else {
            heartsHtml += "🤍";
        }
    }
    resultHeartsEl.textContent = heartsHtml;

    // 피드백 분석 리포트 생성
    const reportContainer = document.getElementById("analysis-report");
    reportContainer.innerHTML = "";

    // 많이 틀린 분야 찾기
    const categories = [
        { key: "reader", name: "👥 읽는 사람 생각하기", scoreName: "읽는 사람" },
        { key: "length", name: "📏 얼마만큼 쓸지 정하기 (분량)", scoreName: "글의 분량" },
        { key: "topic", name: "✏️ 무엇에 대해 쓸지 정하기 (주제)", scoreName: "글의 주제" },
        { key: "goal", name: "🎯 글쓰기의 목표 생각하기 (목적)", scoreName: "글의 목적" }
    ];

    // 강점과 보완점 나누기
    let strengths = [];
    let weaknesses = [];

    categories.forEach(cat => {
        const wrongCount = wrongAnswersCount[cat.key];
        if (wrongCount === 0) {
            strengths.push(cat);
        } else {
            weaknesses.push({ ...cat, count: wrongCount });
        }
    });

    // 리포트 HTML 조립
    let reportHtml = "";

    if (strengths.length > 0) {
        reportHtml += `
            <div class="report-box strength-box">
                <h4>🌟 나의 훌륭한 글쓰기 생각 강점!</h4>
                <ul>
        `;
        strengths.forEach(str => {
            let desc = "";
            if (str.key === "reader") desc = "글을 읽을 상대방의 상황과 마음을 매우 잘 헤아려요!";
            if (str.key === "length") desc = "상황에 어울리는 적당한 크기와 길이로 글을 쓰는 감각이 뛰어나요!";
            if (str.key === "topic") desc = "옆길로 새지 않고 쓰고 싶은 핵심 내용을 올바르게 짚어내요!";
            if (str.key === "goal") desc = "이 글을 왜 쓰는지 목표를 정확히 파악하고 글을 구성할 줄 알아요!";

            reportHtml += `<li><strong>${str.scoreName}</strong>: ${desc}</li>`;
        });
        reportHtml += `
                </ul>
            </div>
        `;
    }

    if (weaknesses.length > 0) {
        // 틀린 개수가 많은 순서로 정렬
        weaknesses.sort((a, b) => b.count - a.count);

        reportHtml += `
            <div class="report-box weakness-box">
                <h4>💡 조금 더 조심하면 완벽해지는 생각 포인트!</h4>
                <p>글을 쓰기 전에 다음 약속들을 한 번만 더 떠올려 보세요.</p>
                <ul>
        `;
        weaknesses.forEach(wk => {
            let tip = "";
            if (wk.key === "reader") tip = "글을 읽을 사람이 어른인지 동생인지, 그 사람이 어떤 기분일지 미리 편지봉투에 이름을 적으며 생각해 봐요.";
            if (wk.key === "length") tip = "일기장의 줄 수나 알림장의 여백을 미리 보고, 내 생각이 넘치거나 너무 부족하지 않게 분량을 가늠해 봐요.";
            if (wk.key === "topic") tip = "쓰기 시작할 때 메모지에 한 문장으로 주제를 적어두고, 글을 쓰는 도중에 가끔씩 쳐다보며 확인해 봐요.";
            if (wk.key === "goal") tip = "이 글이 축하 편지인지, 설명문인지, 규칙을 알려주는 안내문인지 종이 맨 위에 크게 적어 두고 써 봐요.";

            reportHtml += `<li><strong>${wk.scoreName} (${wk.count}회 실수)</strong>: ${tip}</li>`;
        });
        reportHtml += `
                </ul>
            </div>
        `;
    } else {
        // 100점 만점일 때
        reportHtml += `
            <div class="report-box perfect-box">
                <h4>🎉 축하합니다! 글쓰기 생각 마스터! 🎉</h4>
                <p>4가지 글쓰기 약속(읽는 사람, 분량, 주제, 목표)을 모두 완벽하게 이해하고 있어요! 이제 어떤 글을 쓰든 훌륭한 최고의 작가가 될 수 있을 거예요. 지금 바로 나만의 멋진 글을 쓰러 떠나볼까요?</p>
            </div>
        `;
    }

    reportContainer.innerHTML = reportHtml;
}
