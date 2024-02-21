import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import {useState, useContext} from 'react'
import ThemeContext from '../../Contexts/ThemeContext'



export default function Tradutor(){
    const {temaActual } = useContext(ThemeContext)
    const [frase, setFrase] = useState('')
    const [traducao, setTraducao] = useState('') 
    const [responseMsg, setResponseMsg] = useState('') 

    async function buscarTraducao(frase){
        const url = 'http://192.168.43.58:3000/buscarTraducao'
        const dado ={
            'frase': frase
        }
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dado)
        })
        .then((response)=> response.json())
        .then((json)=>{setTraducao(json.traducao); setResponseMsg(json.msg)})
        .catch((error)=>alert(error))
    }

    return(
        <SafeAreaView style={[styles.container,{backgroundColor: temaActual.background_color}]}>
            <View style={styles.form}>
                <View style={styles.intoContainer}>
                    <View style={styles.header}>
                        <Text style={[styles.text, {color:temaActual.text_color}]}>
                            Frase para traduzir
                        </Text>

                        <TouchableOpacity style={[styles.translateBtn, {backgroundColor: temaActual.detalhes_color}]} activeOpacity={0.7} onPress={()=> buscarTraducao(frase)}>
                            <Text style={styles.translateText}>
                                Traduzir
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput 
                        style={[styles.intoInput, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                        selectionColor='#000'
                        placeholder='insira frases simples (Saudações, apresentação pessoal, perguntas do dia a dia...)'
                        placeholderTextColor={temaActual.text_color}
                        value={frase}
                        onChangeText={setFrase}
                        autoFocus={true}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <Text style={[styles.text, {color: temaActual.text_color}]}>
                        Frase traduzida
                    </Text>
                    <View style={[styles.result, {borderColor: temaActual.border_color}]}>
                        {
                            traducao? 
                            (
                                <Text style={[styles.traducao, {color: temaActual.text_color}]}>{traducao}</Text>
                            ): (
                                <Text style={[styles.traducao, {color: temaActual.text_color}]}>{responseMsg}</Text>
                            )
                        }
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    form: {
        flex: 1
    },
    translateBtn: {
        marginRight: 20,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 8,
    },
    translateText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFF'
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
        padding: 20,
        textAlignVertical: 'top',
        flex: 1,
        fontSize: 20,
    },
    resultContainer: {
        flex: 1
    },
    result: {
        flex: 1,
        borderWidth: 1,
        padding: 20,
    },
    traducao: {
        fontSize: 20,
    }
})