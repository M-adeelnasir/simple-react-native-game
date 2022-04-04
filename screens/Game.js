import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Title from '../components/ui/Title'
import GameNumber from '../components/game/GameNumber'


const randomNumberBtw = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return randomNumberBtw(min, max, exclude)
    } else {
        return rndNum
    }
}

const Game = ({ number }) => {
    const initialGuess = randomNumberBtw(1, 100, number)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title >Opponent's Guess</Title>
            <GameNumber>{currentGuess}</GameNumber>
            <View>
                <Text>
                    Higher Or Low?
                </Text>
            </View>
        </View>

    )
}

export default Game


const styles = new StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15.

    }
})