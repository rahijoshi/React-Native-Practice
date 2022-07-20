import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1',  age: 'Age 20'},
        { name: 'Friend 2',  age: 'Age 45'},
        { name: 'Friend 3',  age: 'Age 32'},
        { name: 'Friend 4',  age: 'Age 27'},
        { name: 'Friend 5',  age: 'Age 53'},
        { name: 'Friend 6',  age: 'Age 30'},
        { name: 'Friend 7',  age: 'Age 68'},
        
    ]
    return (
        <FlatList 
            keyExtractor = {(friend) => friend.name}
            data = {friends} 
            renderItem={({item}) => {
                //element === {item: {name: 'friend 1'}, index: 0}
                return (
                <Text style = {styles.textStyle}>
                    {item.name}   {item.age}
                </Text>
                )

            }}>

        </FlatList>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        paddingLeft: 50,
        borderWidth: 2,
        borderColor: 'black',
    }
});

export default ListScreen;