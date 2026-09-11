function openSurprise() {
    document.querySelector(".welcome").style.display = "none";

    const surprise = document.createElement("div");
    surprise.className = "surprise";

    surprise.innerHTML = `
        <h1>Za najlepšu devojku 💜</h1>
        <p>Ovo sam napravio samo za tebe...</p>
        <p class="small-text">I ovo je tek početak. 💜</p>
        <button onclick="showGallery()">Nastavi 💜</button>
    `;

    document.body.appendChild(surprise);
}

function showGallery() {
    document.querySelector(".surprise").remove();

    const gallery = document.createElement("div");
    gallery.className = "gallery";

    gallery.innerHTML = `
        <h1>Naše uspomene 💜</h1>
        <p>Neke od mojih omiljenih slika sa tobom.</p>

        <div class="photos">
            <img src="images/foto 1.jpg" alt="Naša slika">
            <img src="images/foto 2.jpg" alt="Naša slika">
            <img src="images/foto 3.jpg" alt="Naša slika">
            <img src="images/foto 4.jpg" alt="Naša slika">
            <img src="images/foto 5.jpg" alt="Naša slika">
<img src="images/foto 6.jpg" alt="Naša slika">
<img src="images/foto 7.jpg" alt="Naša slika">
<img src="images/foto 8.jpg" alt="Naša slika">
<img src="images/foto 9.jpg" alt="Naša slika">
<img src="images/foto 10.jpg" alt="Naša slika">
<img src="images/foto 11.jpg" alt="Naša slika">
<img src="images/foto 12.jpg" alt="Naša slika">
<img src="images/foto 13.jpg" alt="Naša slika">
<img src="images/foto 14.jpg" alt="Naša slika">
<img src="images/foto 15.jpg" alt="Naša slika">
<img src="images/foto 16.jpg" alt="Naša slika">
<img src="images/foto 17.jpg" alt="Naša slika">
<img src="images/foto 18.jpg" alt="Naša slika">
<img src="images/foto 19.jpg" alt="Naša slika">
<img src="images/foto 20.jpg" alt="Naša slika">
        </div>

        <button onclick="showMessage()">Nastavi 💜</button>
    `;

    document.body.appendChild(gallery);
}

function showMessage() {
    document.querySelector(".gallery").remove();

    const timeline = document.createElement("div");
    timeline.className = "timeline-section";

    timeline.innerHTML = `
        <h1>Naša priča 💜</h1>
        <p class="timeline-intro">
            Pogledaj koliko smo toga prošli zajedno...
        </p>

        <div class="timeline">

            <div class="timeline-item">
                <div class="timeline-date">Avgust 2020. 💜</div>
                <div class="timeline-card">
                    <h2>Prvi put 💜</h2>
                    <p>
                        Tada sam se prvi put zaljubio u tebe,
                        iako ti baš i nisi bila zaljubljena u mene hahahah.
                    </p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">22. jun 2022. 💔</div>
                <div class="timeline-card">
                    <h2>Mislili smo da je kraj...</h2>
                    <p>
                        Posvađali smo se i mislili da je naša priča završena.
                    </p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">Novembar 2023. 💜</div>
                <div class="timeline-card">
                    <h2>Ponovo zajedno</h2>
                    <p>
                        Pomirili smo se i htjeli da ostanemo prijatelji,
                        iako sam ja i dalje bio zaljubljen u tebe.
                    </p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">8. februar 2025. 🎂</div>
                <div class="timeline-card">
                    <h2>Moja želja 💜</h2>
                    <p>
                        Na mom punoljetstvu, dok sam duvao svjećice,
                        ostvarila mi se želja — a ta želja si bila ti.
                    </p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">14. jun 2025. 💔</div>
                <div class="timeline-card">
                    <h2>Još jedan kraj...</h2>
                    <p>
                        Ponovo smo mislili da je sve gotovo...
                    </p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">19. jul 2025. ❤️</div>
                <div class="timeline-card">
                    <h2>Naše stalno pričanje</h2>
                    <p>
                        Počeli smo naše stalno pričanje,
                        ne znajući još gdje će nas sve to odvesti.
                    </p>
                </div>
            </div>

            <div class="timeline-item special">
                <div class="timeline-date">22. decembar 2025. 💜</div>
                <div class="timeline-card">
                    <h2>Najljepši dan mog života ❤️</h2>
                    <p>
                        Smuvali smo se.
                        Od tog dana smo zajedno i to je
                        najljepši dan u mom životu.
                    </p>
                </div>
            </div>

            <div class="timeline-item future">
                <div class="timeline-date">2026. 💜</div>
                <div class="timeline-card">
                    <h2>Nova epoha 💜</h2>
                    <p>
                        Od tada smo zajedno, a sada počinjemo
                        potpuno novo poglavlje — zajedničko studiranje
                        i zajednički život u Kopru.
                    </p>
                    <p class="ending">
                        Naša priča se ovdje ne završava...
                        ovdje tek počinje naše novo poglavlje. 💜
                    </p>
                </div>
            </div>

        </div>

        <button onclick="showFinal()">Nastavi 💜</button>
    `;

    document.body.appendChild(timeline);
}
function showFinal() {
    document.querySelector(".timeline-section").remove();

    const final = document.createElement("div");
    final.className = "final-message";

    final.innerHTML = `
    <h1>Srećan rođendan, ljubavi 💜</h1>

    <div class="letter">
        <p id="typed-text"></p>
    </div>

    <button id="secret-button" onclick="bigSurprise()">
        Pritisni me 💜
    </button>

    <div id="hearts"></div>
`;

    document.body.appendChild(final);

    const text = `Volim te. 💜

Ne mogu da zamislim da sve ovo prolazim sa nekim drugim i stvarno mislim da naš najbolji period tek dolazi.

Želim da proslavimo još mnogo rođendana, godišnjica i svega ostalog zajedno.

Želim da uvijek ostaneš tako nasmijana i srećna i da znaš da si najljepša djevojka na svijetu. 💜

Srećan rođendan, ljubavi. 💜`;

    let i = 0;
    const typedText = document.getElementById("typed-text");

    function typeWriter() {
        if (i < text.length) {
            typedText.innerHTML += text.charAt(i) === "\n"
                ? "<br><br>"
                : text.charAt(i);

            i++;
            setTimeout(typeWriter, 35);
        } else {
            createHearts();
        }
    }

    typeWriter();
}

function createHearts() {
    const heartsContainer = document.getElementById("hearts");

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "💜";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 3 + "s";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        heartsContainer.appendChild(heart);
    }
}
function bigSurprise() {
    const button = document.getElementById("secret-button");

    button.style.display = "none";

    const surprise = document.createElement("div");
    surprise.className = "big-surprise";

    surprise.innerHTML = `
        <h1>Volim te, Marija 💜</h1>
        <p>Za tebe, danas i svaki naredni dan. 💜</p>

        <img src="images/foto 20.jpg" alt="Naša posebna slika">

        <h2>Naša priča tek počinje... 💜</h2>
    `;

    document.body.appendChild(surprise);

    for (let i = 0; i < 80; i++) {
        const heart = document.createElement("div");

        heart.className = "big-heart";
        heart.innerHTML = "💜";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 2 + "s";
        heart.style.fontSize = (15 + Math.random() * 35) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}