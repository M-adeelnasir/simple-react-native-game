import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'


const StartGame = ({ handleConfirmNumber }) => {
    const [number, setNumber] = useState('')

    const handleChange = (text) => {
        console.log(text);
        setNumber(text)
    }

    const handleOkayPress = () => {
        setNumber('')
    }

    const handleConfirm = () => {
        console.log("Clicked");
        const chosenNumber = parseInt(number);
        //is not a number OR
        // is less the 0 OR
        //is greater then 99

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
            Alert.alert(
                'Invalid Number',
                "Number Should be in between 1 to 99",
                [{ text: 'Okay', style: 'destructive', onPress: handleOkayPress }]
            )
            return
        }
        console.log("valid number");
        handleConfirmNumber(chosenNumber)

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                value={number}
                onChangeText={handleChange}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.btn}>
                    <PrimaryButton >Reset</PrimaryButton>
                </View>
                <View style={styles.btn}>
                    <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}


export default StartGame

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 16,
        marginTop: 100,
        backgroundColor: "#4e0329",
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,  //this will show the box shadow in android
        //we use shdow in ios eg
        shadowColor: 'black',
        textShadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .25,

    },
    numberInput: {
        fontSize: 32,
        height: 50,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'

    }, buttonContainer: {
        flexDirection: "row"
    }, btn: {
        flex: 1
    }

})