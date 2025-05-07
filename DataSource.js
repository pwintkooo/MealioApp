const types = [
    {
        type: 'Chicken',
        image: require('./images/chicken.jpg')
    },
    {
        type: 'Burger',
        image: require('./images/burger.jpg')
    },
    {
        type: 'Pizza',
        image: require('./images/pizza.jpg')
    },
    {
        type: 'Drinks',
        image: require('./images/drinks.jpg')
    },
    {
        type: 'Desserts',
        image: require('./images/desserts.jpg')
    },
    {
        type: 'Snacks',
        image: require('./images/snacks.jpg')
    },
    {
        type: 'Seafood',
        image: require('./images/seafood.jpg')
    },
]


const dataSource = [
    {
        title: 'KFC',
        data: [
            {
                name: 'Hot Wings (6 pcs)',
                desc: 'Chicken wings, spicy seasoning',
                price: 4.99,
                review: '4.9',
                image: require('./images/hotWings.jpg'),
                category: 'Best Seller',
                type: 'Chicken'
            },
            {
                name: 'Original Recipe Chicken (2pcs)',
                desc: "Chicken, 11 herbs and spices",
                price: 10.99,
                review: '4.8',
                image: require('./images/originalRecipe.jpg'),
                category: 'Popular',
                type: 'Chicken'
            },
            {
                name: 'Zinger Burger',
                desc: 'Chicken fillet, lettuce, sesame seed bun',
                price: 5.99,
                review: '4.9',
                image: require('./images/zingerBurger.jpg'),
                category: 'Best Seller',
                type: 'Burger'
            },
            {
                name: 'Popcorn Chicken',
                desc: 'Bite-sized crispy chicken pieces',
                price: 3.99,
                review: '4.7',
                image: require('./images/popcornChicken.jpg'),
                category: 'New',
                type: 'Snacks'
            },
            {
                name: 'French Fries',
                desc: 'Crispy golden fries',
                price: 2.99,
                review: '4.5',
                image: require('./images/frenchFries.jpg'),
                category: 'Popular',
                type: 'Snacks'
            }
        ]
    },
    {
        title: "McDonald's",
        data: [
            {
                name: 'McChicken',
                desc: 'Chicken patty, lettuce, mayonnaise',
                price: 3.49,
                review: '4.8',
                image: require('./images/mcChicken.jpg'),
                category: 'Best Seller',
                type: 'Burger'
            },
            {
                name: 'Big Mac',
                desc: 'Beef patties, lettuce, cheese',
                price: 6.49,
                review: '4.9',
                image: require('./images/bigMac.jpg'),
                category: 'New',
                type: 'Burger'
            },
            {
                name: 'Quarter Pounder with Cheese',
                desc: 'Beef patty, cheese, pickles, onions',
                price: 5.99,
                review: '4.9',
                image: require('./images/quarterPounder.jpg'),
                category: 'New',
                type: 'Burger'
            },
            {
                name: 'Apple Pie',
                desc: 'Flaky crust, warm apple filling',
                price: 1.99,
                review: '4.8',
                image: require('./images/applePie.jpg'),
                category: 'Popular',
                type: 'Desserts'
            },
            {
                name: 'Chicken Nuggets (6 pcs)',
                desc: 'Crispy breaded chicken nuggets',
                price: 3.49,
                review: '4.7',
                image: require('./images/chickenNuggets.jpg'),
                category: 'Best Seller',
                type: 'Snacks'
            },
            {
                name: 'Chocolate Lava Cake',
                desc: 'Warm chocolate cake with molten center',
                price: 4.49,
                review: '4.9',
                image: require('./images/chocolateLavaCake.jpg'),
                category: 'New',
                type: 'Desserts'
            }
        ]
    },
    {
        title: 'Pizza Hut',
        data: [
            {
                name: 'Pepperoni Pizza',
                desc: 'Pepperoni, mozzarella cheese, tomato sauce',
                price: 8.99,
                review: '4.9',
                image: require('./images/pepperoniPizza.jpg'),
                category: 'Popular',
                type: 'Pizza'
            },
            {
                name: 'Supreme Pizza',
                desc: 'Pepperoni, sausage, bell peppers, onions, mushrooms',
                price: 12.49,
                review: '4.8',
                image: require('./images/supremePizza.jpg'),
                category: 'New',
                type: 'Pizza'
            },
            {
                name: 'Veggie Pizza',
                desc: 'Mushrooms, bell peppers, onions, black olives',
                price: 7.99,
                review: '4.9',
                image: require('./images/veggiePizza.jpg'),
                category: 'Best Seller',
                type: 'Pizza'
            },
            {
                name: 'Garlic Bread',
                desc: 'Toasted bread with garlic butter',
                price: 3.99,
                review: '4.8',
                image: require('./images/garlicBread.jpg'),
                category: 'Popular',
                type: 'Snacks'
            },
        ]
    },
    {
        title: 'Tiger Sugar',
        data: [
            {
                name: 'Brown Sugar Bubble Tea',
                desc: 'Brown sugar syrup, tapioca pearls, milk',
                price: 4.49,
                review: '5',
                image: require('./images/brownSugar.jpg'),
                category: 'Best Seller',
                type: 'Drinks'
            },
            {
                name: 'Classic Milk Tea',
                desc: 'Black tea, milk, sugar',
                price: 3.99,
                review: '4.9',
                image: require('./images/classicMilkTea.jpg'),
                category: 'Popular',
                type: 'Drinks'
            },
            {
                name: 'Matcha Latte',
                desc: 'Matcha powder, milk, sugar',
                price: 4.99,
                review: '4.9',
                image: require('./images/matchaLatte.jpg'),
                category: 'New',
                type: 'Drinks'
            },
            {
                name: 'Strawberry Smoothie',
                desc: 'Fresh strawberries, milk, ice',
                price: 5.49,
                review: '4.8',
                image: require('./images/strawberrySmoothie.jpg'),
                category: 'New',
                type: 'Drinks'
            },
            {
                name: 'Mango Sago',
                desc: 'Fresh mango, sago pearls, milk',
                price: 5.99,
                review: '5',
                image: require('./images/mangoSago.jpg'),
                category: 'Popular',
                type: 'Desserts'
            }
        ]
    },
    {
        title: 'Red Lobster',
        data: [
            {
                name: 'Garlic Shrimp Scampi',
                desc: 'Shrimp, garlic butter sauce',
                price: 15.99,
                review: '4.9',
                image: require('./images/garlicShrimpScampi.jpg'),
                category: 'Best Seller',
                type: 'Seafood'
            },
            {
                name: 'Lobster Bisque',
                desc: 'Creamy soup with lobster chunks',
                price: 7.99,
                review: '4.8',
                image: require('./images/lobsterBisque.jpg'),
                category: 'Popular',
                type: 'Seafood'
            },
            {
                name: 'Grilled Salmon',
                desc: 'Salmon fillet, lemon butter',
                price: 18.99,
                review: '4.9',
                image: require('./images/grilledSalmon.jpg'),
                category: 'New',
                type: 'Seafood'
            },
            {
                name: 'Cheddar Bay Biscuits',
                desc: 'Cheddar cheese, garlic, butter',
                price: 3.99,
                review: '4.8',
                image: require('./images/cheddarBayBiscuits.jpg'),
                category: 'Popular',
                type: 'Snacks'
            }
        ]
    }
]


export {dataSource};
export {types};
