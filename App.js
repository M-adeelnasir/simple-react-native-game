import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './screens/StartGame';

export default function App() {
  return (
    // <View style={styles.bgColor}>
    //   <StartGame />
    // </View>
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.bgColor}>
      <StartGame />
    </LinearGradient>
  );
}

const styles = new StyleSheet.create({
  bgColor: {
    flex: 1,
  }
})
