import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    SectionList,
    StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import {dataSource} from "./DataSource";
import {types} from './DataSource'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        // marginTop: 25
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: '600',
        color: 'green'
    },
    searchText: {
        fontSize: 18,
        backgroundColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 20,
        textAlign: "center",
        padding: 7,
        margin: 20,
    },
    typeStyle: {
        width: 75,
        height: 100,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: 'black',
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        padding: 4
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginBottom: 10,
    },
    flatContainer: {
        gap: 10,
    },
    sectionContainer: {
        padding: 15,
        backgroundColor: 'white',
    },
    opacityStyle: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        display: "flex",
        flexDirection: 'row',
        gap: 20
    },
    menuContent: {
        width: '75%'
    },
    menuImgStyle: {
        width: 70,
        height: 70,
        borderRadius: 10,
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
    logoContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        gap: 240,
        marginBottom: 20
    },
    logo: {
        width: 90,
        height: 50
    },
    cartBox: {
        width: 40,
        height: 40,
        borderStyle: "solid",
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

const Home = ({navigation}) => {
    const renderItemType = ({item, index}) => {
        return(
            <TouchableOpacity
                style={styles.typeStyle}
                onPress={() =>
                    navigation.navigate('TypeMenu', {index: index, type: item.type})}
            >
                <Image source={item.image} style={styles.imgStyle} />
                <Text>{item.type}</Text>
            </TouchableOpacity>
        )
    }

    const renderItemMenu = ({item, index, section}) => {
        return(
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() =>
                    navigation.navigate('ShopMenu', {index: index, shop: section.title})}
            >
                <View>
                    <Image style={styles.menuImgStyle} source={item.image}/>
                </View>
                <View style={styles.menuContent}>
                    <Text style={styles.menuName}>{item.name}</Text>
                    <Text style={styles.menuDesc}>{item.desc}</Text>
                    <Text style={styles.menuPrice}>${item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <SectionList
            sections={dataSource}
            renderItem={renderItemMenu}
            contentContainerStyle={styles.sectionContainer}
            ListHeaderComponent={
                <View style={styles.container}>
                    <StatusBar/>
                    <View style={styles.logoContainer}>
                        <Image source={require('./images/mealio1.png')} style={styles.logo}/>
                        <TouchableOpacity
                            style={styles.cartBox}
                            onPress={() => navigation.navigate('Cart')}
                        >
                            <Icon name='cart-shopping' size={20} style={{color: 'green'}}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>What would you like to order?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Text style={styles.searchText}>
                            <Icon name="magnifying-glass" size={18}/>
                            Find for restaurants...
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                        data={types}
                        renderItem={renderItemType}
                        horizontal={true}
                        contentContainerStyle={styles.flatContainer}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            }
        />
    )
}

export default Home;
