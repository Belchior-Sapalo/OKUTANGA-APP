import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

export default function Gramatica(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Gramatica page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})