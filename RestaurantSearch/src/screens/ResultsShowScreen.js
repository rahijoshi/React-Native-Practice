import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, FlatList} from "react-native";
import yelp from '../api/yelp';


const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) return null;

    return (
        <View style = {{alignItems: 'center'}}> 
            <Text style = {styles.textStyle}> {result.name} </Text>
            <FlatList
                data = {result.photos}
                keyExtractor = {(photo)=> photo}
                renderItem = {({ item }) => {
                    return <Image source={{ uri: item}} style ={styles.imageStyle} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default ResultsShowScreen;