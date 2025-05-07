import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';
import ShopMenu from './ShopMenu';
import TypeMenu from "./TypeMenu";
import Cart from "./Cart";
import Search from "./Search"
import LandingPage from "./LandingPage";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [cart, setCart] =useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.name === item.name);

            if (existingItem) {
                existingItem.count += 1
                return [...prevCart]
            } else {
                return [...prevCart, {...item, count: 1}]
            }
        });
    }

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='LandingPage' component={LandingPage}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen
                    name="ShopMenu"
                    children={(props) => (
                        <ShopMenu {...props} addToCart={addToCart} />
                    )}
                />
                <Stack.Screen
                    name='TypeMenu'
                    children={(props) => (
                        <TypeMenu {...props} addToCart={addToCart}/>
                    )}/>
                <Stack.Screen
                    name="Cart"
                    children={(props) => (
                        <Cart {...props}
                              cart={cart}
                              setCart={setCart}
                        />
                    )}
                />
                <Stack.Screen name='Search' component={Search}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
