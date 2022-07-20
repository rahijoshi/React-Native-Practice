import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style = {styles.mainViewStyle}>
            <View style = {styles.childViewStyle1}></View>
            <View style = {styles.childViewStyle2}></View>
            <View style = {styles.childViewStyle3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    childViewStyle1: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },

    childViewStyle2: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'center',
        // marginTop: 100,
        top:100
    },
    
    childViewStyle3: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
        justifyContent: 'flex-end',
    },

    textStyle: {
        backgroundColor: 'yellow',
        borderColor: 'pink',
        borderWidth: 3,
    },
    
});

export default BoxScreen;