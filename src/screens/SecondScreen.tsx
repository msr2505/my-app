import { useRoute } from '@react-navigation/native';
import {FC} from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';

type TRouteProp = RouteProp<RootStackParamList, 'SecondScreen'>

interface IContent {
    id: number;
    name: string;
}

const DATA: IContent[]  = [
    {
        id: 0,
        name: "John Smith"
    },
    {
        id: 1,
        name: "Steven Rose"
    },
    {
        id: 2,
        name: "Benjamin Rose"
    },

]

const SecondScreen: FC = () => {
    const route = useRoute<TRouteProp>();

    return (
        <View style={{flex: 1, backgroundColor: 'blue'}}>
            <FlatList data={DATA} renderItem={({item}) => {
                return (
                    <View style={styles.listItem}>
                        <Text>{item.name}</Text>
                    </View>
                )
            }} />
            <Text>{route.params?.message}</Text>
        </View>
    )
};

export default SecondScreen;

const styles = StyleSheet.create({
    listItem: {
        minHeight: 40, 
        backgroundColor: 'white', 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        borderBottomColor: 'gray'
    }
})