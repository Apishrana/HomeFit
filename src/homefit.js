const allCards = [
    {
        id: 1,
        name: 'GreenView Residency',
        location: 'Indiranagar, Bengaluru',
        price: '28,000',
        specifications: '2 BHK',
        healthScore: 79,
        image: '../assets/houses/house1.png',
    },
    {
        id: 2,
        name: 'Skyline Heights',
        location: 'Whitefield, Bengaluru',
        price: '40,000',
        specifications: '3 BHK',
        healthScore: 91,
        image: '../assets/houses/house2.png',
    },
    {
        id: 3,
        name: 'Palm Grove Homes',
        location: 'Yelahanka, Bengaluru',
        price: '18,000',
        specifications: '1 BHK',
        healthScore: 54,
        image: '../assets/houses/house3.png',
    },
    {
        id: 4,
        name: 'LakeView Enclave',
        location: 'Jayanagar, Bengaluru',
        price: '30,000',
        specifications: '3 BHK',
        healthScore: 84,
        image: '../assets/houses/house4.png',
    },
    {
        id: 5,
        name: 'Urban Nest',
        location: 'BTM Layout, Bengaluru',
        price: '22,000',
        specifications: '1 BHK',
        healthScore: 67,
        image: '../assets/houses/house5.png',
    },
    {
        id: 6,
        name: 'Silver Oak Apartments',
        location: 'HSR Layout, Bengaluru',
        price: '35,000',
        specifications: '2 BHK',
        healthScore: 88,
        image: '../assets/houses/house6.png',
    },
    {
        id: 7,
        name: 'Emerald Heights',
        location: 'Koramangala, Bengaluru',
        price: '45,000',
        specifications: '3 BHK',
        healthScore: 93,
        image: '../assets/houses/house7.png',
    },
    {
        id: 8,
        name: 'Studio One Central',
        location: 'Electronic City, Bengaluru',
        price: '16,000',
        specifications: 'Studio',
        healthScore: 49,
        image: '../assets/houses/house8.png',
    },
    {
        id: 9,
        name: 'Maple Residency',
        location: 'Malleshwaram, Bengaluru',
        price: '26,000',
        specifications: '2 BHK',
        healthScore: 73,
        image: '../assets/houses/house9.png',
    },
    {
        id: 10,
        name: 'Prestige Grand Villas',
        location: 'Sadashivanagar, Bengaluru',
        price: '55,000',
        specifications: '4 BHK',
        healthScore: 96,
        image: '../assets/houses/house10.png',
    },
    {
        id: 11,
        name: 'Sunrise Meadows',
        location: 'Banashankari, Bengaluru',
        price: '24,000',
        specifications: '2 BHK',
        healthScore: 71,
        image: '../assets/houses/house11.png',
    },
    {
        id: 12,
        name: 'Crystal Park',
        location: 'Rajajinagar, Bengaluru',
        price: '32,000',
        specifications: '3 BHK',
        healthScore: 86,
        image: '../assets/houses/house12.png',
    },
    {
        id: 13,
        name: 'Blue Horizon',
        location: 'Marathahalli, Bengaluru',
        price: '27,000',
        specifications: '2 BHK',
        healthScore: 75,
        image: '../assets/houses/house13.png',
    },
    {
        id: 14,
        name: 'Oakwood Residency',
        location: 'Hebbal, Bengaluru',
        price: '29,000',
        specifications: '2 BHK',
        healthScore: 81,
        image: '../assets/houses/house14.png',
    },
    {
        id: 15,
        name: 'Metro Studio Living',
        location: 'MG Road, Bengaluru',
        price: '20,000',
        specifications: 'Studio',
        healthScore: 63,
        image: '../assets/houses/house15.png',
    },
    {
        id: 16,
        name: 'Gardenia Homes',
        location: 'Kengeri, Bengaluru',
        price: '21,000',
        specifications: '1 BHK',
        healthScore: 69,
        image: '../assets/houses/house16.png',
    },
    {
        id: 17,
        name: 'Royal Crest',
        location: 'RT Nagar, Bengaluru',
        price: '34,000',
        specifications: '3 BHK',
        healthScore: 87,
        image: '../assets/houses/house17.png',
    },
    {
        id: 18,
        name: 'Serene Square',
        location: 'JP Nagar, Bengaluru',
        price: '31,000',
        specifications: '3 BHK',
        healthScore: 83,
        image: '../assets/houses/house18.png',
    },
    {
        id: 19,
        name: 'Tech Park View',
        location: 'Outer Ring Road, Bengaluru',
        price: '38,000',
        specifications: '3 BHK',
        healthScore: 89,
        image: '../assets/houses/house19.png',
    },
    {
        id: 20,
        name: 'Willow Creek',
        location: 'Sarjapur Road, Bengaluru',
        price: '25,000',
        specifications: '2 BHK',
        healthScore: 74,
        image: '../assets/houses/house20.png',
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
