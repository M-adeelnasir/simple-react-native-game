import { Text, View, StyleSheet } from "react-native"
import { useState } from "react"

const GameNumber = ({ children }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default GameNumber


const styles = new StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: "yellow",
        borderRadius: 8,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'

    },
    numberText: {
        color: "yellow",
        fontSize: 26,
        fontWeight: 'bold'
    }

})