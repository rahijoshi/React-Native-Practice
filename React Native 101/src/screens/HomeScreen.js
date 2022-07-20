import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi!</Text>
      <Button 
        title = 'Go to Components Demo'
        onPress = {() => navigation.navigate('Components')}
      />
      <Button 
        title = 'Go to List Demo'
        onPress = {() => navigation.navigate('List')}
        color = '#df7be3'
      />

      <Button 
        title = 'Go to Image Demo'
        onPress = {() => navigation.navigate('Image')}
      />

      <Button 
        title = 'Go to Counter Demo'
        onPress = {() => navigation.navigate('Counter')}
        color = '#df7be3'
      />

      <Button 
        title = 'Go to Color Demo'
        onPress = {() => navigation.navigate('Color')}
      />

      <Button 
        title = 'Go to Square Demo'
        onPress = {() => navigation.navigate('Square2')}
        color = '#df7be3'
      />

      <Button 
        title = 'Go to Text Input Demo'
        onPress = {() => navigation.navigate('Text')}
      />

      <Button 
        title = 'Go to Box Demo'
        onPress = {() => navigation.navigate('Box')}
        color = '#df7be3'
      />

    </View>    
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  TAstyle: {
    fontSize: 20,
    marginLeft: 100
  }
});

export default HomeScreen;
