import { useRoute } from '@react-navigation/native';
import {FC} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, Button } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, {useState} from 'react';

type TRouteProp = RouteProp<RootStackParamList, 'ThirdScreen'>
type TNavProp = NativeStackNavigationProp<RootStackParamList, 'ThirdScreen'>

const ThirdScreen: FC = () => {
    const route = useRoute<TRouteProp>();
    const navigation = useNavigation<TNavProp>();
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text style={{color: 'blue', fontWeight: '800'}}>Grocery List</Text>
            <TextInput
        style={styles.input}
        placeholder="Enter your grocery list here."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        onSubmitEditing={() => alert(` ${text}`)}
      />
      <Text>Grocery List: {text}</Text>
      <Button
      title="Add grocery item"
      />
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/500/700' }} />
            <Text>I love my Hollis!</Text>
        </View>
    )
    };



    const windowWidth = Dimensions.get('window').width;

    const windowHeight = Dimensions.get('window').height;

export default ThirdScreen;

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        minHeight: 40, 
        backgroundColor: 'white', 
    },
    customButton: {
        minHeight: 50, 
        backgroundColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 10, 

      },
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20%',
      },
      image: { 
        width: windowWidth/3, 
        height: windowHeight / 4,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
},
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
}

})