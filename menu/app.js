// TODO: DYNAMIC BTNS
// todo: step 1:get/select all unique (ones that aren't even there yet) btns
// todo: step 2:iterate over categories and return btns
// todo: step 3:make sure to select btns when they are availeavle

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
        img: "./assets/tea.jpeg",
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
    {
        id: 7,
        title: "Dragon Smoothie",
        category: "smoothie",
        price: 80.22,
        img: "./assets/smoothie.png",
        desc: 'akfjah;dkfjhadlkf adfkjhald fadhfl askjdfhlas dflka dlkfjhasldjhfsd dkfjhadlkf adfkjhald fadhfl dkfjhadlkf adfkjhald fadhfl',
    },
];

const itemsContainer = document.querySelector('.items-container');
// const filterBtns = document.querySelectorAll('.filter-btn');
const btnContainer = document.querySelector('.btn-container');
// console.log(filterBtns);

// todo: when the page loads you need the items to display themselves in the correct divs
// * window variable means the entire page. then a addEventListener listens for whatever the next command is (- ex: DOMContentLoaded or click within parenthesis -)

window.addEventListener('DOMContentLoaded', function(){
        // !new code using the global function: (syntax : name of function + array u want to cycle through)


        displayProducts(menu);
        displayBtns();


              // const categories = menu.reduce(function(values,item){
        //     // *the ! means if its not equivilent to values
        //     if(!values.includes(item.category)){
        //         values.push(item.category);
        //     }
        //     return values
        // },['all'])
      
    // console.log('sfdasfda');
    // let means it's able to change it's value. next is the name you want to call it, the menu is the array you want to take data from, j
    // let displayItems = menu.map(function(info) {
    //     // console.log(info);
    //     // ! OK BIG FUCKIN REALIZATION: don't use single quotes in this type of function use the ``     apperently '' is different then `` i just wasted 30mins trying to figure this shit out

    //     return `<article class="menu-item">
    //     <img src="${info.img}" class="photo">
    //     <div class="item-info">
    //         <header class="item-info-header">
    //             <h4>${info.title}</h4>
    //             <h4 class="price">$${info.price}</h4>
    //         </header>
    //         <p class="item-text">${info.desc}</p>
    //     </div>
    // </article>`;
    // });
    
    // // todo: you want this function to be one string so that no matter how many items are added this will run, this works by being applied to the menu items container. the JOIN method is how we do that. 
    // displayItems = displayItems.join("")
    // //  console.log(displayItems);

    // // * this adds all that code to the itemcontainer
    // itemsContainer.innerHTML = displayItems;
});

// todo: take everything that's in the function above and put it here so it can be a global function
function displayProducts(menuProducts) {
            // * so you want to change the menu array to the param you set so that it can be flexible in where you put the function { menu -> menuProducts } so then you can take this function and set the array to which one you want
    let displayItems = menuProducts.map(function(info) {
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
    displayItems = displayItems.join("");
    // * items container specifies the div, innerhtml returns the function, the function adds the article
    itemsContainer.innerHTML = displayItems;
};

// todo: make a function that adds a button if a new category is added
function displayBtns() {
    const categories = menu.reduce( function (values,item) {
        // *the ! means if its not equivilent to values
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['all']);
    const categoryBtns = categories.map(function(category){
        return `<button type="button" class="filter-btn" data-category="${category}">${category}</button>`;
    })
    .join("");
    // console.log(categoryBtns); // wroked
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

    //  todo: filter items. before setting any event listeners you need to set up a .foreach to target singular btns 
    filterBtns.forEach(function(filterBtn){
        // * now add a eventlistener
        filterBtn.addEventListener('click', function(e){
            // ! currentTarget.dataset is going to allow you to set a data value to an html element. in this case it's set to a button event
            // console.log(e.currentTarget.datdset.category);
            const category = e.currentTarget.dataset.category;
            // * displayProducts is looking for an array to filter so you need to create a new array. use .filter to filter what you want to grab out of the array using an if function
            const itemsCategory = menu.filter(function(menuItem){
                // console.log(menuItem.category);
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
            if(category == 'all') {
                displayProducts(menu);
            }
            else {
                displayProducts(itemsCategory);
            };
            // displayProducts(itemsCategory);
        });
    });
};