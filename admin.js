import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export const Admini = () => (





    <View style={styles.container}>
        <TouchableOpacity style={styles.buttons}>
            <Text style={styles.texts}>
                Under Construction
            </Text>
        </TouchableOpacity>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    texts: {
        fontWeight: "bold",
        fontSize: 30
    }

});
