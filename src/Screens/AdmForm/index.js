import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

import {FontAwesome, MaterialIcons} from '@expo/vector-icons'
import React, {useState, useCallback, useContext} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import ThemeContext from '../../Contexts/ThemeContext'

export default function Adm(){
    const {temaActual } = useContext(ThemeContext)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [response, setResponse] = useState(null)
    const [autenticado, setAutenticado] = useState(false)
    const [admNome, setAdmNome] = useState('')
    const [chave, setChave] = useState(0)

    useFocusEffect(
        useCallback(()=>{
           setChave(prevChave=> prevChave + 1)
        }, [])
    )

    function login(){
        const url = 'http://192.168.43.58:3000/login';
        const dados = {
            email: email,
            senha: senha
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then((response)=>response.json())
        .then((json)=>{setResponse( json.msg ? json.msg: '' ); setAutenticado(json.auth); setAdmNome(json.nome)})
        .catch((error)=>alert('error'))
    }

    const responseMsg = (res)=>{
        return(
            <View style={styles.responseMsgContainer}>
                <MaterialIcons name='error' size={40} color='#DF6E1A'/>
                <Text style={[styles.responseMsgText, {backgroundColor:temaActual.error_color}]}>
                    {
                        res
                    }
                </Text>
            </View>
        )
    }

    return(
        <SafeAreaView style={[styles.admInputContainer, {backgroundColor: temaActual.background_color}]} key={chave}>
             <StatusBar 
                barStyle={temaActual.statusBar_content_color}
                backgroundColor={temaActual.header_color}
            />
            <View style={styles.response}>
                {
                    response ? (
                        responseMsg(response)
                    ): (
                        <Text>
                        </Text>
                    )
                }
            </View>
            <View style={[styles.admIconContainer, {borderColor: temaActual.border_color}]}>
                <MaterialIcons name='admin-panel-settings' size={50} color={temaActual.detalhes_color}/>
            </View>
            <Text style={[styles.text, {color: temaActual.text_color}]}>
                Bem vindo
            </Text>
           <TextInput
                placeholder='Email' 
                placeholderTextColor={temaActual.text_color}
                selectionColor='rgba(0,0,0,.2)'
                style={[styles.input, {borderColor: temaActual.border_color}]}
                autoFocus={true}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                
           />
           <TextInput
                placeholder='Senha'
                placeholderTextColor={temaActual.text_color}
                selectionColor='rgba(0,0,0,.2)' 
                style={[styles.input, {borderColor: temaActual.border_color}]}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
           />
           <TouchableOpacity 
                style={[styles.submitBtn, {backgroundColor: temaActual.detalhes_color, borderColor: temaActual.border_color}]}
                activeOpacity={0.8}
                onPress={()=>login()}
            >
                <Text style={styles.submitText}>
                    Enviar
                </Text>
           </TouchableOpacity>

        </SafeAreaView>
            
    )
}

const styles = StyleSheet.create({
    admInputContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
    },
    admIconContainer: {
        padding: 10,
        borderRadius: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
    },
    input: {
        borderWidth: 1,
        margin: 15,
        width: '80%',
        padding: 15,
        borderRadius: 5,
        fontSize: 18,
    },
    submitBtn: {
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 1
    },
    submitText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFF'
    },
    response: {
        width: '100%'
    },
    responseMsgContainer: {
        borderRadius: 8,
        padding: 10,
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    responseMsgText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})