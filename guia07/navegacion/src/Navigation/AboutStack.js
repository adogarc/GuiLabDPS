import React from "react";
import about from "../screens/about";
import { createStackNavigator } from "@react-navigation/stack";

const Stack=createStackNavigator();
 
export default function AboutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="about" component={about} options={{title:'About'}}/>
        </Stack.Navigator>
    );
}