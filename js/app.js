document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    let currentState = {
        screen: 'menu',
        currentQuestionIndex: 0,
        score: 0,
        mistakes: 0,
        selectedOption: null,
        userAnswer: '',
        userBlanks: [],
        isAnswerChecked: false,
        soundEnabled: localStorage.getItem('nicadrive_sound') !== 'false'
    };

    // --- Audio Assets ---
    const sounds = {
        correct: new Audio('https://www.myinstants.com/media/sounds/duolingo-correct.mp3'),
        wrong: new Audio('https://www.myinstants.com/media/sounds/duolingo-wrong.mp3'),
        click: new Audio('https://www.myinstants.com/media/sounds/ui-click-3.mp3'),
        win: new Audio('https://www.myinstants.com/media/sounds/final-fantasy-v-music-victory-fanfare.mp3')
    };

    function playSound(name) {
        if (currentState.soundEnabled && sounds[name]) {
            sounds[name].currentTime = 0;
            sounds[name].play().catch(e => console.log('Audio play failed:', e));
        }
    }

    // --- DOM Elements ---
    const screens = {
        menu: document.getElementById('menu-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen'),
        study: document.getElementById('study-screen')
    };

    const buttons = {
        start: document.getElementById('start-btn'),
        check: document.getElementById('check-btn'),
        next: document.getElementById('next-btn'),
        retry: document.getElementById('retry-btn'),
        close: document.getElementById('close-quiz'),
        study: document.getElementById('study-btn'),
        closeStudy: document.getElementById('close-study'),
        soundToggle: document.getElementById('sound-toggle')
    };

    const ui = {
        progressBar: document.getElementById('progress-bar'),
        questionCounter: document.getElementById('question-counter'),
        mistakesCount: document.getElementById('mistakes-count'),
        questionContainer: document.getElementById('question-container'),
        feedbackContainer: document.getElementById('feedback-message'),
        feedbackTitle: document.getElementById('feedback-title'),
        feedbackDesc: document.getElementById('feedback-desc'),
        feedbackSource: document.getElementById('feedback-source'),
        finalScore: document.getElementById('final-score'),
        accuracy: document.getElementById('accuracy'),
        actionContainer: document.getElementById('action-container'),
        historySection: document.getElementById('history-section'),
        historyList: document.getElementById('history-list'),
        clearHistoryBtn: document.getElementById('clear-history-btn'),
        studyList: document.getElementById('study-list'),
        studySearch: document.getElementById('study-search')
    };

    // --- Core Functions ---
    let sessionQuestions = [];
    let sessionSize = 10; // Default size

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function showScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        if (screens[screenName]) {
            screens[screenName].classList.add('active');
        }
        currentState.screen = screenName;
    }

    function initQuiz() {
        // Shuffle and take the selected number of questions for this session
        sessionQuestions = shuffleArray([...questionBank]).slice(0, sessionSize);
        
        currentState.currentQuestionIndex = 0;
        currentState.score = 0;
        currentState.mistakes = 0;
        currentState.isAnswerChecked = false;
        updateUI();
        renderQuestion();
        showScreen('quiz');
    }

    function updateUI() {
        const progress = (currentState.currentQuestionIndex / sessionQuestions.length) * 100;
        ui.progressBar.style.width = `${progress}%`;
        ui.questionCounter.textContent = `${currentState.currentQuestionIndex + 1} de ${sessionQuestions.length}`;
        ui.mistakesCount.textContent = currentState.mistakes;
        
        // Check button state
        const question = sessionQuestions[currentState.currentQuestionIndex];
        let canCheck = false;

        if (question.type === 'multiple-choice') {
            canCheck = currentState.selectedOption !== null;
        } else if (question.type === 'fill-in-writing') {
            canCheck = currentState.userAnswer.trim().length > 0;
        } else if (question.type === 'fill-in-selection') {
            canCheck = currentState.userBlanks.length === question.blanks.length && !currentState.userBlanks.includes(null);
        }

        if (canCheck && !currentState.isAnswerChecked) {
            buttons.check.disabled = false;
            buttons.check.classList.remove('btn-disabled');
            buttons.check.classList.add('btn-secondary');
        } else {
            buttons.check.disabled = true;
            buttons.check.classList.add('btn-disabled');
            buttons.check.classList.remove('btn-secondary');
        }
    }

    function renderQuestion() {
        const question = sessionQuestions[currentState.currentQuestionIndex];
        ui.questionContainer.innerHTML = '';
        ui.feedbackContainer.classList.add('hidden');
        ui.actionContainer.classList.remove('hidden');
        
        currentState.selectedOption = null;
        currentState.userAnswer = '';
        currentState.userBlanks = new Array(question.blanks?.length || 0).fill(null);
        currentState.isAnswerChecked = false;

        const title = document.createElement('h2');
        title.className = 'question-title';
        title.textContent = question.question;
        ui.questionContainer.appendChild(title);

        if (question.image) {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'question-image-container';
            const img = document.createElement('img');
            img.src = question.image;
            img.alt = 'Imagen de la pregunta';
            img.className = 'question-image';
            imgContainer.appendChild(img);
            ui.questionContainer.appendChild(imgContainer);
        }

        if (question.type === 'multiple-choice') {
            renderMultipleChoice(question);
        } else if (question.type === 'fill-in-writing') {
            renderFillInWriting(question);
        } else if (question.type === 'fill-in-selection') {
            renderFillInSelection(question);
        }

        updateUI();
    }

    function renderMultipleChoice(question) {
        const grid = document.createElement('div');
        grid.className = 'options-grid';

        question.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="badge">${index + 1}</span>
                <span class="option-text">${opt}</span>
            `;
            btn.onclick = () => {
                if (currentState.isAnswerChecked) return;
                currentState.selectedOption = index;
                document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                playSound('click');
                updateUI();
            };
            grid.appendChild(btn);
        });

        ui.questionContainer.appendChild(grid);
    }

    function renderFillInWriting(question) {
        const container = document.createElement('div');
        container.className = 'input-container';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text-input';
        input.placeholder = question.placeholder || 'Escribe tu respuesta aquí...';
        input.oninput = (e) => {
            currentState.userAnswer = e.target.value;
            updateUI();
        };

        container.appendChild(input);
        ui.questionContainer.appendChild(container);
        input.focus();
    }

    function renderFillInSelection(question) {
        const sentenceDiv = document.createElement('div');
        sentenceDiv.className = 'sentence-container';
        
        let sentenceHtml = question.sentence;
        question.blanks.forEach((_, i) => {
            sentenceHtml = sentenceHtml.replace('________', `<span class="blank" data-index="${i}"></span>`);
        });
        sentenceDiv.innerHTML = sentenceHtml;
        ui.questionContainer.appendChild(sentenceDiv);

        const chipsDiv = document.createElement('div');
        chipsDiv.className = 'chips-container';

        question.options.forEach((opt, i) => {
            const chip = document.createElement('div');
            chip.className = 'chip';
            chip.textContent = opt;
            chip.onclick = () => {
                if (currentState.isAnswerChecked) return;
                
                // Find first empty blank
                const emptyIndex = currentState.userBlanks.indexOf(null);
                if (emptyIndex !== -1) {
                    currentState.userBlanks[emptyIndex] = opt;
                    const blankSpan = sentenceDiv.querySelector(`.blank[data-index="${emptyIndex}"]`);
                    blankSpan.textContent = opt;
                    chip.classList.add('used');
                    playSound('click');
                    updateUI();
                }
            };
            chipsDiv.appendChild(chip);
        });

        ui.questionContainer.appendChild(chipsDiv);
        
        // Reset mechanism: clicking a blank clears it
        sentenceDiv.querySelectorAll('.blank').forEach(blank => {
            blank.onclick = () => {
                if (currentState.isAnswerChecked) return;
                const idx = parseInt(blank.dataset.index);
                const val = currentState.userBlanks[idx];
                if (val) {
                    currentState.userBlanks[idx] = null;
                    blank.textContent = '';
                    // Find the chip and unmark it
                    const chips = chipsDiv.querySelectorAll('.chip');
                    for (let c of chips) {
                        if (c.textContent === val && c.classList.contains('used')) {
                            c.classList.remove('used');
                            break;
                        }
                    }
                    updateUI();
                }
            };
        });
    }

    function checkAnswer() {
        const question = sessionQuestions[currentState.currentQuestionIndex];
        let isCorrect = false;

        if (question.type === 'multiple-choice') {
            isCorrect = currentState.selectedOption === question.answer;
        } else if (question.type === 'fill-in-writing') {
            const cleanUser = currentState.userAnswer.trim().toLowerCase();
            if (Array.isArray(question.answer)) {
                isCorrect = question.answer.some(a => cleanUser.includes(a.toLowerCase()));
            } else {
                isCorrect = cleanUser === question.answer.toLowerCase();
            }
        } else if (question.type === 'fill-in-selection') {
            isCorrect = JSON.stringify(currentState.userBlanks) === JSON.stringify(question.blanks);
        }

        currentState.isAnswerChecked = true;
        ui.actionContainer.classList.add('hidden');
        ui.feedbackContainer.classList.remove('hidden');

        if (isCorrect) {
            currentState.score++;
            ui.feedbackContainer.className = 'feedback-container correct';
            ui.feedbackTitle.textContent = '¡Excelente!';
            ui.feedbackDesc.textContent = question.explanation;
            
            if (question.source) {
                ui.feedbackSource.innerHTML = `<strong>Fuente:</strong> ${question.source.file} (${question.source.detail})`;
                ui.feedbackSource.classList.remove('hidden');
            } else {
                ui.feedbackSource.classList.add('hidden');
            }

            playSound('correct');
        } else {
            currentState.mistakes++;
            ui.feedbackContainer.className = 'feedback-container wrong';
            ui.feedbackTitle.textContent = 'Incorrecto';
            ui.feedbackDesc.textContent = question.explanation;
            
            if (question.source) {
                ui.feedbackSource.innerHTML = `<strong>Fuente:</strong> ${question.source.file} (${question.source.detail})`;
                ui.feedbackSource.classList.remove('hidden');
            } else {
                ui.feedbackSource.classList.add('hidden');
            }

            // Add shake effect
            ui.questionContainer.classList.add('shake');
            setTimeout(() => ui.questionContainer.classList.remove('shake'), 500);
            
            playSound('wrong');
        }

        updateUI();
    }

    function nextQuestion() {
        if (currentState.currentQuestionIndex >= sessionQuestions.length - 1) {
            finishQuiz();
        } else {
            currentState.currentQuestionIndex++;
            renderQuestion();
        }
    }

    function finishQuiz() {
        showScreen('results');
        ui.finalScore.textContent = currentState.score;
        const accuracy = Math.round((currentState.score / sessionQuestions.length) * 100);
        ui.accuracy.textContent = `${accuracy}%`;
        
        const statusEl = document.getElementById('results-status');
        const iconEl = document.getElementById('results-icon');
        
        if (accuracy >= 80) {
            statusEl.textContent = '¡APROBADO!';
            statusEl.className = 'status-approved';
            iconEl.textContent = '🎉';
        } else {
            statusEl.textContent = 'REPROBADO';
            statusEl.className = 'status-failed';
            iconEl.textContent = '❌';
        }
        
        if (accuracy >= 80) {
            playSound('win');
        }
        
        saveScore(currentState.score, accuracy);
    }

    // --- History Functions ---

    function saveScore(score, accuracy) {
        const history = JSON.parse(localStorage.getItem('nicadrive_history') || '[]');
        const entry = {
            date: new Date().toLocaleDateString('es-NI', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
            score: score,
            total: sessionQuestions.length,
            accuracy: accuracy
        };
        history.unshift(entry); // Add to beginning
        localStorage.setItem('nicadrive_history', JSON.stringify(history.slice(0, 10))); // Keep last 10
        loadHistory();
    }

    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('nicadrive_history') || '[]');
        
        if (history.length === 0) {
            ui.historySection.classList.add('hidden');
            return;
        }

        ui.historySection.classList.remove('hidden');
        ui.historyList.innerHTML = '';

        history.forEach(item => {
            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = `
                <div>
                    <span class="history-date">${item.date}</span>
                    <span class="history-accuracy">(${item.accuracy}%)</span>
                </div>
                <span class="history-score">${item.score}/${item.total}</span>
            `;
            ui.historyList.appendChild(div);
        });
    }

    function clearHistory() {
        if (confirm('¿Seguro que quieres borrar todo tu progreso?')) {
            localStorage.removeItem('nicadrive_history');
            loadHistory();
        }
    }

    // --- Study Mode Functions ---

    function initStudyMode() {
        ui.studySearch.value = '';
        renderStudyList();
        showScreen('study');
    }

    function renderStudyList(query = '') {
        ui.studyList.innerHTML = '';
        
        const cleanQuery = normalizeString(query);
        
        const filtered = questionBank.filter(q => 
            normalizeString(q.question).includes(cleanQuery) || 
            normalizeString(q.topic).includes(cleanQuery) ||
            normalizeString(q.explanation).includes(cleanQuery)
        );

        if (filtered.length === 0) {
            ui.studyList.innerHTML = '<div class="study-explanation" style="text-align: center; margin-top: 50px;">No se encontraron preguntas que coincidan con tu búsqueda.</div>';
            return;
        }

        filtered.forEach(q => {
            const card = document.createElement('div');
            card.className = 'study-card';
            
            let answerDisplay = '';
            if (q.type === 'multiple-choice') {
                answerDisplay = q.options[q.answer];
            } else if (q.type === 'fill-in-writing') {
                answerDisplay = Array.isArray(q.answer) ? q.answer[0] : q.answer;
            } else if (q.type === 'fill-in-selection') {
                answerDisplay = q.blanks.join(', ');
            }

            card.innerHTML = `
                <div class="study-topic">${q.topic}</div>
                <div class="study-question">${q.question}</div>
                <div class="study-answer-box">
                    <span class="study-answer-label">RESPUESTA CORRECTA:</span>
                    <span class="study-answer-text">${answerDisplay}</span>
                </div>
                <div class="study-explanation">${q.explanation}</div>
            `;
            ui.studyList.appendChild(card);
        });
    }

    // --- Event Listeners ---
    buttons.start.onclick = initQuiz;
    buttons.study.onclick = initStudyMode;
    buttons.closeStudy.onclick = () => showScreen('menu');
    ui.studySearch.oninput = (e) => renderStudyList(e.target.value);

    // Session Size Selector
    const chips = document.querySelectorAll('.size-chips .chip');
    chips.forEach(chip => {
        chip.onclick = () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            sessionSize = parseInt(chip.dataset.size);
        };
    });

    buttons.check.onclick = checkAnswer;
    buttons.next.onclick = nextQuestion;
    buttons.retry.onclick = () => showScreen('menu');
    buttons.close.onclick = () => {
        if (confirm('¿Quieres salir de la lección? Perderás tu progreso.')) {
            showScreen('menu');
        }
    };
    ui.clearHistoryBtn.onclick = clearHistory;

    // Sound Toggle Logic
    function updateSoundToggleUI() {
        if (currentState.soundEnabled) {
            buttons.soundToggle.textContent = '🔊';
            buttons.soundToggle.classList.remove('muted');
        } else {
            buttons.soundToggle.textContent = '🔈';
            buttons.soundToggle.classList.add('muted');
        }
    }

    buttons.soundToggle.onclick = () => {
        currentState.soundEnabled = !currentState.soundEnabled;
        localStorage.setItem('nicadrive_sound', currentState.soundEnabled);
        updateSoundToggleUI();
        if (currentState.soundEnabled) playSound('click');
    };

    // Initial Sound UI state
    updateSoundToggleUI();

    // Add click sound to main buttons
    [buttons.start, buttons.study, buttons.next, buttons.retry, buttons.close, buttons.closeStudy].forEach(btn => {
        const originalOnClick = btn.onclick;
        btn.onclick = (e) => {
            playSound('click');
            if (originalOnClick) originalOnClick(e);
        };
    });

    // Initial load
    loadHistory();

});
