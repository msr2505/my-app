import {FC, useState} from 'react';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { View, StyleSheet, Button, Dimensions, SafeAreaView, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

const THEME_COLOR = '#285E29';

enum ShapeType {
  Circle = 'circle',
  Square = 'square',
  Triangle = 'triangle',
}

type TNavProp = NativeStackNavigationProp<RootStackParamList, 'FirstScreen'>

const FirstScreen: FC = () => {
    const [count, setCount] = useState(0);

    const navigation = useNavigation<TNavProp>();
  

    const renderShape = (type: ShapeType) => {
      switch(type) {
        case ShapeType.Circle:
          return <View style={styles.circle} />
        case ShapeType.Square:
          return <View style={styles.square} />
        default:
          return null;
      }
    }
    
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style={'auto'} />
        <Text>You clicked {count} times! </Text>
          <Button
            onPress={() => setCount(count + 1)}
            title='Increment'
          />
          <Button 
            onPress={() => setCount(count - 1)}
            title='Decrement'
          />
          <Image style={styles.image} source={{ uri: 'https://picsum.photos/500/700' }}/> 
          <View style={{flexDirection: 'row', marginBottom: 4}}>
            {renderShape(ShapeType.Circle)}
            <Spacer />
            {renderShape(ShapeType.Circle)}
            <Spacer />
            {renderShape(ShapeType.Square)}
            <Spacer />
            {renderShape(ShapeType.Square)}
          </View>
          <TouchableOpacity style={styles.customButton} onPress={() => {
            navigation.navigate('SecondScreen', { message: 'yooooooo!' });
          }}>
            <Text style={{color: 'white', fontWeight: '700'}}>{"Navigate to Second Screen"}</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
};

export default FirstScreen;

const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);
const windowHeight = Dimensions.get('window').height;
console.log(windowHeight);

const styles = StyleSheet.create({
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
  },
  statusbar: {
    StatusBarStyle: 'auto',
    barStyle: 'dark-content',
    hidden: false,
    backgroundColor: '#00BCD4',
    translucent: true,
  },
  safeArea: {
    flex: 1, 
    backgroundColor: THEME_COLOR
},
circle: {
  width: 40, 
  height: 40, 
  borderRadius: 20,
  backgroundColor: 'red',
},
square: {
  width: 40, 
  height: 40, 
  backgroundColor: 'red'
},
customButton: {
  minHeight: 50, 
  backgroundColor: 'black', 
  justifyContent: 'center', 
  alignItems: 'center', 
  paddingHorizontal: 10, 
  borderRadius: 6
}
});

const Spacer = () => <View style={{width: 4}} />