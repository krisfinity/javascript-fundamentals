
const cardArray = [
    {
        name:'fries ',
        img:'images/fries.jpg',
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburGer.png',
    },
    {
        name:'hotdog',
        img: 'images/hot dog.jpg',
    },
    {
        name:'ice-cream',
        img:'images/ice cream.jpg',

    },
    {
        name:'milkshake',
        img: 'images/milkshake.jpg',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',
    },

    {
        name:'fries ',
        img:'images/fries.jpg',
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburGer.png',
    },
    {
        name:'hotdog',
        img: 'images/hot dog.jpg',
    },
    {
        name:'ice-cream',
        img:'images/ice cream.jpg',

    },
    {
        name:'milkshake',
        img: 'images/milkshake.jpg',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',
    }
]

cardArray.sort( () => 0.5 - Math.random() )

const gridDisplay = document.querySelector('#grid')

console.log(gridDisplay)

function createBoard () {
    for (let i = 0; i < 10; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/milkshake.jpg')
   
}
}

createBoard()


