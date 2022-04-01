import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const PrimaryButton = ({ children, onPress }) => {



    return (
        <View style={styles.outerContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.outerContainer, styles.pressed] : styles.innerContainer} onPress={onPress} android_ripple={{ color: "#640233" }}>

                <Text style={styles.btnText}>{children}</Text>

            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden'
    }
    ,
    innerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#72063c",
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.25,


    }
    , btnText: {
        color: "white",
        textAlign: "center",

    },
    pressed: {
        opacity: .75,
    }
})