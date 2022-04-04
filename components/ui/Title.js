import { Text, StyleSheet, View } from 'react-native'

const Title = ({ children }) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>

        </View>


    )
}

export default Title

const styles = new StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: "#ddb52f",
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})