import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import TabNavigator from "./TabNavigator";

const Root = createNativeStackNavigator(); 

export type RootStackParamsList = {
    Main: undefined;
    MyOrder: { userId: string; name: string };
    Order: any;
}

const RootStack = () => {
    return (
        <Root.Navigator>
            <Root.Group>
                <Root.Screen name="Main" component={TabNavigator} />
            </Root.Group>
        </Root.Navigator>
    )
}

export default RootStack;