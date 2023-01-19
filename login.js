 import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Button, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { auth } from "./initFirebase";
import auth from "firebase/compat/auth";
import { getAuth , signInWithEmailAndPassword } from "firebase/compat/auth";
import { app } from "./initFirebase";



const Login = () => {
    
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (email, password) => {
        try {
           await app.auth().signInWithEmailAndPassword(email, password)
        }

        catch (error) {
            alert(error.message)
        }
    }

    return (
        <View style={StyleSheet.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 26 }}>
                Login
            </Text>

            <View style={{ marginTop: 40 }}>
                <TextInput
                    style={styles.textinput}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false} />
                <TextInput
                    style={styles.textinput}
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true} />
            </View>

            <TouchableOpacity
                onPress={() => loginUser(email, password)}
                style={styles.button}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Registeration')}
                style={{marginTop:20}}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Dont have an account? Register Now!</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,
    },

    textinput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginBottom:10,
        textAlign:'center'
    },

    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:"#026efd",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }

})

export default Login;