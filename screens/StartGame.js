import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import PrimaryButton from '../components/PrimaryButton'


const StartGame = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}


export default StartGame

const styles = StyleSheet.create({
    inputContainer: {
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

    }

})