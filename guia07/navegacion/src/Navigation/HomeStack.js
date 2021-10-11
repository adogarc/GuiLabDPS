import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';

const Stack=createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title:'Home'}}/>
        </Stack.Navigator>
    );
}