import { useRoute } from '@react-navigation/native';
import {FC} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TRouteProp = RouteProp<RootStackParamList, 'SecondScreen'>

interface IContent {
    id: number;
    name: string;
}

const DATA: IContent[]  = [
    {
        id: 0,
        name: "Hollis Rose"
    },
    {
        id: 1,
        name: "Steven Rose"
    },
    {
        id: 2,
        name: "Benjamin Rose"
    },
    {
        id: 3,
        name: "Sila Rose"

    },
    {
        id: 4,
        name: "Patrick Rose"
    },
    {
        id: 5,
        name: "Steve Rose"
    },

]

const SecondScreen: FC = () => {
    type TNavProp = NativeStackNavigationProp<RootStackParamList, 'ThirdScreen'>
    const route = useRoute<TRouteProp>();
    const navigation = useNavigation<TNavProp>();

    return (
        <><View style={{ flex: 1, backgroundColor: 'teal' }}>
            <FlatList data={DATA} renderItem={({ item }) => {
                return (
                    <View style={styles.listItem}>
                        <Text>{item.name}</Text>
                    </View>
                );
            } } />
            <Text>{route.params?.message}</Text>
        </View><TouchableOpacity style={styles.customButton} onPress={() => {
            navigation.navigate('ThirdScreen');
        } }>
                <Text style={{ color: 'yellow', fontWeight: '700' }}>{"Navigate to the third Screen"}</Text>
            </TouchableOpacity></>
    )
};

export default SecondScreen;

const styles = StyleSheet.create({
    listItem: {
        minHeight: 40, 
        backgroundColor: 'white', 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        borderBottomColor: 'teal'
    },
    customButton: {
        minHeight: 50, 
        backgroundColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 10, 
        borderRadius: 0
      }

})