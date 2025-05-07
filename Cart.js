import React, {useState} from "react";
import {View, Text, TouchableOpacity, FlatList, StyleSheet, Image, StatusBar} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import Toast from 'react-native-toast-message';

const styles = StyleSheet.create({
    flatContainer: {
        padding: 20,
        // marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
    titleStyle: {
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20,
        marginTop: 10
    },
    imgStyle: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    menuName: {
        fontSize: 20,
        marginBottom: 10
    },
    menuDesc: {
        fontSize: 16,
        marginBottom: 10
    },
    menuPrice: {
        fontWeight: 'bold',
        fontSize: 18
    },
    menuContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        height: "auto",
        padding: 5,
        marginBottom: 20
    },
    menuContent: {
        width: 200
    },
    escapeStyle: {
        position: "absolute",
        right: 0
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
        bottom: 0,
        gap :5
    },
    minusStyle: {
        borderStyle: "solid",
        borderColor: 'green',
        borderWidth: 1,
        width: 20,
        height: 20,
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    plusStyle: {
        backgroundColor: 'green',
        width: 20,
        height: 20,
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    summaryContainer: {
        width: 350,
        marginTop: 15,
    },
    summaryItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    totalContainer: {
        display: "flex",
        flexDirection: "row"
    },
    checkOutButton: {
        backgroundColor: 'green',
        width: 100,
        height: 40,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 130,
        marginTop: 20
    },
    checkOutStyle: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold"
    },
    noItemDisplay: {
        fontSize: 25,
        color: 'white',
        textAlign: "center",
        marginTop: 25,
        backgroundColor: 'green',
        padding: 7,
        borderRadius: 10
    }
})

const Cart = ({navigation, cart, setCart}) => {
    const handleIncreaseCount = (item) => {
        setCart(prevCart =>
            prevCart.map(cartItem =>
                cartItem.name === item.name
                ? {...cartItem, count: cartItem.count +1}
                    : cartItem
            )
        )
    }

    const handleDecreaseCount = (item) => {
        setCart(prevCart =>
            prevCart.map(cartItem =>
                cartItem.name === item.name
                ? cartItem.count > 1
                    ? {...cartItem, count: cartItem.count - 1}
                    : cartItem
                    : cartItem
            )
        )
    }

    const handleRemoveItem = (item) => {
        setCart(prevCart =>
            prevCart.filter(cartItem => cartItem.name !== item.name)
        )
    }

    const tax = 3.3;
    const delivery = 4.00;
    let subTotal = 0;
    let totalItems = 0;

    cart.forEach(cartItem => {
            const amount = cartItem.price * cartItem.count
            totalItems += cartItem.count
            subTotal += amount
        },
    )

    const total = tax+delivery+subTotal;

    const renderItem = ({item}) => {
        return(
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.escapeStyle}
                    onPress={() => handleRemoveItem(item)}
                >
                    <Icon name='times-circle' size={25}/>
                </TouchableOpacity>
                <View>
                    <Image style={styles.imgStyle} source={item.image}/>
                </View>
                <View style={styles.menuContent}>
                    <Text style={styles.menuName}>{item.name}</Text>
                    <Text style={styles.menuDesc}>{item.desc}</Text>
                    <Text style={styles.menuPrice}>${item.price}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.minusStyle}
                        onPress={() => handleDecreaseCount(item)}
                    >
                        <Icon name='minus' size={15} style={{color: 'green'}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 25}}>{item.count}</Text>
                    <TouchableOpacity
                        style={styles.plusStyle}
                        onPress={() => handleIncreaseCount(item)}
                    >
                        <Icon name='plus' size={15} style={{color: 'white'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const handleCheckOut = () => {
        setCart([]);
        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Checkout Successful!',
        });
        setTimeout(() => {
            navigation.navigate('Home');
        }, 800);
    };

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
                data={cart}
                renderItem={renderItem}
                ListHeaderComponent={
                    <View>
                        <StatusBar/>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Icon name='angle-left' size={30} style={{color: 'green'}}/>
                        </TouchableOpacity>
                        <Text style={styles.titleStyle}>Cart</Text>
                    </View>
                }
                contentContainerStyle={styles.flatContainer}
                ListFooterComponent={
                    cart.length === 0 ? (
                        <View>
                            <Text style={styles.noItemDisplay}>There is no item in the cart!</Text>
                        </View>
                    ) : (
                        <View style={styles.summaryContainer}>
                            <View style={styles.summaryItem}>
                                <Text style={{fontSize: 18}}>SUBTOTAL</Text>
                                <Text style={{fontSize: 18}}>$ {subTotal.toFixed(2)} SGD</Text>
                            </View>
                            <View style={styles.summaryItem}>
                                <Text style={{fontSize: 18}}>TAX AND FEES</Text>
                                <Text style={{fontSize: 18}}>$ {tax.toFixed(2)} SGD</Text>
                            </View>
                            <View style={styles.summaryItem}>
                                <Text style={{fontSize: 18}}>DELIVERY</Text>
                                <Text
                                    style={{fontSize: 18,
                                        color: subTotal > 55 ? 'green': 'black',
                                        fontStyle: subTotal > 55 ? 'italic' : ''
                                    }}
                                >
                                    {subTotal > 55 ? "Free" : `$ ${delivery.toFixed(2)} SGD`}
                                </Text>
                            </View>
                            <View style={styles.summaryItem}>
                                <View style={styles.totalContainer}>
                                    <Text style={{fontSize: 18}}>TOTAL</Text>
                                    <Text style={{color: 'grey'}}>({totalItems} ITEMS)</Text>
                                </View>
                                <Text style={{fontSize: 18}}>$ {total.toFixed(2)} SGD</Text>
                            </View>
                            <TouchableOpacity style={styles.checkOutButton}>
                                <Text
                                    style={styles.checkOutStyle}
                                    onPress={handleCheckOut}
                                >
                                    CHECK OUT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            />
            <Toast/>
        </View>
    )
}

export default Cart;
