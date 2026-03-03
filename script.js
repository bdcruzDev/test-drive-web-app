let questions = [];
let quizData = {
    user: "",
    currentQuestions: [],
    currentIndex: 0,
    score: 0,
    totalToAsk: 0
};

// Cargar preguntas desde JSON
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        questions = await response.json();
    } catch (error) {
        console.error("Error cargando el JSON. Asegúrate de usar un servidor local.", error);
    }
}

// Iniciar aplicación
function initApp() {
    const name = document.getElementById('user-name').value;
    const count = parseInt(document.getElementById('q-count').value);

    if (!name) return alert("Por favor ingresa tu nombre");
    
    quizData.user = name;
    quizData.totalToAsk = count > questions.length ? questions.length : count;
    
    // Aleatorizar preguntas
    quizData.currentQuestions = [...questions]
        .sort(() => 0.5 - Math.random())
        .slice(0, quizData.totalToAsk);
    
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = quizData.currentQuestions[quizData.currentIndex];
    const container = document.getElementById('options-container');
    
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('progress-bar').style.width = `${(quizData.currentIndex / quizData.totalToAsk) * 100}%`;
    
    container.innerHTML = "";
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = "option-card fade-in";
        div.innerText = opt;
        div.onclick = () => selectOption(i, div);
        container.appendChild(div);
    });
}

// Añade esto a tu función selectOption existente en script.js
function selectOption(index, element) {
    const q = quizData.currentQuestions[quizData.currentIndex];
    const allOptions = document.querySelectorAll('.option-card');
    
    // Bloquear clics extra
    allOptions.forEach(opt => opt.style.pointerEvents = "none");

    // Crear elemento de feedback educativo
    const feedback = document.createElement('div');
    feedback.className = "mt-3 p-2 rounded text-center fade-in";
    feedback.style.fontSize = "0.85rem";
    feedback.innerHTML = `<strong>Fuente:</strong> ${q.manual}, pág. ${q.page}`;

    if (index === q.correct) {
        element.classList.add('bg-success', 'text-white');
        quizData.score++;
    } else {
        element.classList.add('bg-danger', 'text-white');
        allOptions[q.correct].classList.add('bg-success', 'text-white');
    }

    // Insertar feedback debajo de las opciones
    document.getElementById('options-container').appendChild(feedback);

    setTimeout(() => {
        quizData.currentIndex++;
        if (quizData.currentIndex < quizData.totalToAsk) {
            showQuestion();
        } else {
            finishQuiz();
        }
    }, 2500); // Aumentamos a 2.5 seg para que lean la referencia
}

function finishQuiz() {
    const finalScore = Math.round((quizData.score / quizData.totalToAsk) * 100);
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    document.getElementById('score-display').innerText = `${finalScore}/100`;
    const status = document.getElementById('status-text');
    
    if (finalScore >= 70) {
        status.innerText = "¡APROBADO!";
        status.className = "h3 text-success";
    } else {
        status.innerText = "REPROBADO";
        status.className = "h3 text-danger";
    }

    saveToHistory(quizData.user, finalScore);
}

function saveToHistory(name, score) {
    let history = JSON.parse(localStorage.getItem('quiz_history')) || [];
    const entry = {
        name: name,
        score: score,
        date: new Date().toLocaleString(),
        status: score >= 70 ? 'Aprobado' : 'Reprobado'
    };
    history.push(entry);
    localStorage.setItem('quiz_history', JSON.stringify(history));
    updateHistoryUI();
}

function updateHistoryUI() {
    const history = JSON.parse(localStorage.getItem('quiz_history')) || [];
    const list = document.getElementById('history-list');
    list.innerHTML = history.reverse().slice(0, 5).map(item => `
        <div class="history-item d-flex justify-content-between">
            <span><strong>${item.name}</strong> (${item.date})</span>
            <span class="${item.score >= 70 ? 'text-success' : 'text-danger'}">${item.score}%</span>
        </div>
    `).join('');
}

// Cargar preguntas al iniciar la ventana
window.onload = () => {
    loadQuestions();
    updateHistoryUI();
};