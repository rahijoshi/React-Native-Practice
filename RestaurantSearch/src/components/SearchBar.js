import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons'
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({term, onTermChange, onTermSubmit }) => {
    return (
        <View style = {styles.viewStyle}>
            <Feather name = "search" style = {styles.iconStyle}/>
            <TextInput 
                autoCapitalize = 'none'
                autoCorrect = {false}
                placeholder= "Search"
                style = {styles.inputStyle}
                value = {term}
                onChangeText = {newTerm => onTermChange(newTerm)}
                onEndEditing = {() => onTermSubmit()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;