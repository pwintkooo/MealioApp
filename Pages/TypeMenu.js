import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image} from "react-native";
import {dataSource} from "../DataSource";
import Icon from "react-native-vector-icons/FontAwesome6";
import Toast from 'react-native-toast-message';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // marginTop: 25,
        marginLeft: 7
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
        width: 100,
        height: 70,
        borderRadius: 10
    },
    menuBox: {
        gap: 20,
        backgroundColor: '#D9D9D9',
        marginBottom: 10,
        borderRadius: 10,
        width: 170,
        padding: 7,
        height: "auto",
        marginLeft: 15,
    },
    sectionContainer: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
    },
    menuImgStyle: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    menuName: {
        fontSize: 20,
        height: 50
    },
    menuDesc: {
        fontSize: 16,
        height: 80
    },
    menuPrice: {
        fontWeight: 'bold',
        fontSize: 18
    },
    menuReview: {
        fontSize: 16,
        marginBottom: 10
    },
    cart: {
        width: 30,
        height: 30,
        backgroundColor: 'green',
        borderBottomRightRadius: 10,
        display: "flex",
        justifyContent: 'center',
        position: 'absolute',
        bottom: -7,
        right: -7
    },
    flatContainer: {
        backgroundColor: 'white',
        flex: 1,
    }
})

const TypeMenu = ({navigation, route, addToCart}) => {
    const result = dataSource.flatMap(item=> item.data.filter(
        data => data.type === route.params.type
    ))

    const renderItem = ({item}) => {
        return(
            <View style={styles.menuBox}>
                <View style={{alignItems: "center"}}>
                    <Image style={styles.imgStyle} source={item.image}/>
                </View>
                <View style={{padding: 5}}>
                    <Text style={styles.menuName}>{item.name}</Text>
                    <Text style={styles.menuDesc}>{item.desc}</Text>
                    <Text style={styles.menuReview}><Icon name='star' size={20} style={{color: 'green'}}/>{item.review} (review)</Text>
                    <Text style={styles.menuPrice}>${item.price}</Text>
                    <TouchableOpacity
                        style={styles.cart}
                        onPress={() => handleAddToCart(item)}
                    >
                        <Icon name='cart-shopping' style={{color: 'white', textAlign: 'center'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const handleAddToCart = (item) => {
        addToCart(item);
        Toast.show({
            type: "success",
            position: "bottom",
            text1: `Item added to the cart!`,
            visibilityTime: 2000,
        })
    }

    return(
        <View style={styles.flatContainer}>
            <FlatList
                data={result}
                renderItem={renderItem}
                numColumns={2}
                ListHeaderComponent={
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Icon name="angle-left" size={30} style={{color: 'green'}}/>
                        </TouchableOpacity>
                        <Text style={styles.titleStyle}>{route.params.type}</Text>
                    </View>
                }
            />
            <Toast/>
        </View>
    )
}

export default TypeMenu;
