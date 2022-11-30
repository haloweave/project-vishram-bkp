import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SkyBlueDashboard from "./skyBlueDashboard";
import { app } from "./initFirebase";

const App = () => (
  <SafeAreaView style={styles.container}>
    <LinearGradient
      // Button Linear Gradient
      colors={["#4691EB", "#ffffff"]}
      style={styles.background}
    >
      <SkyBlueDashboard />
    </LinearGradient>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    width: "100%",
  },
});

export default App;
