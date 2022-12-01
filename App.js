import React from "react";
import {StyleSheet, SafeAreaView, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import SkyBlueDashboard from "./skyBlueDashboard";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => (
    <SafeAreaView style={
        styles.container
    }>



            <NavigationContainer>

                <Stack.Navigator>
                <Stack.Screen name="Skyblue" component={SkyBlueDashboard} />

                   
                </Stack.Navigator>
              
            </NavigationContainer>
        
    </SafeAreaView>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#FFFFFF' 
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1,
        width: "100%",
       
    }
});

export default App;
