# MealioApp 🍔

A React Native mobile application for browsing and ordering food from various restaurants.  Built with Expo and React Navigation, MealioApp provides an intuitive interface for exploring different food categories, viewing restaurant menus, and managing your cart.

## Features

- 🏠 **Home Screen**:  Browse popular restaurants and food categories
- 🔍 **Search Functionality**: Find your favorite meals quickly
- 🍕 **Category Browsing**: Filter meals by type (Chicken, Burger, Pizza, Drinks, Desserts, Snacks, Seafood)
- 🛒 **Shopping Cart**: Add items, manage quantities, and checkout
- 📱 **Restaurant Menus**: View detailed menus from KFC, McDonald's, and more
- 🎯 **Meal Details**: See descriptions, prices, and reviews for each item

## Tech Stack

- **React Native** (0.76.5) - Mobile app framework
- **Expo** (~52.0.20) - Development platform
- **React Navigation** (v7) - Navigation library
- **React Native Vector Icons** - Icon library
- **React Native Toast Message** - Toast notifications
- **React Native Picker** - Dropdown selector components

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your mobile device (for testing)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/pwintkooo/MealioApp.git
cd MealioApp
```

2. Install dependencies:
```bash
npm install
```

## Running the App

Start the development server: 

```bash
npm start
```

### Platform-specific commands:

- **Android**: `npm run android`
- **iOS**: `npm run ios`
- **Web**: `npm run web`

Scan the QR code with the Expo Go app (Android) or Camera app (iOS) to run the app on your device.

## Project Structure

```
MealioApp/
├── Pages/
│   ├── Navigation.js      # Navigation configuration
│   ├── LandingPage.js     # Welcome/landing screen
│   ├── Home. js            # Main home screen
│   ├── Search. js          # Search functionality
│   ├── TypeMenu.js        # Category-based menu
│   ├── ShopMenu.js        # Restaurant-specific menu
│   └── Cart.js            # Shopping cart
├── images/                # Image assets
├── assets/                # Other assets
├── DataSource.js          # Mock data for restaurants and meals
├── App.js                 # Root component
├── index.js               # Entry point
└── package.json           # Dependencies and scripts
```

## Available Restaurants

The app currently features: 
- **KFC** - Hot Wings, Original Recipe Chicken, Zinger Burger, Popcorn Chicken, French Fries
- **McDonald's** - McChicken, Big Mac, Quarter Pounder with Cheese, Apple Pie
- *(More restaurants can be added via DataSource.js)*

## Food Categories

- 🍗 Chicken
- 🍔 Burger
- 🍕 Pizza
- 🥤 Drinks
- 🍰 Desserts
- 🍿 Snacks
- 🦐 Seafood

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

**pwintkooo**
- GitHub:  [@pwintkooo](https://github.com/pwintkooo)

## Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons from [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- Navigation powered by [React Navigation](https://reactnavigation.org/)

---

Made with ❤️ using React Native
