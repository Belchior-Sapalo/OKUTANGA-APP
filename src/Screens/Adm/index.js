import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {FontAwesome, MaterialIcons} from '@expo/vector-icons'
import React, {useEffect, useState} from 'react'

export default function Adm(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function teste(){
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)
    }


    return(
        <View style={styles.admInputContainer}>
            <View style={styles.admIconContainer}>
                <MaterialIcons name='admin-panel-settings' size={50} color='#DF6E1A'/>
            </View>
            <Text style={styles.text}>
                Bem vindo
            </Text>
           <TextInput
                placeholder='Email' 
                placeholderTextColor='rgba(0,0,0,.2)'
                selectionColor='rgba(0,0,0,.2)'
                style={styles.input}
                autoFocus={true}
                value={email}
                onChangeText={setEmail}
                
           />
           <TextInput
                placeholder='Senha'
                placeholderTextColor='rgba(0,0,0,.2)'
                selectionColor='rgba(0,0,0,.2)' 
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
           />
           <TouchableOpacity 
                style={styles.submitBtn}
                activeOpacity={0.8}
                onPress={()=>teste()}
            >
                <Text style={styles.submitText}>
                    Enviar
                </Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    admInputContainer: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
    },
    admIconContainer: {
        padding: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    },
    input: {
        borderWidth: 1,
        margin: 15,
        width: '80%',
        padding: 15,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 5,
        fontSize: 18
    },
    submitBtn: {
        backgroundColor: '#DF6E1A',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10
    },
    submitText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff'
    }
})