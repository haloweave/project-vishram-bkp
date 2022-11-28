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
          <Text style={styles.text}>
            Sky
            <Text style={styles.blueText}>Blue!</Text>
          </Text>
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

  text:{
    fontWeight: 'bold' ,
    fontSize: 50,
  },
  blueText:{
color:'#4691EB',
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
    shadowColor: 'black',
shadowOpacity: 0.8,
elevation: 10,
backgroundColor : "#0000",
shadowRadius: 15 ,
    top:300,
    height: 330,
    alignItems: 'center',
    marginHorizontal:25,
    borderRadius: 200,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColour: 'blue',
  },
});

export default App;