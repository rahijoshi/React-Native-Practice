import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";


const ResultsDetail = ({result}) => {
    return (
        <View style = {styles.containerStyle}> 
            <Image style = {styles.imageStyle} source={{uri: result.image_url}}/>
            <Text style = {styles.nameStyle}> {result.name} </Text>
            <Text> {result.rating} stars, {result.review_count} reviews  </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5,
    },

    nameStyle: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    containerStyle : {
        marginLeft: 15,
        // marginBottom: 10,
    }
});

export default ResultsDetail;