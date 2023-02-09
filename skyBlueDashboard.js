import React, { useState, useEffect } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Alert,
    Platform
} from "react-native";

import { Button } from "native-base";

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { app } from "./initFirebase";
import { LinearGradient } from 'expo-linear-gradient';

import * as Location from 'expo-location';

// const date1 = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



const SkyBlueDashboard = () => {

   

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [timeLeft, setTimeLeft] = useState('0:00:00');
    const [timeLeftMinutes, setTimeLeftMinutes] = useState(null);
    const [timeLeftHours, setTimeLeftHours] = useState(null);
    const [timeLeftSeconds, setTimeLeftSeconds] = useState(null);

    //set time here that sky blue button activates

    const [skyBlueHour, setSkyblueHour] = useState(15);
    const [skyBlueMinute, setSkyblueMinute] = useState(49);
    const [skyBlueSecond, setSkyblueSecond] = useState(0);

    const [tempDeadline, setTempDeadline] = useState(0);

    const [skybluePressed, setSkybluePressed] = useState(false);

   

    const notificationTrigger = () =>{
      
            console.log('am here');
          
          // Trigger the local notification 
           
          Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: true,
              shouldPlaySound: false,
              shouldSetBadge: false,
            }),
          });
          
          // Second, call the method triggers in 5 seconds after expiry of skyblue countdown
          
          Notifications.scheduleNotificationAsync({
            content: {
              title: 'Tap SkyBlue!',
              body: "Time to tap the SkyBlue Button!",
            },
            trigger: {
                seconds : 5,
            }
          });
            
            
          

    }

    const skyBlueTimeout = () =>{
    setSkybluePressed(false);
 console.log("notification trigger below");
notificationTrigger();



    }

    //counts down time  and stores in 'timeLeft'
    const countdownStarter = () =>{
        
            const intervalId = setInterval(() => {
              const now = new Date();
              // hour set time goes till next day
              if(now.getHours() > skyBlueHour)
              {
                var deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, skyBlueHour, skyBlueMinute, skyBlueSecond);
setTempDeadline(deadline);

              }else{ //same day hour is
                var deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate(), skyBlueHour, skyBlueMinute, skyBlueSecond);
                setTempDeadline(deadline);
            }

              const timeUntilDeadline = tempDeadline - now;
              console.log(timeUntilDeadline);
              if(timeUntilDeadline < 0){      
                clearInterval(intervalId);
                setTimeLeft('0:00:00');
                
                skyBlueTimeout();
              } else {
                const hours = Math.floor(timeUntilDeadline / (1000 * 60 * 60));
                const minutes = Math.floor((timeUntilDeadline % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeUntilDeadline % (1000 * 60)) / 1000);
                setTimeLeft(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                setTimeLeftHours(hours);
                setTimeLeftMinutes(minutes);
                setTimeLeftSeconds(seconds);
              
              }
            }, 1000);
        
            return () => clearInterval(intervalId);
         
    }

  

//stores location data in 'location'
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



      //on press sends data to firebase
const press = () => {
   
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hour = new Date().getHours();
        var min = new Date().getMinutes();
       
        console.log("timeLeft: "+timeLeft);
        setSkybluePressed(true);
    
         if(min>0 && min<9){
            min = "0"+min;
           //console.log(min)
         }

         if(hour>0 && hour<9){
            hour = "0"+hour;
           //console.log(min)
         }
    
        app.firestore().collection("Sky-Blue").add({
            Date: date + "/" + month + "/" + year,
            Time: hour + ":" + min,
            Name: "Haloweave",
            Count:  year +""+ month +""+ date +""+ hour +""+ min,
            Location: text,
        });
};

const checkSkybluePressed = () =>{
    if(!skybluePressed){
        press();
        setSkybluePressed(true);
        countdownStarter();
    }
}

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



        <TouchableOpacity onPress={() => checkSkybluePressed()} style={styles.buttonRound}>

            
            { skybluePressed ? (
            <View>
                <Text> Press Button in</Text>
<Text> {timeLeftHours} Hours </ Text >
<Text> {timeLeftMinutes} Minutes </ Text >
<Text> {timeLeftSeconds} Seconds </ Text >
            </View>
            ):(            <View>
            <Text style={styles.text1}>
                Tap
            </Text>
            
            <Text style={styles.text}>
                Sky
                <Text style={styles.blueText}>
                    Blue!
                </Text>
            </Text>
            </View>)

            }
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
