let currentQuestion = 0;
let nextAfterQuiz = null;

const questions = [
    {
        question: "Gdje smo išli za prvi dejt? 💜",
        answers: [
            "Do grada",
            "Na kafu",
            "Vozali se do Branjeva",
            "Vozali se do Pilice"
        ],
        correct: 3
    },

    {
        question: "U koliko sati smo se prvi put poljubili? 💋",
        answers: [
            "00:31",
            "00:28",
            "00:38",
            "00:22"
        ],
        correct: 1
    },

    {
        question: "Kada nam je godišnjica? 💜",
        answers: [
            "25. decembar",
            "21. decembar",
            "22. decembar",
            "27. decembar"
        ],
        correct: 2
    },

    {
        question: "Da li me voliš? 🥰",
        answers: [
            "DA 💜",
            "DA, NARAVNO 💜"
        ],
        correct: -1
    }
];


// ===============================
// KVIZ
// ===============================

function showQuiz(nextFunction) {

    nextAfterQuiz = nextFunction;

    document.body.innerHTML = `
        <div class="quiz-page">

            <div class="cute-top">
                🐱 💜 🌸 🌷 💜 🐱
            </div>

            <div class="quiz-card">

                <div class="cute-characters">
                    🧽 ⭐
                </div>

                <h1>Pitanje za moju ljubav 💜</h1>

                <p class="quiz-question">
                    ${questions[currentQuestion].question}
                </p>

                <div class="answers">

                    ${questions[currentQuestion].answers.map((answer, index) => `
                        <button
                            class="answer-button"
                            onclick="checkAnswer(${index})">
                            ${answer}
                        </button>
                    `).join("")}

                </div>

                <p id="quiz-result"></p>

                <div class="flowers">
                    🌸 🌷 🌸
                </div>

            </div>

        </div>
    `;
}


function checkAnswer(answerIndex) {

    const q = questions[currentQuestion];
    const result = document.getElementById("quiz-result");

    if (q.correct === -1) {

        result.innerHTML = "TAČNOOOO! Znao sam. 😂💜";

        document.querySelectorAll(".answer-button").forEach(button => {
            button.disabled = true;
        });

        setTimeout(() => {

            currentQuestion++;

            const next = nextAfterQuiz;

            nextAfterQuiz = null;

            if (next) {
                next();
            }

        }, 900);

        return;
    }


    if (answerIndex === q.correct) {

        result.innerHTML = "Tačno! 💜🥰";

        document.querySelectorAll(".answer-button").forEach(button => {
            button.disabled = true;
        });

        setTimeout(() => {

            currentQuestion++;

            const next = nextAfterQuiz;

            nextAfterQuiz = null;

            if (next) {
                next();
            }

        }, 900);

    } else {

        result.innerHTML = "Neee ljubavi 😂💜 Probaj ponovo!";
    }
}


// ===============================
// PRVO OTVARANJE
// ===============================

function openSurprise() {

    currentQuestion = 0;

    showQuiz(() => {
        showFirstSurprise();
    });
}


// ===============================
// PRVO IZNENAĐENJE
// ===============================

function showFirstSurprise() {

    document.body.innerHTML = `

        <div class="surprise-page">

            <div class="cute-top">
                🐱 🌸 💜 🌷 🐱
            </div>

            <div class="surprise-card">

                <div class="cute-characters">
                    🧽 ⭐
                </div>

                <h1>Za najlepšu devojku 💜</h1>

                <p>
                    Ovo sam napravio samo za tebe...
                    <br><br>
                    I ovo je tek početak. 💜
                </p>

                <div class="flowers">
                    🌸 🌷 🌸
                </div>

                <button onclick="startGalleryQuiz()">
                    Nastavi 💜
                </button>

            </div>

        </div>
    `;
}


// ===============================
// KVIZ 2
// ===============================

function startGalleryQuiz() {

    showQuiz(() => {
        showGallery();
    });
}


// ===============================
// GALERIJA
// ===============================

function showGallery() {

    document.body.innerHTML = `

        <div class="gallery-page">

            <div class="gallery-decoration">
                🐱 🌸 🌷 💜 🌷 🌸 🐱
            </div>

            <h1>Naše uspomene 💜</h1>

            <div class="gallery">

                <img src="images/foto 1.jpg">
                <img src="images/foto 2.jpg">
                <img src="images/foto 3.jpg">
                <img src="images/foto 4.jpg">
                <img src="images/foto 5.jpg">
                <img src="images/foto 6.jpg">
                <img src="images/foto 7.jpg">
                <img src="images/foto 8.jpg">
                <img src="images/foto 9.jpg">
                <img src="images/foto 10.jpg">
                <img src="images/foto 11.jpg">
                <img src="images/foto 12.jpg">
                <img src="images/foto 13.jpg">
                <img src="images/foto 14.jpg">
                <img src="images/foto 15.jpg">
                <img src="images/foto 16.jpg">
                <img src="images/foto 17.jpg">
                <img src="images/foto 18.jpg">
                <img src="images/foto 19.jpg">
                <img src="images/foto 20.jpg">

            </div>

            <div class="flowers">
                🌸 🌷 💜 🌷 🌸
            </div>

            <button onclick="startTimelineQuiz()">
                Nastavi 💜
            </button>

        </div>
    `;
}


// ===============================
// KVIZ 3
// ===============================

function startTimelineQuiz() {

    showQuiz(() => {
        showMessage();
    });
}


// ===============================
// NAŠA PRIČA
// ===============================

function showMessage() {

    document.body.innerHTML = `

        <div class="timeline-page">

            <div class="timeline-decoration">
                🐱 💜 🌸 🌷 🧽 ⭐
            </div>

            <h1>Naša priča 💜</h1>

            <div class="timeline">

                <div class="timeline-item">
                    <h2>Avgust 2020. 💜</h2>
                    <p>
                        Tada sam se prvi put zaljubio u tebe,
                        iako ti baš i nisi bila zaljubljena u mene hahahah.
                    </p>
                </div>

                <div class="timeline-item">
                    <h2>22. jun 2022. 💔</h2>
                    <p>
                        Posvađali smo se i mislili da je naša priča završena.
                    </p>
                </div>

                <div class="timeline-item">
                    <h2>Novembar 2023. 💜</h2>
                    <p>
                        Pomirili smo se i htjeli da ostanemo prijatelji,
                        iako sam ja i dalje bio zaljubljen u tebe.
                    </p>
                </div>

                <div class="timeline-item">
                    <h2>8. februar 2025. 🎂</h2>
                    <p>
                        Na mom punoljetstvu, dok sam duvao svjećice,
                        ostvarila mi se želja — a ta želja si bila ti.
                    </p>
                </div>

                <div class="timeline-item">
                    <h2>14. jun 2025. 💔</h2>
                    <p>
                        Ponovo smo mislili da je sve gotovo...
                    </p>
                </div>

                <div class="timeline-item">
                    <h2>19. jul 2025. ❤️</h2>
                    <p>
                        Počeli smo naše stalno pričanje,
                        ne znajući još gdje će nas sve to odvesti.
                    </p>
                </div>

                <div class="timeline-item">
                    <h2>22. decembar 2025. 💜</h2>
                    <p>
                        Smuvali smo se.
                        Od tog dana smo zajedno i to je najljepši dan
                        u mom životu.
                    </p>
                </div>

                <div class="timeline-item">
                    <h2>2026. 💜</h2>
                    <p>
                        Od tada smo zajedno, a sada počinjemo potpuno novo
                        poglavlje — zajedničko studiranje i zajednički život u Kopru.
                    </p>

                    <p>
                        Naša priča se ovdje ne završava...
                        ovdje tek počinje naše novo poglavlje. 💜
                    </p>
                </div>

            </div>

            <button onclick="startLetterQuiz()">
                Nastavi 💜
            </button>

        </div>
    `;
}


// ===============================
// KVIZ 4
// ===============================

function startLetterQuiz() {

    showQuiz(() => {
        showLetter();
    });
}


// ===============================
// PISMO
// ===============================

function showLetter() {

    document.body.innerHTML = `

        <div class="letter-page">

            <div class="letter-decoration">
                🌸 🐱 💜 🌷 🐱 🌸
            </div>

            <div class="letter-card">

                <h1>Srećan rođendan, ljubavi 💜</h1>

                <div id="typed-letter"></div>

                <div class="flowers">
                    🌸 🌷 💜 🌷 🌸
                </div>

                <button
                    id="letter-button"
                    style="display: none;"
                    onclick="bigSurprise()">
                    Pritisni me 💜
                </button>

            </div>

        </div>
    `;

    typeLetter();
}


// ===============================
// EFEKAT KUCANJA
// ===============================

function typeLetter() {

    const letter = `
Volim te. 💜

Ne mogu da zamislim da sve ovo prolazim sa nekim drugim i stvarno mislim da naš najbolji period tek dolazi.

Želim da proslavimo još mnogo rođendana, godišnjica i svega ostalog zajedno.

Želim da uvijek ostaneš tako nasmijana i srećna i da znaš da si najljepša djevojka na svijetu. 💜

Srećan rođendan, ljubavi. 💜
`;

    const container = document.getElementById("typed-letter");

    let index = 0;

    function type() {

        if (index < letter.length) {

            const character = letter.charAt(index);

            if (character === "\n") {
                container.innerHTML += "<br>";
            } else {
                container.innerHTML += character;
            }

            index++;

            setTimeout(type, 35);

        } else {

            document.getElementById("letter-button").style.display = "inline-block";
        }
    }

    type();
}


// ===============================
// KONAČNO IZNENAĐENJE
// ===============================

function bigSurprise() {

    document.body.innerHTML = `

        <div class="ultimate-page">

            <div class="ultimate-cats">
                🐱 💜 🐱
            </div>

            <div class="ultimate-flowers">
                🌸 🌷 🌸 🌷 🌸
            </div>

            <div class="cartoon-friends">
                🧽 ⭐
            </div>

            <h1>
                VOLIM TE, MARIJA 💜
            </h1>

            <p class="ultimate-text">
                Za tebe, danas i svaki naredni dan. 💜
            </p>

            <div class="ultimate-photo">

                <img
                    src="images/foto 20.jpg"
                    alt="Naša fotografija">

            </div>

            <h2>
                Naša priča tek počinje... 💜
            </h2>

            <p class="ultimate-small">
                I jedva čekam sve što nas još čeka. 🥰
            </p>

            <div id="final-hearts"></div>

        </div>
    `;

    createFinalHearts();
}


// ===============================
// LJUBIČASTA SRCA
// ===============================

function createFinalHearts() {

    const container = document.getElementById("final-hearts");

    if (!container) return;

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.className = "big-heart";

        heart.innerHTML = "💜";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDelay =
            Math.random() * 5 + "s";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        container.appendChild(heart);
    }
}