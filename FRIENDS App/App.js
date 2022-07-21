import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class MyProject extends Component {
  constructor() {
    super();

    this.state = {
      // This is our Default value
      Season: 1,
      Episode: 1,
    };
  }

  GenerateSeason = () => {
    var RandomNumber = Math.floor(Math.random() * 10) + 1;

    this.setState({
      Season: RandomNumber,
    });
  };

  GenerateEpisode = () => {
    var RandomNumberEp = Math.floor(Math.random() * 24) + 1;
    

    this.setState({
      Episode: RandomNumberEp,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/Friends_logo.svg.png')}
          style={styles.image}
        />
        <Text style={styles.text}> Which episode should I watch today? </Text>

        <View style = {styles.buttons}>
          <TouchableOpacity style={styles.Button} onPress={this.GenerateSeason}>
            <Text style={styles.text}> Season </Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            {this.state.Season}
          </Text>
        </View>

        <View style = {styles.buttons}>
          <TouchableOpacity style={styles.Button} onPress={this.GenerateEpisode}>
          <Text style={styles.text}> Episode </Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            {this.state.Episode}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#be87ed',
    padding: 12,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  Button: {
    marginVertical: 24,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'oc',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center'
  },

  image: {
    alignItems: 'center',
    width: 330,
    height: 50,
    justifyContent: 'center'
    // marginRight: 5,
    // resizeMode: 'contain',
  },

  buttons: {
    flexDirection: 'row', // a must
    alignItems: 'center', // to make items center vertically.
    justifyContent: 'center' // to make the second item center horizontally
  }
});
