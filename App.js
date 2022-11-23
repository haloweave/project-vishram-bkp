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
        <Text>I'm a button</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  buttonRound:{
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