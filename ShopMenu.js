import React, {useState} from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import {dataSource} from "./DataSource";
import Icon from "react-native-vector-icons/FontAwesome6";
import Toast from 'react-native-toast-message';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // marginTop: 20
    },
    titleStyle: {
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20,
        marginTop: 10
    },
    typeNav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: '75%',
        marginBottom: 20
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
        marginLeft: 14
    },
    selectedNav: {
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: 'green',
        paddingBottom: 5
    }
})

const ShopMenu = ({navigation,route, addToCart}) => {
    const filterShop = dataSource.filter(shop => shop.title === route.params.shop)
    const allItems = filterShop.flatMap(item => item.data)
    const [items, setItems] = useState(allItems);
    const [selectedCate, setSelectedCate] = useState('All');

    const handleAddToCart = (item) => {
        addToCart(item);
        Toast.show({
            type: "success",
            position: "bottom",
            text1: `Item added to the cart!`,
            visibilityTime: 2000,
        })
    }

    const filter = (category) => {
        setSelectedCate(category)
        if (category === 'All') {
            setItems(allItems);
        } else {
            const filteredItems = allItems.filter(item => item.category === category);
            setItems(filteredItems)
        }
    }

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

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
                data={items}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.flatContainer}
                ListHeaderComponent={
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Icon name='angle-left' size={30} style={{color: 'green'}}/>
                        </TouchableOpacity>
                        <Text style={styles.titleStyle}>{route.params.shop}</Text>
                        <View style={styles.typeNav}>
                            <TouchableOpacity onPress={() => filter('All')}>
                                <Text style={selectedCate === 'All' ? styles.selectedNav : null}>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => filter('Popular')}>
                                <Text style={selectedCate === 'Popular' ? styles.selectedNav : null}>Popular</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => filter('New')}>
                                <Text style={selectedCate === 'New' ? styles.selectedNav : null}>New</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => filter('Best Seller')}>
                                <Text style={selectedCate === 'Best Seller' ? styles.selectedNav : null}>Best Seller</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            />
            <Toast/>
        </View>
    )
}

export default ShopMenu;
