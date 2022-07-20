
import React, {useReducer} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    switch(action.perform){
        case 'increase':
            return {...state, counter: state.counter + 1};
        case 'decrease':
            return {...state, counter: state.counter - 1};
        default:
            return;
    }
};

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {counter: 0})

    return (
        <View>
            <Button 
            title = "Increase"
            onPress = {()=> {dispatch({perform: 'increase'})}}
            />
            <Button title = "Decrease"
            onPress = {()=> {dispatch({perform: 'decrease'})}}/>
            <Text>Current Count: {state.counter} </Text>
        </View>

    )
};

const styles = StyleSheet.create({

});

export default CounterScreen;