// Funkcja rozpoczynająca grę - przejście z ekranu początkowego do etapu 1
function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('stage1').style.display = 'block';
}

// Funkcja przechodząca do etapu 2
function continueToStage2() {
    document.getElementById('stage1').style.display = 'none';
    document.getElementById('stage2').style.display = 'block';
}

// Funkcja przechodząca do etapu 3
function continueToStage3() {
    document.getElementById('stage2').style.display = 'none';
    document.getElementById('stage3').style.display = 'block';
}

// Funkcja do wyświetlania powiadomień
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification show ${type}`;
    setTimeout(() => {
        notification.className = 'notification';
    }, 3000);
}

// Funkcja sprawdzająca hasło w etapie 3
function checkPassword1() {
    const input = document.getElementById('input1').value;
    if (input.toLowerCase() === 'michel') {
        document.getElementById('stage3').style.display = 'none';
        document.getElementById('stage4').style.display = 'block';
    } else {
        showNotification('Niepoprawne hasło. Spróbuj ponownie.', 'error');
    }
}

// Funkcja sprawdzająca numer telefonu w etapie 4
function checkPhoneNumber() {
    const phoneNumber = document.getElementById('phoneInput').value;
    if (phoneNumber === '519430169') {  // Zamień na prawidłowy numer
        document.getElementById('stage4').style.display = 'none';
        document.getElementById('stage5').style.display = 'block';
    } else {
        showNotification('Niepoprawny numer telefonu. Spróbuj ponownie.', 'error');
    }
}

// Funkcja sprawdzająca hasło w etapie 5
function checkPassword2() {
    const input = document.getElementById('input2').value;
    if (input.toLowerCase() === 'f1') {
        document.getElementById('stage5').style.display = 'none';
        document.getElementById('stage6').style.display = 'block';
    } else {
        showNotification('Niepoprawne hasło. Spróbuj ponownie.', 'error');
    }
}

// Licznik niepoprawnych prób
let incorrectAttempts = 0;

// Funkcja sprawdzająca wiadomości w etapie 6
function checkMessage(option) {
    if (option === 'correct') {
        document.getElementById('stage6').style.display = 'none';
        document.getElementById('stage7').style.display = 'block';
    } else {
        incorrectAttempts++;
        if (incorrectAttempts >= 2) {
            showNotification('Gra zakończona! Przekroczyłeś limit błędnych odpowiedzi.', 'error');
            setTimeout(() => {
                location.reload();
            }, 4000); // 4-sekundowe opóźnienie przed zakończeniem gry
        } else {
            showNotification('Czy napewno chcesz być dla niego taki niemiły? Zastanów się..', 'error');
        }
    }
}

// Funkcja sprawdzająca hasło w etapie 7
function checkPassword3() {
    const input = document.getElementById('input3').value;
    if (input.toLowerCase() === 'lewis hamilton') {
        document.getElementById('stage7').style.display = 'none';
        document.getElementById('stage8').style.display = 'block';
    } else {
        showNotification('Niepoprawne hasło. Spróbuj ponownie.', 'error');
    }
}

// Funkcja sprawdzająca hasło w etapie 8
function checkPassword4() {
    const input = document.getElementById('input4').value;
    if (input.toLowerCase() === 'bartek ziomber') {
        document.getElementById('stage8').style.display = 'none';
        document.getElementById('stage9').style.display = 'block';
    } else {
        showNotification('Niepoprawne hasło. Spróbuj ponownie.', 'error');
    }
}

// Funkcja przechodząca do etapu 10
function continueToStage10() {
    document.getElementById('stage9').style.display = 'none';
    document.getElementById('stage10').style.display = 'block';
}

// Funkcja sprawdzająca rejestrację w etapie 10
function checkRegistration() {
    const input = document.getElementById('input5').value;
    if (input.toUpperCase() === 'KT5683G') {
        document.getElementById('stage10').style.display = 'none';
        document.getElementById('stage11').style.display = 'block';
    } else {
        showNotification('Niepoprawna rejestracja. Spróbuj ponownie.', 'error');
    }
}

// Funkcja sprawdzająca odpowiedź w etapie 11
function checkAnswer1() {
    const input = document.getElementById('input6').value;
    if (input.toLowerCase() === 'nie') {
        document.getElementById('stage11').style.display = 'none';
        document.getElementById('stage12').style.display = 'block';
    } else {
        showNotification('Niepoprawna odpowiedź. Spróbuj ponownie.', 'error');
    }
}

// Funkcja sprawdzająca dowód w etapie 12
function checkAnswer2() {
    const input = document.getElementById('input7').value;
    if (input === 'https://www.youtube.com/watch?v=nJI-biQG2vM&ab_channel=STALOWYSZOK') {
        document.getElementById('stage12').style.display = 'none';
        document.getElementById('stage13').style.display = 'block';
    } else {
        showNotification('Niepoprawny dowód. Spróbuj ponownie.', 'error');
    }
}

// Funkcja przechodząca do etapu 14
function continueToStage14() {
    document.getElementById('stage13').style.display = 'none';
    document.getElementById('stage14').style.display = 'block';
}

// Funkcja obsługująca wybory w etapie 14
function handleChoice(choice) {
    if (choice === 'car') {
        document.getElementById('stage14').style.display = 'none';
        document.getElementById('stage15').style.display = 'block';
    } else if (choice === 'public') {
        document.getElementById('stage14').style.display = 'none';
        document.getElementById('stage19').style.display = 'block';
    } else if (choice === 'quit') {
        showNotification('KONIEC GRY. Nie chciałeś ratować Saschy.', 'error');
        setTimeout(() => {
            location.reload();
        }, 4000); // 4-sekundowe opóźnienie przed zakończeniem gry
    }
}

// Funkcja przechodząca do etapu 16
function continueToStage16() {
    document.getElementById('stage15').style.display = 'none';
    document.getElementById('stage16').style.display = 'block';
}

// Funkcja przechodząca do etapu 17
function continueToStage17() {
    document.getElementById('stage16').style.display = 'none';
    document.getElementById('stage17').style.display = 'block';
}

let questionIndex = 1;
let mistakes = 0;

// Funkcja sprawdzająca odpowiedzi na pytania w etapie 17
function checkQuestion(question, answer) {
    const correctAnswers = {
        q1: 'yes',
        q2: 'yes',
        q3: 'no',
        q4: 'no'
    };

    if (answer === correctAnswers[question]) {
        if (questionIndex < 4) {
            questionIndex++;
            document.getElementById(`question${questionIndex - 1}`).style.display = 'none';
            document.getElementById(`question${questionIndex}`).style.display = 'block';
        } else {
            document.getElementById('stage17').style.display = 'none';
            document.getElementById('stage18').style.display = 'block';
        }
    } else {
        mistakes++;
        if (mistakes > 1) {
            document.getElementById('stage17').style.display = 'none';
            document.getElementById('stage18_fail').style.display = 'block';
        } else {
            showNotification('Niepoprawna odpowiedź. Spróbuj ponownie.', 'error');
        }
    }
}

// Funkcja obsługująca eksplozję samochodu
function handleCarExplosion(choice) {
    if (choice === 'truth' || choice === 'lie') {
        showNotification('Ziomber nie do końca chciał uwierzyć w to co mu powiedziałeś, ale ostatecznie zaakceptował, że jego BMW nie będzie już stanowiło zagrożenia na drodze. To w końcu dobry chłopak, więc nie będzie Ci tego wypominał.', 'success');
        setTimeout(() => {
            document.getElementById('stage18').style.display = 'none';
            document.getElementById('stage19').style.display = 'block';
        }, 4000);
    } else if (choice === 'run') {
        showNotification('KONIEC GRY. GDY ZIOMBER WYBIEGŁ ZADZWONIŁ DO JAPKA, ŻEBY POINFORMOWAĆ GO O TYM CO ZROBIŁEŚ, A NASTĘPNIE ZADZWONIŁ NA POLICJĘ. JESTEŚ ZCANCELOWANY JEBANY IDIOTO.', 'error');
        setTimeout(() => {
            location.reload();
        }, 4000);
    }
}

// Funkcja przechodząca do etapu 19
function continueToStage19() {
    document.getElementById('stage18_fail').style.display = 'none';
    document.getElementById('stage19').style.display = 'block';
}

let busNumbers = [];
const correctBusNumbers = [9, 22, 11, 204, 143, 610, 169, 669];

// Funkcja sprawdzająca numery autobusów w etapie 19
function checkBusNumber() {
    const busInput = parseInt(document.getElementById('busInput').value);
    
    if (correctBusNumbers.includes(busInput) && !busNumbers.includes(busInput)) {
        busNumbers.push(busInput);
        document.getElementById('busInput').value = '';
        document.getElementById('busNumbers').textContent = busNumbers.join(', ');

        if (busNumbers.length === correctBusNumbers.length) {
            showNotification('Gratulacje! Podałeś wszystkie numery poprawnie.', 'success');
            setTimeout(() => {
                document.getElementById('stage19').style.display = 'none';
                document.getElementById('stage20').style.display = 'block';
            }, 2000); // 2-sekundowe opóźnienie przed przejściem do etapu 20
        }
    } else {
        showNotification('Niepoprawny lub powtarzający się numer autobusu. Spróbuj ponownie.', 'error');
    }
}

// Funkcja wyświetlająca podpowiedź w etapie 10
function showHint() {
    const hint = document.getElementById('hint');
    hint.style.display = 'block';
}

// Funkcja wyświetlająca podpowiedź w etapie 19
function showHint2() {
    const hint2 = document.getElementById('hint2');
    hint2.style.display = 'block';
}

// Funkcja przechodząca do etapu 20
function continueToNextStage() {
    document.getElementById('stage20').style.display = 'none';
    document.getElementById('stage21').style.display = 'block';
}

// Funkcja przechodząca do etapu 21
function continueToStage21() {
    document.getElementById('stage20').style.display = 'none';
    document.getElementById('stage21').style.display = 'block';
}

// Funkcja przechodząca do etapu 22
function continueToStage22() {
    document.getElementById('stage21').style.display = 'none';
    document.getElementById('stage22').style.display = 'block';
}

// Funkcja przechodząca do etapu 23
function continueToStage23() {
    document.getElementById('stage22').style.display = 'none';
    document.getElementById('stage23').style.display = 'block';
}

// Funkcja uruchamiająca wyszukiwanie telefonu Saschy
function startSearch() {
    document.getElementById('stage23').style.display = 'none';
    document.getElementById('stage24').style.display = 'block';
}

let searchMistakes = 0; // Licznik błędów podczas szukania telefonu

// Funkcja obsługująca wyjście z mieszkania
function exitApartment() {
    document.getElementById('stage24').style.display = 'none';
    document.getElementById('exit-stage').style.display = 'block';
}

// Funkcja przechodząca na środek mieszkania
function goStraight() {
    document.getElementById('stage24').style.display = 'none';
    document.getElementById('middle-stage').style.display = 'block';
}

// Funkcja przechodząca do lewej strony mieszkania
function goLeft() {
    document.getElementById('middle-stage').style.display = 'none';
    document.getElementById('living-room-stage').style.display = 'block';
}

// Funkcja przechodząca do przodu mieszkania
function goForward() {
    document.getElementById('middle-stage').style.display = 'none';
    document.getElementById('office-stage').style.display = 'block';
}

// Funkcja przechodząca do prawej strony mieszkania
function goRight() {
    document.getElementById('middle-stage').style.display = 'none';
    document.getElementById('kitchen-stage').style.display = 'block';
}

// Funkcja powrotu na środek mieszkania
function returnToMiddle() {
    document.getElementById('living-room-stage').style.display = 'none';
    document.getElementById('office-stage').style.display = 'none';
    document.getElementById('kitchen-stage').style.display = 'none';
    document.getElementById('middle-stage').style.display = 'block';
}

// Funkcja obsługująca salon Japka
function checkTVCabinet() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

function checkSofa() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

function checkBehindTV() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

function checkUnderTable() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

// Funkcja obsługująca biuro Japka
function checkDesk() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

function checkBookshelf() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

function checkPiano() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

// Funkcja obsługująca kuchnię Japka
function checkFridge() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

function checkCabinets() {
    document.getElementById('kitchen-stage').style.display = 'none';
    document.getElementById('cabinets-stage').style.display = 'block';
}

function checkTable() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

function checkCounter() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

// Funkcja powrotu do kuchni
function returnToKitchen() {
    document.getElementById('cabinets-stage').style.display = 'none';
    document.getElementById('kitchen-stage').style.display = 'block';
}

// Funkcja obsługująca szafki kuchenne
function checkCabinet1() {
    document.getElementById('cabinets-stage').style.display = 'none';
    document.getElementById('note-stage').style.display = 'block';
}

function checkCabinet2() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

function checkCabinet3() {
    showNotification('Nie znaleziono telefonu.', 'error');
    handleSearchMistake();
}

// Funkcja obsługująca błędy podczas szukania telefonu
function handleSearchMistake() {
    searchMistakes++;
    if (searchMistakes >= 5) {
        showNotification('Gra zakończona! Przekroczyłeś limit błędnych odpowiedzi.', 'error');
        setTimeout(() => {
            location.reload();
        }, 4000); // 4-sekundowe opóźnienie przed zakończeniem gry
    }
}

// Funkcja przechodząca do następnego etapu po znalezieniu kartki
function continueToNextStage() {
    document.getElementById('note-stage').style.display = 'none';
    document.getElementById('stage32').style.display = 'block';
}

// Funkcja przechodząca do etapu 34
function continueToStage34() {
    document.getElementById('stage32').style.display = 'none';
    document.getElementById('stage34').style.display = 'block';
}

// Funkcja sprawdzająca końcowe hasło
function checkFinalPassword() {
    const input = document.getElementById('input8').value;
    if (input.toLowerCase() === 'jutrzyńska 10') {
        document.getElementById('stage34').style.display = 'none';
        document.getElementById('final-stage').style.display = 'block';
    } else {
        showNotification('Niepoprawne hasło. Spróbuj ponownie.', 'error');
    }
}

// Funkcja wyświetlająca podpowiedzi w etapie 34
function showHint3() {
    const hint3 = document.getElementById('hint3');
    const hint4 = document.getElementById('hint4');
    hint3.style.display = 'block';
    setTimeout(() => { hint4.textContent = 'mniej niż 5'; }, 60000);
    setTimeout(() => { hint4.textContent += ', więcej niż 2'; }, 120000);
    setTimeout(() => { hint4.textContent += ', abcdefghijklmnopqrstuvwxyz'; }, 180000);
}

// Funkcja kończąca grę
function endGame() {
    alert('Brawo! Ukończyłeś grę!');
    location.reload();
}
