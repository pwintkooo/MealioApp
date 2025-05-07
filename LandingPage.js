import React, {useEffect} from "react";
import {View, Image, Text, StyleSheet, StatusBar} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00A115',
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    imgStyle: {
        height: 400,
        width: 300,
        resizeMode: "contain",
        marginBottom: 40
    }
})

const LandingPage = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);
    return(
        <View style={styles.container}>
            <StatusBar/>
            <Image style={styles.imgStyle} source={require('./images/mealio2.png')}/>
        </View>
    )
}

export default LandingPage;
