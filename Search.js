import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, StatusBar} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import {dataSource} from "./DataSource";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        height: 40,
        padding: 5
    },
    noResults: {
        marginTop: 20
    },
    flatContainer: {
        marginTop: 20
    },
    titleStyle: {
        fontSize: 20,
        marginBottom: 5
    }
})

const Search = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = dataSource.filter(restaurant =>
        restaurant.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const renderRestaurant = ({item}) => {
        return(
            <TouchableOpacity
                onPress={() => navigation.navigate('ShopMenu', {shop: item.title})}
            >
                <Text style={styles.titleStyle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <View>
                <StatusBar/>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Icon name='angle-left' size={30} style={{ color: 'green' }} />
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search for restaurants..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>
            {searchQuery === '' ? (
                <Text style={styles.noResults}>Start typing to search for restaurants...</Text>
            ) : (
                <FlatList
                    data={filteredData}
                    renderItem={renderRestaurant}
                    keyExtractor={(item) => item.title}
                    ListEmptyComponent={
                        <Text style={styles.noResults}>No restaurants found.</Text>
                    }
                    contentContainerStyle={styles.flatContainer}
                />
            )}
        </View>
    )
}

export default Search;
