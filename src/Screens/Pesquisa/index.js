import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput, 
    Modal,
    FlatList, 
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react'
import {FontAwesome} from '@expo/vector-icons'
import Error from '../../Components/Error';
import {useFocusEffect} from '@react-navigation/native'

export default function Pesquisa(){
    const [dados, setDados] = useState([])
    const [palavra, setPalavra] = useState('')
    const [significado, setSignificado] = useState('')
    const [into, setInto] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [carregando, setCarregando] = useState(true)
    const [chave, setChave] = useState(0)

    const url = 'http://192.168.43.58:3000/palavrasPortugues';

    useEffect(
        ()=>{
            fetch(url)
            .then((response)=>response.json())
            .then((json)=> json.sort((a, b)=> a.palavraPortugues.localeCompare(b.palavraPortugues)))
            .then((res)=>setDados(res))
            .then(()=>console.log(dados))
            .catch((error)=>alert(`Falha: ${error}`))
            .finally(()=>setCarregando(false))
        },[]
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
            resultados[0] = 'sem resultados...'
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
        if(dados.length == 0){
            return (
                <Error route='Pesquisa'/>
            )
        }else{
            return (
                <View>
                    <FlatList
                        data={resultados}
                        renderItem={({item})=>
                            <TouchableOpacity 
                                style={styles.result}
                                activeOpacity={0.7}
                                onPress={()=>{
                                    buscarSignificado(item)
                                    setModalVisible(true)
                                }}
                            >
                                    <Text style={styles.resultText}>
                                        {
                                            item
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
                        <View style={styles.modal}>
                            <TouchableOpacity 
                                style={styles.closeModalBtn} 
                                onPress={()=>setModalVisible(false)}
                                activeOpacity={0.7}
                            >
                                <FontAwesome name='close' size={20} color='#eaeaea'/>
                            </TouchableOpacity>
                            <View style={styles.modalContent}>
                                <Text style={styles.palavraPortugues}>
                                    {
                                        palavra
                                    }
                                </Text>
                                <Text style={styles.significado}>
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
    }

    useFocusEffect(
        useCallback(()=>{
           setChave(prevChave=> prevChave + 1)
        }, [])
    )
    return(
        <View style={styles.container} key={chave}>
             <View style={styles.searchContainer}>
                 <TextInput
                     style={styles.input}
                     placeholder='Pesquisar'
                     placeholderTextColor='#eaeaea'
                     autoFocus={true}
                     onChangeText={setInto}
                     value={into}
                     onChange={mostrarResultados(into)}
                 />
             </View>
 
             {
                 verificarErro()
             }
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    searchContainer: {
        backgroundColor: '#00A896',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 20,
        paddingEnd: 20
    },
    input: {
        padding: 15,
        color: '#eaeaea',
        fontSize: 18,
        width: 300
    },
    searchBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        padding: 10,
        borderLeftColor: '#eaeaea'
    },
    result: {
        padding: 18,
        backgroundColor: '#0d0d06',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(222, 222, 222)'
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#eaeaea'
    },
    modal: {
        flex: 1,
        backgroundColor: '#eaeaea',
        padding: 14
    },
    closeModalBtn: {
        backgroundColor: '#FF6B35',
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    palavraPortugues: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(222, 222, 222)',
        padding: 14
    },
    significado: {
        padding: 14
    },
})