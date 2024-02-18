import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    SafeAreaView
} from 'react-native';

export default function Tradutor(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <View style={styles.intoContainer}>
                    <Text style={styles.text}>
                        Frase para traduzir
                    </Text>
                    <TextInput 
                        style={styles.intoInput}
                        selectionColor='#000'
                        placeholder='insira frases simples (Saudações, apresentação pessoal, perguntas do dia a dia...)'
                    />
                </View>
                <View style={styles.resultContainer}>
                    <Text style={styles.text}>
                        Frase traduzida
                    </Text>
                    <View style={styles.result}>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        flex: 1
    },
    intoContainer: {
        marginVertical: 10,
        flex: 1
    },
    text: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 20,
    },
    intoInput: {
        borderWidth: 1,
        borderColor: '#eaeaea',
        padding: 20,
        textAlignVertical: 'top',
        flex: 1,
        fontWeight: 'bold'
    },
    resultContainer: {
        flex: 1
    },
    result: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#eaeaea',
    }
})