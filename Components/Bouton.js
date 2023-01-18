import { View, Button } from "react-native";

export default function Bouton(props) {
    return(
        <View style={{width: '20%', margin: 5}}>
            <Button 
                title={props.Label} 
                color="blue" 
                onPress={() => props.setValueBtn(props.Label)}
            />
        </View>
    )
}