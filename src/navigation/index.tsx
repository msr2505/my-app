
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

export type RootStackParamList = {
    FirstScreen: undefined,
    SecondScreen: {
        message: string;
    },
}


const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen name="FirstScreen" component={FirstScreen} options={{title: "First Screen"}} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} options={{title: "Second Screen"}} />
        </Stack.Navigator>
    )
}