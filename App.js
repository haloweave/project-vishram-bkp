import React from 'react';
import {TouchableOpacity, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
<TouchableOpacity
        onPress={() => Alert.alert('Round Button pressed')}
        style={styles.buttonRound}>
        <Text>Tap</Text>
        <Text>Tap</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  buttonRound:{
    width: 360,
    height: 360,
    alignItems: 'center',
    padding: 10,
    borderRadius: 200,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColour: 'blue',
  },
});

export default App;