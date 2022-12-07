import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Alert
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { app } from "./initFirebase";
import { LinearGradient } from 'expo-linear-gradient';

// const date1 = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
// console.log(date + ":" + month + ":" +year);
var hour = new Date().getHours();
var min = new Date().getMinutes();

console.log(min);
const press = () => {
    app.firestore().collection("skyblue").add({
        Date: date + "/" + month + "/" + year,
        Time: hour + ":" + min,
        Name: "Haloweave",
        Count:  year +""+ month +""+ date +""+ hour +""+ min   
    });
   
};
const SkyBlueDashboard = () => (


    <View style={styles.container}>
        <LinearGradient
            // Background Linear Gradient
            colors={['transparent',"#4691EB"]}
            style={styles.background}
        ></LinearGradient>
        {/* <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.texts}>
                    Go to Admin
                </Text>
            </TouchableOpacity> */}

        <TouchableOpacity onPress={() => press()} style={styles.buttonRound}>
            <Text style={styles.text1}>
                Tap
            </Text>

            <Text style={styles.text}>
                Sky
                <Text style={styles.blueText}>
                    Blue!
                </Text>
            </Text>
        </TouchableOpacity>
     
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       // backgroundColor: "#4691EB",
      },

    mic: {
        top: 150
    },

    micc: {
        height: 30,
        width: 30,
        color: "blue"
    },

    text: {
        fontWeight: "bold",
        fontSize: 50
    },

    text1: {
        fontWeight: "bold",
        fontSize: 30
    },

    blueText: {
        color: "#4691EB"
    },

    bigButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonRound: {
        shadowColor: "black",
        shadowOpacity: 0.8,
        elevation: 10,
        backgroundColor: "#0000",
        shadowRadius: 15,
        height: 330,
        width: 330,
        alignItems: "center",
        borderRadius: 200,
        borderWidth: 1,
        justifyContent: "center",
        backgroundColor: "white",
        borderColor: "#4691EB"
    },

    buttons: {
        height: 75,
        width: 250,
        alignItems: "center", //Horizontal
        borderRadius: 100,
        borderWidth: 5,
        justifyContent: "center", //Vertical
        backgroundColor: "white",
        borderColor: "black",
        marginBottom: 20
    },

    texts: {
        fontWeight: "bold",
        fontSize: 30
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:'100%'
      }

});

export default SkyBlueDashboard;
