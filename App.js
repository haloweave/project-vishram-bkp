import React from 'react';
import { TouchableOpacity, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const App = () => (

  <SafeAreaView style={styles.container}>
    <LinearGradient
      // Button Linear Gradient
      colors={['#4691EB', '#ffffff',]}
      style={styles.background}>
      <View>
        <TouchableOpacity
          onPress={() => Alert.alert('Round Button pressed')}
          style={styles.buttonRound}>
          <Text>I'm a button</Text>
        </TouchableOpacity>
      </View>


    </LinearGradient>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    
   
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex:1,
    width: '100%',

  },
  buttonRound: {
    width: 100,
    height: 100,
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
});

export default App;