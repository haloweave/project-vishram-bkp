import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Button, Text } from "react-native";
import SkyBlueDashboard from "./skyBlueDashboard";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fetch } from "./fetch";
import Login from "./login";
import { app } from "./initFirebase";
import Registeration from "./registration";


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('User')}>
                <Text style={styles.texts}>
                    Go to User
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Admin')}>
                <Text style={styles.texts}>
                    Go to Admin
                </Text>
            </TouchableOpacity>



        </SafeAreaView>
    );
}

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="User" component={SkyBlueDashboard} />
            <Stack.Screen name="Admin" component={Fetch} />
        </Stack.Navigator>
    );
}

function App() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);

        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = app.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    if (initializing) return null;

    if (!user) {
        
        return (
            <Stack.Navigator>
                
                <Stack.Screen 
                name="Login" 
                component={Login}/>

                <Stack.Screen 
                name="Registeration" 
                component={Registeration}/>

                

               

            </Stack.Navigator>
          
            
        );
    }

    return (
        <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                // options={{
                //     headerTitle: ()=> <Header name="Sky Blue"/>,
                //     headerStyle: {
                //         height:150,
                //         borderBottomLeftRadius:50,
                //         borderBottomRightRadius:50,
                //         backgroundColor:'#00e4d0',
                //         shadowColor:'0000',
                //         elevation:25
                //     }
                // }}
                 />
                  <Stack.Screen name="User" component={SkyBlueDashboard} />
            <Stack.Screen name="Admin" component={Fetch} />

            </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
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

    button1: {
        marginBottom: 20,
        padding: 600
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
    }

});

export default ()=>{
    return (
        <NavigationContainer>
            <App/>
        </NavigationContainer>
    )
}
