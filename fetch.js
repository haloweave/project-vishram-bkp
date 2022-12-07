import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
//import { firebase } from '../config';
import { app } from "./initFirebase";
import { LinearGradient } from 'expo-linear-gradient';



export const Fetch = () => {

    const [users, setUsers] = useState([]);
    const skyblue = app.firestore().collection('skyblue').orderBy("Count", "desc");

    useEffect(() => {
        skyblue.onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach((doc) => {
                    const { Date, Name, Time } = doc.data()
                    users.push({
                        id: doc.id,
                        Date,
                        Name,
                        Time,
                    })
                })
                setUsers(users)
            }
        )
    }, [])

    return (
        <View style={{ flex: 1, marginTop: 50, }}>
            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', "#4691EB"]}
                style={styles.background}
            ></LinearGradient>
            <View style={{alignItems:"center", marginTop:20, marginBottom:15}}>
                <Text style={styles.log}>Logs</Text>
            </View>
            <FlatList
                style={{ height: '100%' }}
                data={users}
                numColumns={1}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.container}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.itemHeading}>Name : {item.Name}</Text>
                            <Text style={styles.itemHeading}>Time : {item.Time}</Text>
                            <Text style={styles.itemHeading}>Date : {item.Date}</Text>
                        </View>
                    </Pressable>
                )} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
        borderColor: "#4691EB",
        borderWidth: 2
    },

    innerContainer: {
        alignItems: 'center',
        flexDirection: 'column',
    },

    itemHeading: {
        fontWeight: "bold",
        fontSize: 17
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },

    log: {
        fontWeight: "bold",
        fontSize: 30,
        alignContent: 'center'
    }


})
