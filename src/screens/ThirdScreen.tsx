import { useRoute } from '@react-navigation/native';
import {FC} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TRouteProp = RouteProp<RootStackParamList, 'ThirdScreen'>
type TNavProp = NativeStackNavigationProp<RootStackParamList, 'ThirdScreen'>

const ThirdScreen: FC = () => {
    const route = useRoute<TRouteProp>();
    const navigation = useNavigation<TNavProp>();

    return (
        <View style={styles.listItem}>
            <Text>Hello</Text>
        </View>
    )
    };




export default ThirdScreen;

const styles = StyleSheet.create({
    listItem: {
        minHeight: 40, 
        backgroundColor: 'white', 
    },
    customButton: {
        minHeight: 50, 
        backgroundColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 10, 

      }
})