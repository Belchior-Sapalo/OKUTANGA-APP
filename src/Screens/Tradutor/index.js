import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

export default function Tradutor(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Tradutor page
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