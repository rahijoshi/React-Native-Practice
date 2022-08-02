//Instagram like button

import React, { useEffect, useRef, useState } from 'react';
import {Text, StyleSheet, View, Animated, Image, Easing, Dimensions, ImageBackground} from 'react-native';
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import { ease } from 'react-native/Libraries/Animated/Easing';


export default function App() {

const doubleTap = useRef();
const scale = useRef(new Animated.Value(0)).current;

const like = () => {
    Animated.timing(scale, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: 'false',
        friction: 50
    }).start(() => {
        scale.setValue(0);
    });
}

// useEffect( () => {

// }) 
    return (
        <View style = {styles.containerStyle}>
            <GestureHandlerRootView>
                <TapGestureHandler
                    waitFor={doubleTap}
                    numberOfTaps={1}
                    onActivated={() => { console.log('single tap')}}
                >
                    <TapGestureHandler
                        ref={doubleTap}
                        numberOfTaps={2}
                        onActivated={like}
                    >
                        <Animated.View> 
                            <ImageBackground 
                                style ={styles.imageStyle} 
                                source={require('../animations_app/assets/lens.png')}
                            > 
                                <Animated.Image 
                                style = {[styles.likeStyle,
                                    {opacity: scale.interpolate({
                                        inputRange: [0,1,2],
                                        outputRange: [0,1,0]
                                    })}
                                    
                            ]} 
                            // style = {{ transform: [{translateX: scale.interpolate({
                            //     inputRange: [0, 1],
                            //     outputRange: [0, 150]
                            // })}]
                            // }}
            
                                source={require('../animations_app/assets/likeicon.png')}
                                />
                            </ImageBackground>
                        </Animated.View>
                    </TapGestureHandler>
            </TapGestureHandler>
            </GestureHandlerRootView>
        </View>
    );
}

const {width: SIZE} = Dimensions.get('window');

const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    squareStyle: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'purple'
    },
    imageStyle: {
        width: SIZE,
        height: SIZE,
        justifyContent: 'center'

    },
    likeStyle: {
    //    resizeMode: 'center',
        alignSelf: 'center',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.35,
        shadowRadius: 35
    }

});
