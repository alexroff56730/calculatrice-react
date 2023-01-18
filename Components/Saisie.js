import {View, TextInput, StyleSheet} from 'react-native';

export default function Saisie(props) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.saisie} value={props.valeur}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    saisie: {
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        width: '100%',
        textAlign: 'right'
    }
})