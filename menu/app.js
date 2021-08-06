// * items
const menu = [
    {
        id: 1,
        title: "Latte",
        category: "espresso",
        price: 5.99,
        img: "./assets/espresso.jpeg",
        desc: 'akfjah;dkfjhadlkf adfkjhald fadhfl askjdfhlas dflka dlkfjhasldjhfsd',
    },
    {
        id: 2,
        title: "Green Tea",
        category: "tea",
        price: 1.00,
        img: "./assets/tea.jpeg.jpeg",
        desc: 'akfjah;dkfjhadlkf adfkjhald fadhfl askjdfhlas dflka dlkfjhasldjhfsd',
    },
    {
        id: 3,
        title: "Orange Juice",
        category: "juice",
        price: 8.00,
        img: "./assets/juice.jpeg",
        desc: 'akfjah;dkfjhadlkf adfkjhald fadhfl askjdfhlas dflka dlkfjhasldjhfsd ;safhaphfd',
    },
    {
        id: 4,
        title: "Cortado",
        category: "espresso",
        price: 6.00,
        img: "./assets/espresso.jpeg",
        desc: 'akfjah;dkfjhadlkf adfkjhald fadhfl askjdfhlas dflka dlkfjhasldjhfsd',
    },
    {
        id: 5,
        title: "Latte",
        category: "espresso",
        price: 9.00,
        img: "./assets/espresso.jpeg",
        desc: 'akfjah;dkfjhadlkf adfkjhald fadhfl askjdfhlas dflka dlkfjhasldjhfsd',
    },
    {
        id: 6,
        title: "Psycedelic Mushroom Tea",
        category: "tea",
        price: 1.70,
        img: "./assets/tea.jpeg",
        desc: 'akfjah;dkfjhadlkf adfkjhald fadhfl askjdfhlas dflka dlkfjhasldjhfsd',
    },
];

const itemsContainer = document.querySelector('.items-container');

// todo: when the page loads you need the items to display themselves in the correct divs
// * window variable means the entire page. then a addEventListener listens for whatever the next command is (- ex: DOMContentLoaded or click within parenthesis -)

window.addEventListener('DOMContentLoaded', function(){
    // console.log('sfdasfda');
    // * let means it's able to change it's value. next is the name you want to call it, the menu is the array you want to take data from, j
    let displayItems = menu.map(function(info) {
        // console.log(info);
        // ! OK BIG FUCKIN REALIZATION: don't use single quotes in this type of function use the ``     apperently '' is different then `` i just wasted 30mins trying to figure this shit out
        return `<article class="menu-item">
        <img src="${info.img}" class="photo">
        <div class="item-info">
            <header class="item-info-header">
                <h4>${info.title}</h4>
                <h4 class="price">$${info.price}</h4>
            </header>
            <p class="item-text">${info.desc}</p>
        </div>
    </article>`;
    });
    // todo: you want this function to be one string so that no matter how many items are added this will run, this works by being applied to the menu items container. the JOIN method is how we do that
    displayItems = displayItems.join
     console.log(displayItems);
});