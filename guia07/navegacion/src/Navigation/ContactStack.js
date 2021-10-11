import React from "react";
import Contact from "../screens/contact";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack=createBottomTabNavigator();

export default function ContactStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={Contact} options={{title:'Contact'}}/>
        </Stack.Navigator>
    );
}