import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native'

import { FontAwesome } from '@expo/vector-icons'
import Error from '../Error';

export default function Dados(){
    const [dados, setDados] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [palavra, setPalavra] = useState('')
    const [significados, setSignificados] = useState('')
    const [modalVible, setModalVisible] = useState(false)
    const [erro, setErro] = useState(false)
    const [chave, setChave] = useState(0)


    const url = 'http://192.168.43.58:3000/palavrasPortugues';

    useEffect(
        ()=>{
            fetch(url)
            .then((response)=>response.json())
            .then((json)=> json.sort((a, b)=> a.palavraPortugues.localeCompare(b.palavraPortugues)))
            .then((res)=>setDados(res))
            .catch((error)=>setErro(true))
            .finally(()=>setCarregando(false))
        },[]
    )

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
        .then((response)=>{return response.json()})
        .then((json)=> {
            setSignificados(json.significados)
            setPalavra(json.entrada)
        })
        .catch((error)=>alert('Falha ao buscar significados'))
        .finally(()=>setModalVisible(true))     
    }

    function verificarErro(){
        return (
            carregando ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={50} color='#FF6B35'/>
                </View>
            ):(
                erro ? (
                    <Error route='Home'/>
                ): (
                        <View style={styles.responseContainer}>
                            <FlatList
                                data={dados}
                                keyExtractor={({id})=>id}
                                renderItem={({item})=>
                                    <TouchableOpacity
                                        style={styles.response}
                                        activeOpacity={0.7}
                                        onPress={()=>buscarSignificado(item.palavraPortugues)}
                                    >
                                        <Text style={styles.responseText}>
                                            {item.palavraPortugues}
                                        </Text>
                                    </TouchableOpacity>
                                }
                            />
                            <Modal
                                animationType='slide'
                                visible={modalVible}
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
                                            <View style={styles.significadosContainer}>
                                                <Text style={styles.palavraPortugues}>
                                                    {
                                                        palavra
                                                    }
                                                </Text>
                                                <Text style={styles.significado}>
                                                    {
                                                        significados
                                                    }
                                                </Text>
                                            </View>
                                        </View>
                                </View>
                            </Modal>
                        </View>
                )
            )
        )
    }
    useFocusEffect(
        useCallback(()=>{
           setChave(prevChave=> prevChave + 1)
        }, [])
    )
    return(
        <View style={styles.container}>
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
    loadingContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    responseContainer: {
    },
    response: {
        padding: 18,
        backgroundColor: '#0d0d06',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(222, 222, 222)'
    },
    responseText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#eaeaea'
    },
    modal: {
        flex: 1,
        backgroundColor: '#eaeaea',
        padding: 14
    },
    modalContent: {

    },
    significadosContainer: {

    },
    palavraPortugues: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(222, 222, 222)',
        padding: 14
    },
    significado: {
        padding: 14,
        fontSize: 18,
    },
    closeModalBtn: {
        backgroundColor: '#FF6B35',
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})