import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import SongIndividual from './SongIndividual';
import Profile from './Profile';


const Stack = createNativeStackNavigator();

const Navigator = (): JSX.Element => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="SongIndividual" component={SongIndividual} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Navigator;