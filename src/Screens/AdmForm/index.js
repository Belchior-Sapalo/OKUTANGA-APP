import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Button
} from 'react-native';

import {FontAwesome, MaterialIcons} from '@expo/vector-icons'
import React, {useState, useCallback, useContext} from 'react'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import ThemeContext from '../../Contexts/ThemeContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../Contexts/AuthContext';

export default function Adm(){
    const {temaActual} = useContext(ThemeContext)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [response, setResponse] = useState(null)
    const [autenticado, setAutenticado] = useState(false)
    const [admNome, setAdmNome] = useState('')
    const [chave, setChave] = useState(0)
    const navigation = useNavigation()
    const {token, Login} = useContext(AuthContext)

    useFocusEffect(
        useCallback(()=>{
           setChave(prevState => prevState + 1)
           setEmail('')
           setSenha('')
           setResponse('')
        }, [])
    )

    async function setToken(token){
        try{
            await AsyncStorage.setItem('token', token)
            alert('token salvo com sucesso')
        }catch(error){
            alert(error)
        }
    }

    function login(){
        const url = 'http://192.168.43.58:3000/adm/login';
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
        .then((json)=>{setResponse( json.msg ? json.msg: '' ); 
            if(json.auth){
                Login(json.token)
                navigation.navigate('PainelAdm')
            }else{
                navigation.navigate('Administrador')
            }
        })
        .catch((error)=>alert(error))
    }

    const responseMsg = (res)=>{
        return(
            <View style={[styles.responseMsgContainer]}>
                <MaterialIcons name='error' size={40} color='#DF6E1A'/>
                <Text style={[styles.responseMsgText, {color:'#FFCCCC'}]}>
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
            <View>
                {
                    response ? (<Text>{responseMsg(response)}</Text>): (<Text></Text>)
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
                selectionColor={temaActual.detalhes_color} 
                style={[styles.input, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                autoFocus={true}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                
           />
           <TextInput
                placeholder='Senha'
                placeholderTextColor={temaActual.text_color}
                selectionColor={temaActual.detalhes_color} 
                style={[styles.input, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
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
        marginTop: 20,
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
        width: 300,
        padding: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    responseMsgText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})