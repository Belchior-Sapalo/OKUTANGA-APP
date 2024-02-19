import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import {dark_color, detalhes, primary_color, secondary_color} from '../../Components/Cores'
import {useState} from 'react'



export default function Tradutor(){
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
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <View style={styles.intoContainer}>
                    <View style={styles.header}>
                        <Text style={styles.text}>
                            Frase para traduzir
                        </Text>

                        <TouchableOpacity style={styles.translateBtn} activeOpacity={0.7} onPress={()=> buscarTraducao(frase)}>
                            <Text style={styles.translateText}>
                                Traduzir
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput 
                        style={styles.intoInput}
                        selectionColor={dark_color}
                        placeholder='insira frases simples (Saudações, apresentação pessoal, perguntas do dia a dia...)'
                        value={frase}
                        onChangeText={setFrase}
                        autoFocus={true}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <Text style={styles.text}>
                        Frase traduzida
                    </Text>
                    <View style={styles.result}>
                        {
                            traducao? 
                            (
                                <Text style={styles.traducao}>{traducao}</Text>
                            ): (
                                <Text style={styles.traducao}>{responseMsg}</Text>
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
        backgroundColor: detalhes,
        marginRight: 20,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 8
    },
    translateText: {
        color: primary_color,
        fontWeight: 'bold',
        fontSize: 16
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
        borderColor: secondary_color,
        padding: 20,
        textAlignVertical: 'top',
        flex: 1,
        fontSize: 20
    },
    resultContainer: {
        flex: 1
    },
    result: {
        flex: 1,
        borderWidth: 1,
        borderColor: secondary_color,
        padding: 20,
    },
    traducao: {
        fontSize: 20,
    }
})