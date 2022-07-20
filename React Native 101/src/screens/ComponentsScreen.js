//Part 1 - import libraries
import React from "react";
import {Text, StyleSheet, View} from 'react-native';

//Part 2 - create a component - a function that returns some JSX
const ComponentsScreen = ( )=> {
    const name = 'Rahi Joshi'
    return (
    <View> 
        <Text style={styles.bigTextStyle}>Getting started with React Native!</Text>
        <Text style={styles.smallTextStyle}>My name is {name}</Text>
    </View>
    );
};

//Part 3 - stylesheet to style our component
const styles = StyleSheet.create({
    bigTextStyle: {
        fontSize: 45,
    },
    smallTextStyle: {
        fontSize: 20
    }


});

//Part 4 - export the component so that we can use it elsewhere in our project
export default ComponentsScreen;