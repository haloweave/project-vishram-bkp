import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { app } from "./initFirebase";

//const date1 = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
//console.log(date + ":" + month + ":" +year);
var hour = new Date().getHours();
var min = new Date().getMinutes();

const press = () => {
  app
    .firestore()
    .collection("Sky-Blue")
    .add({
      Date: date + "/" + month + "/" + year,
      Time: hour + ":" + min,
      Name: "The Devil",
    });
};
const SkyBlueDashboard = () => (
  <View style={styles.bigButton}>
    <TouchableOpacity
      //onPress={handleSubmit(press)}
      // onPress={() => Alert.alert("Round Button pressed")}
      onPress={() => press()}
      style={styles.buttonRound}
    >
      <Text style={styles.text1}>Tap</Text>

      <Text style={styles.text}>
        Sky
        <Text style={styles.blueText}>Blue!</Text>
      </Text>
    </TouchableOpacity>

    <View style={styles.mic}>
      <FontAwesome icon="microphone" className="micc" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  mic: {
    top: 150,
  },

  micc: {
    height: 30,
    width: 30,
    color: "blue",
  },

  text: {
    fontWeight: "bold",
    fontSize: 50,
  },

  text1: {
    fontWeight: "bold",
    fontSize: 30,
  },

  blueText: {
    color: "#4691EB",
  },

  bigButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    borderColor: "#4691EB",
  },
});

export default SkyBlueDashboard;
