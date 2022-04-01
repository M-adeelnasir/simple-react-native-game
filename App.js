import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './screens/StartGame';

export default function App() {
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
        <StartGame />
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
