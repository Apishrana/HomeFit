const allCards = [
    {
        id: 1,
        name: 'Temp',
        location: 'Blr, India',
        price: '28,000',
        specifications: '2 BHK',
        healthScore: 82,
        image: '../assets/houses/house1.png',
    },
    {
        id: 2,
        name: 'Temp',
        location: 'Blr, India',
        price: '40,000',
        specifications: '3 BHK',
        healthScore: 90,
        image: '../assets/houses/house2.png',
    },
    {
        id: 3,
        name: 'Temp',
        location: 'Blr, India',
        price: '18,000',
        specifications: '1 BHK',
        healthScore: 50,
        image: '../assets/houses/house3.png',
    },
    {
        id: 4,
        name: 'Temp',
        location: 'Blr, India',
        price: '30,000',
        specifications: '3 BHK',
        healthScore: 82,
        image: '../assets/houses/house4.png',
    },
    {
        id: 5,
        name: 'Temp',
        location: 'Blr, India',
        price: '22,000',
        specifications: '1 BHK',
        healthScore: 65,
        image: '../assets/houses/house5.png',
    },
    {
        id: 6,
        name: 'Temp',
        location: 'Blr, India',
        price: '35,000',
        specifications: '2 BHK',
        healthScore: 88,
        image: '../assets/houses/house6.png',
    },
    {
        id: 7,
        name: 'Temp',
        location: 'Blr, India',
        price: '45,000',
        specifications: '3 BHK',
        healthScore: 92,
        image: '../assets/houses/house7.png',
    },
    {
        id: 8,
        name: 'Temp',
        location: 'Blr, India',
        price: '16,000',
        specifications: 'Studio',
        healthScore: 48,
        image: '../assets/houses/house8.png',
    },
    {
        id: 9,
        name: 'Temp',
        location: 'Blr, India',
        price: '26,000',
        specifications: '2 BHK',
        healthScore: 72,
        image: '../assets/houses/house9.png',
    },
    {
        id: 10,
        name: 'Temp',
        location: 'Blr, India',
        price: '55,000',
        specifications: '4 BHK',
        healthScore: 95,
        image: '../assets/houses/house10.png',
    },
];
const unusedCards = [...allCards];

const usedCards = [];

const likedCards = [];

const skippedCards = [];

let currentCard = randCard();

let nextCard = randCard();

function like() {
    disableButtons();
    likedCards.push(currentCard);
    console.log('Like');
    likeAnimation();
    newCard();

    setTimeout(setupCards, 1500);
    setTimeout(resetAnimation, 1500);
    setTimeout(enableButtons, 1500);
}
function info() {
    disableButtons();
    infoAnimation();
    console.log('Info');

    setTimeout(resetAnimation, 1000);
    setTimeout(loadInfo, 950);
}
function skip() {
    disableButtons();
    skippedCards.push(currentCard);
    console.log('Skip');
    skipAnimation();
    newCard();

    setTimeout(setupCards, 1500);
    setTimeout(resetAnimation, 1500);
    setTimeout(enableButtons, 1500);
}

function newCard() {
    console.log('Getting new card');

    currentCard = nextCard;
    nextCard = randCard();

    console.log(currentCard);
    console.log(nextCard);
}

function randCard() {
    let randomIndex = Math.floor(Math.random() * unusedCards.length);
    let selectedHouse = unusedCards[randomIndex];

    unusedCards.splice(randomIndex, 1);
    usedCards.push(selectedHouse);

    checkEmptyList();
    return selectedHouse;
}

function checkEmptyList() {
    if (unusedCards.length == 0) {
        allCards.forEach((i) => {
            unusedCards.push(i);
        });
    }
}

function setupCards() {
    mainCard.getElementsByClassName('card-img')[0].src = currentCard.image;
    mainCard.getElementsByClassName('card-img')[0].alt = currentCard.image;
    mainCard
        .getElementsByClassName('card-disc')[0]
        .getElementsByClassName('card-info')[0].innerText =
        '₹ ' + currentCard.price + ' · ' + currentCard.specifications;
    mainCard
        .getElementsByClassName('card-disc')[0]
        .getElementsByClassName('card-health')[0].innerText =
        'Health Score: ' + currentCard.healthScore;

    subMainCard.getElementsByClassName('card-img')[0].src = nextCard.image;
    subMainCard.getElementsByClassName('card-img')[0].alt = nextCard.image;
    subMainCard
        .getElementsByClassName('card-disc')[0]
        .getElementsByClassName('card-info')[0].innerText =
        '₹ ' + nextCard.price + ' · ' + nextCard.specifications;
    subMainCard
        .getElementsByClassName('card-disc')[0]
        .getElementsByClassName('card-health')[0].innerText =
        'Health Score: ' + nextCard.healthScore;
}

function likeAnimation() {
    mainCard.style.animationName = 'Like';
    mainCard.style.animationIterationCount = 1;
    mainCard.style.animationDuration = '1.5s';
    moveCardAnimation();
}

function skipAnimation() {
    mainCard.style.animationName = 'Skip';
    mainCard.style.animationIterationCount = 1;
    mainCard.style.animationDuration = '1.5s';
    moveCardAnimation();
}

function infoAnimation() {
    mainCard.style.animationName = 'Info';
    mainCard.style.animationIterationCount = 1;
    mainCard.style.animationDuration = '1s';
}

function moveCardAnimation() {
    for (i = 1; i < domCards.length; i++) {
        element = domCards[i];
        element.style.animationName = 'Replace_Card' + i.toString();
        element.style.animationIterationCount = 1;
    }
}

function resetAnimation() {
    for (let index = 0; index < domCards.length; index++) {
        const element = domCards[index];
        element.style.animationName = 'none';
        element.style.animationIterationCount = 0;
        mainCard.style.animationDuration = '1.5s';
    }
}

function enableButtons() {
    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.style.pointerEvents = 'all';
    }
}

function disableButtons() {
    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.style.pointerEvents = 'none';
    }
}

function loadInfo() {
    mainCard.style.transform = 'translateY(-100px) scale(1.05)';
    mainCard.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.4)';
    infoDataElements[0].innerText = currentCard.name;
    infoDataElements[1].innerText = currentCard.location;
    infoDataElements[2].innerText = '₹ ' + currentCard.price;
    infoDataElements[3].innerText = currentCard.specifications;
    infoDataElements[4].innerText = currentCard.healthScore;
    infoBox.style.display = 'block';
}

function unloadInfo() {
    mainCard.style.transform = 'translateY(0) scale(1)';
    mainCard.style.boxShadow = 'none';
    infoBox.style.display = 'none';
    enableButtons();
}

const buttons = document.getElementsByClassName('interaction-button');

const domCards = document.getElementsByClassName('card');

const mainCard = domCards[0];

const subMainCard = domCards[1];

const infoBox = document.getElementById('info-box');

const infoTable = infoBox.getElementsByClassName('info-table')[0];

const infoDataElements = infoTable.getElementsByClassName('info-data');

newCard();
setupCards();
