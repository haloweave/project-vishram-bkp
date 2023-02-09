import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    View,
    Text
} from "react-native";
import { Box, Center, Button, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function Homescreen() {

    const navigation = useNavigation()

  return (
    


        <SafeAreaView style={
            {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }
        }>
            


            <TouchableOpacity style={
                    styles.buttons
                }
                onPress={
                    () => navigation.navigate('User')
            }>
                <Text style={
                    styles.texts
                }>
                    Go to User
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={
                    styles.buttons
                }
                onPress={
                    () => navigation.navigate('Admin')
            }>
                <Text style={
                    styles.texts
                }>
                    Go to Admin
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1,
        width: "100%"

    },

    button1: {
        marginBottom: 20,
        padding: 600
    },

    buttons: {
        height: 75,
        width: 250,
        alignItems: "center", // Horizontal
        borderRadius: 100,
        borderWidth: 5,
        justifyContent: "center", // Vertical
        backgroundColor: "white",
        borderColor: "black",
        marginBottom: 20
    },

    texts: {
        fontWeight: "bold",
        fontSize: 30
    }

});
