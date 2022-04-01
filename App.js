import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './screens/StartGame';
import Game from './screens/Game';

export default function App() {

  //dunamically switch to another screen
  const [userNumber, setUserNumber] = useState();

  const handleConfirmNumber = (num) => {
    setUserNumber(num)
  }

  let screen = <StartGame handleConfirmNumber={handleConfirmNumber} />

  if (userNumber) {
    screen = <Game />
  }

  return (
    // <View style={styles.bgColor}>
    //   <StartGame />
    // </View>
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.bgColor}>

      <ImageBackground
        source={require('./assets/dice.jpg')}
        style={styles.rootScreen}
        imageStyle={styles.bgimg}
        resizeMode='cover'

      >
        {screen}

      </ImageBackground>

    </LinearGradient>
  );
}

const styles = new StyleSheet.create({
  bgColor: {
    flex: 1,
  }, bgimg: {
    opacity: .15
  }, rootScreen: {
    flex: 1
  }
})
