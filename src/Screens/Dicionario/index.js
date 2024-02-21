import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput, 
    Modal,
    FlatList, 
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import React, {useState, useEffect, useCallback, useContext} from 'react'
import {FontAwesome} from '@expo/vector-icons'
import Error from '../../Components/Error';
import {useFocusEffect} from '@react-navigation/native'
import ThemeContext from '../../Contexts/ThemeContext'

export default function Dicionario(){
    const {temaActual } = useContext(ThemeContext)
    const [dados, setDados] = useState([])
    const [palavra, setPalavra] = useState('')
    const [significado, setSignificado] = useState('')
    const [into, setInto] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [carregando, setCarregando] = useState(true)
    const [responseMsg, setResponseMsg] = useState('')
    const [internetError, setInternetError] = useState(true)
    const [chave, setChave] = useState(0)


    
    useFocusEffect(
        useCallback(()=>{
           setChave(prevState => prevState + 1)
        }, [])
    )

    const url = 'http://192.168.43.58:3000/palavrasPortugues';

    useEffect(
        ()=>{
            fetch(url)
            .then((response)=>response.json())
            .then((json)=> json.sort((a, b)=> a.palavraPortugues.localeCompare(b.palavraPortugues)))
            .then((res)=>{setDados(res); setResponseMsg(res.msg)})
            .catch((error)=>alert(`Falha: ${error}`))
            .finally(()=>setInternetError(false))
        },[chave]
    )

    let resultados
    function mostrarResultados(palavra){
        const temp = []
        dados.forEach((dado)=>{
            temp.push(dado.palavraPortugues)
        })
        
        resultados = temp.filter((item)=>{
            return item.toLowerCase().includes(palavra.toLowerCase())
        })

        if(resultados.length == 0){
            resultados[0] = 'Sem resultados...'
        }
    }
    
    function buscarSignificado(palavra){
        const url = 'http://192.168.43.58:3000/buscarSignificado_portugues_umbundo'
        const dado = {
            'palavra': palavra
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dado)
        })
        .then((response)=>response.json())
        .then((json)=>{
            setSignificado(json.significados)
            setPalavra(json.entrada)
        })
        .catch((error)=>alert(`Falha: ${error}`))
        .finally((data)=>setCarregando(false))
    }

    function verificarErro(){
            return (
                <View style={styles.dadosContainer}>
                    <FlatList
                        data={resultados}
                        renderItem={({item})=>
                            <TouchableOpacity 
                                style={[styles.result, {backgroundColor: temaActual.background_color, borderBottomColor: temaActual.border_color}]}
                                activeOpacity={0.7}
                                onPress={()=>{
                                    buscarSignificado(item)
                                    setModalVisible(true)
                                }}
                            >
                                    <Text style={[styles.resultText, {color:temaActual.text_color}]}>
                                        {
                                            item? (
                                                item
                                            ): (
                                                responseMsg
                                            )
                                            
                                        }
                                    </Text>
                            </TouchableOpacity>
                        }
                    />
                    <Modal
                        animationType='slide'
                        visible={modalVisible}
                        transparent={true}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={[styles.modal, {backgroundColor: temaActual.background_color}]}>
                            <TouchableOpacity 
                                style={[styles.closeModalBtn, {backgroundColor: temaActual.detalhes_color}]} 
                                onPress={()=>setModalVisible(false)}
                                activeOpacity={0.7}
                            >
                                <FontAwesome name='close' size={20} color='#fff'/>
                            </TouchableOpacity>
                            <View style={styles.modalContent}>
                                <Text style={[styles.palavraPortugues, {borderBottomColor: temaActual.border_color, color: temaActual.text_color}]}>
                                    {
                                        palavra
                                    }
                                </Text>
                                <Text style={[styles.significado, {color: temaActual.text_color}]}>
                                    {
                                        significado
                                    }
                                </Text>
                            </View>
                        </View>
                    </Modal>
                </View>
                )
    }

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: temaActual.background_color}]} key={chave}>
             <View style={[styles.searchContainer, {borderColor: temaActual.border_color}]}>
                    <FontAwesome name='search' color={temaActual.detalhes_color} size={25}/>
                 <TextInput
                     style={[styles.input, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                     placeholder='Pesquisar por uma palavra'
                     placeholderTextColor={temaActual.text_color}
                     selectionColor={temaActual.detalhes_color}
                     autoFocus={true}
                     onChangeText={setInto}
                     value={into}
                     onChange={mostrarResultados(into)}
                 />
             </View>
 
             {
                 internetError? (
                    <Error />
                 ): (
                    verificarErro()
                 )
                 
             }
        </SafeAreaView>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80
    },
    dadosContainer: {
    },
    searchContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 10,
        marginHorizontal: 15,
        marginBottom: 10,
        borderWidth: .5,
        borderRadius: 5,
        borderRadius: 10,
    },
    input: {
        padding: 10,
        fontSize: 18,
        width: '100%',
        borderLeftWidth: .2,
        marginStart: 10,
        borderLeftWidth: 1,
    },
    result: {
        padding: 15,
        borderBottomWidth: 1,
        paddingStart: 20
    },
    resultText: {
        fontSize: 14,
        fontWeight: '500'
    },
    modal: {
        flex: 1,
        padding: 14
    },
    closeModalBtn: {
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    palavraPortugues: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 14,
        borderBottomWidth: 1,
        padding: 14,
    },
    significado: {
        padding: 14,
        fontSize: 18,
    },
    loadingContainer: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})