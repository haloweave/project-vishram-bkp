import React, { useState, useEffect } from "react";
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

import * as Location from 'expo-location';

// const date1 = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



const SkyBlueDashboard = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }

const press = () => {
   
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var min = new Date().getMinutes();
   
    console.log(location);
     if(min>0 && min<9){
        min = "0"+min;
       //console.log(min)
     }

    app.firestore().collection("skyblue").add({
        Date: date + "/" + month + "/" + year,
        Time: hour + ":" + min,
        Name: "Haloweave",
        Count:  year +""+ month +""+ date +""+ hour +""+ min,
        Location: text,
    });
   
};

return(
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
};

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
