 import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { auth } from "./initFirebase";
import auth from "firebase/compat/auth";
import { getAuth , signInWithEmailAndPassword } from "firebase/compat/auth";
import { app } from "./initFirebase";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";



const Login = () => {
    
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (email, password) => {
        try {
           await app.auth().signInWithEmailAndPassword(email, password)
        }

        catch (error) {
            
            alert("Wrong E-mail ID or Password : Error details : "+ error.message)
        }
    }

    return (

        
<Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Login to SkyBlue!
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label >Email ID</FormControl.Label>
            <Input value={email}
          onChangeText={setEmail}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password}
          onChangeText={setPassword} />
          
          </FormControl>
          <Button mt="2" colorScheme="indigo"  onPress={() => loginUser(email, password)}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">

          </HStack>
        </VStack>
      </Box>
    </Center>
    )
}



export default Login;