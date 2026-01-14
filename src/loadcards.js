const houseList = [
    {
        id: 1,
        name: 'Temp',
        location: 'Blr, India',
        price: '28,000',
        specifications: '2 BHK',
        healthScore: 82,
        image: './assets/houses/house1.png',
    },
    {
        id: 2,
        name: 'Temp',
        location: 'Blr, India',
        price: '40,000',
        specifications: '3 BHK',
        healthScore: 90,
        image: './assets/houses/house2.png',
    },
    {
        id: 3,
        name: 'Temp',
        location: 'Blr, India',
        price: '18,000',
        specifications: '1 BHK',
        healthScore: 50,
        image: './assets/houses/house3.png',
    },
    {
        id: 4,
        name: 'Temp',
        location: 'Blr, India',
        price: '30,000',
        specifications: '3 BHK',
        healthScore: 82,
        image: './assets/houses/house4.png',
    },
    {
        id: 5,
        name: 'Temp',
        location: 'Blr, India',
        price: '22,000',
        specifications: '1 BHK',
        healthScore: 65,
        image: './assets/houses/house5.png',
    },
    {
        id: 6,
        name: 'Temp',
        location: 'Blr, India',
        price: '35,000',
        specifications: '2 BHK',
        healthScore: 88,
        image: './assets/houses/house6.png',
    },
    {
        id: 7,
        name: 'Temp',
        location: 'Blr, India',
        price: '45,000',
        specifications: '3 BHK',
        healthScore: 92,
        image: './assets/houses/house7.png',
    },
    {
        id: 8,
        name: 'Temp',
        location: 'Blr, India',
        price: '16,000',
        specifications: 'Studio',
        healthScore: 48,
        image: './assets/houses/house8.png',
    },
    {
        id: 9,
        name: 'Temp',
        location: 'Blr, India',
        price: '26,000',
        specifications: '2 BHK',
        healthScore: 72,
        image: './assets/houses/house9.png',
    },
    {
        id: 10,
        name: 'Temp',
        location: 'Blr, India',
        price: '55,000',
        specifications: '4 BHK',
        healthScore: 95,
        image: './assets/houses/house10.png',
    },
];

const usedCardId = [];

const cardElements = document.getElementsByClassName('card');

for (let i = 0; i < cardElements.length; i++) {
    let randomHouse = getRandomHouse();
    let currentCard = cardElements[i];
    currentCard.getElementsByClassName('card-img')[0].src = randomHouse.image;
    currentCard.getElementsByClassName('card-img')[0].alt = randomHouse.image;
    currentCard
        .getElementsByClassName('card-disc')[0]
        .getElementsByClassName('card-info')[0].innerText =
        '₹ ' + randomHouse.price + ' · ' + randomHouse.specifications;
    currentCard
        .getElementsByClassName('card-disc')[0]
        .getElementsByClassName('card-health')[0].innerText =
        'Health Score: ' + randomHouse.healthScore;
}

function getRandomHouse() {
    let randomIndex = Math.floor(Math.random() * houseList.length);
    let selectedHouse = houseList[randomIndex];

    if (usedCardId.includes(selectedHouse.id)) {
        return getRandomHouse();
    }
    usedCardId.push(selectedHouse.id);
    return selectedHouse;
}
