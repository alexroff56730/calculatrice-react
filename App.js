import { View, StyleSheet } from "react-native";
import Calc from './Components/Calc'

export default function App() {
    return(
        <View style={styles.container}>
            <Calc />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
})