import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const PrimaryButton = ({ children }) => {

    const pressHandler = () => {
        console.log("Clicked");
    }

    return (
        <Pressable onPress={pressHandler} android_ripple={{ color: "#640233" }}>
            <View style={styles.container}>
                <Text style={styles.btnText}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#72063c",
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.25,
        borderRadius: 8,
        margin: 4,

    }
    , btnText: {
        color: "white",
        textAlign: "center",

    }
})