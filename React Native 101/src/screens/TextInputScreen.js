import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextInputScreen = () => {
    const [ password, setPassword] = useState('');

    return (
        <View>
            <Text style = {{textAlign: 'center', marginTop: 5}}>
                Enter Password: 
            </Text>
            <TextInput 
                style = {styles.input}
                autoCapitalize = "none"
                autoCorrect = {false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length <= 5 ? (<Text style = {{textAlign: 'center', color: 'red'}} > Password must be greater than 5 characters </Text>): null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
    }
});

export default TextInputScreen;