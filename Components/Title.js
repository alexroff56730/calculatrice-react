import { View, Text, StyleSheet } from 'react-native';

export default function Title() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Calculatrice</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})