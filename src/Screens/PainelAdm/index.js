import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Button,
    SafeAreaView,
    ScrollView,
    Modal,
    TextInput
} from 'react-native';
import {useContext, useEffect, useState, useCallback} from 'react'
import {useNavigation, useFocusEffect, CommonActions} from '@react-navigation/native'
import ThemeContext from '../../Contexts/ThemeContext'
import AuthContext from '../../Contexts/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Entypo, MaterialCommunityIcons, MaterialIcons, FontAwesome} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PainelAdm(){
    const [numPalavras, setNumPalavras] = useState(0)
    const [numFrases, setNumFrases] = useState(0)
    const {temaActual } = useContext(ThemeContext)
    const [novaPalavraPortugues, setNovaPalavraPortugues] = useState('')
    const [novaPalavraUmbundo, setNovaPalavraUmbundo] = useState('')
    const [responseAddPalavra, setResponseAddPalava] = useState('')
    const [responseDelPalavra, setResponseDelPalava] = useState('')
    const [responseAddFrase, setResponseAddFrase] = useState('')
    const [responseDelFrase, setResponseDelFrase] = useState('')
    const [responseDelTodasFrase, setResponseDelTodasFrase] = useState('')
    const [responseDelTodasPalavra, setResponseDelTodasPalavra] = useState('')
    const [novaFrase, setNovaFrase] = useState('')
    const [novaTraducao, setNovaTraducao] = useState('')
    const [palavraParaDeletar, setPalavraParaDeletar] = useState('')
    const [fraseParaDeletar, setFraseParaDeletar] = useState('')
    const [modalAddPalavraVisible, setModalAddPlavraVisible] = useState(false)
    const [modalAddFraseVisible, setModalAddFraseVisible] = useState(false)
    const [modalDelPalavra, setModalDelPalavra] = useState(false)
    const [modalDelTodasPalavra, setModalDelTodasPalavra] = useState(false)
    const [modalDelFrase, setModalDelFrase] = useState(false)
    const [modalDelTodasFrase, setModalDelTodasFrase] = useState(false)
    const [showModalFrase, setShowModalFrase] = useState(false)
    const {token, Logout} = useContext(AuthContext)
    const [chave, setChave] = useState(0)
    const navigation = useNavigation()

    function logOut(){
        Logout()
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          }));
    }

    useFocusEffect(
        useCallback(()=>{
           setChave(prevState => prevState + 1)
           setNovaPalavraPortugues('')
           setNovaPalavraUmbundo('')
           setFraseParaDeletar('')
           setPalavraParaDeletar('')
           setNovaFrase('')
        }, [])
    )
    

    useEffect(
        ()=>{
            const url = 'http://192.168.43.58:3000/palavrasPortugues';
            fetch(url)
            .then((response)=>response.json())
            .then((res)=>{setNumPalavras(res.length)})
            .catch((error)=>alert(`Falha: ${error}`))
        },[]
    )
    useEffect(
        ()=>{
            const url = 'http://192.168.43.58:3000/frases';
            fetch(url)
            .then((response)=>response.json())
            .then((res)=>{setNumFrases(res.length)})
            .catch((error)=>alert(`Falha: ${error}`))
        },[]
    )


    async function adicionarPalavra(){
        const url = 'http://192.168.43.58:3000/adm/adicionar_palavra';
        const dados = {
            'palavraUmbundo': novaPalavraUmbundo,
            'significado': novaPalavraPortugues
        }

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dados)
        })
        .then((res)=>res.json())
        .then((json)=>setResponseAddPalava(json.msg))
        .catch((error)=>alert(error))

    }
    async function deletarPalavra(){
        const url = 'http://192.168.43.58:3000/adm/deletar_palavra';
        const dado = {
            'palavra': palavraParaDeletar
        }

        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dado)
        })
        .then((res)=>res.json())
        .then((json)=>setResponseDelPalava(json.msg))

    }
    async function adicionarFrase(){
        const url = 'http://192.168.43.58:3000/adm/adicionar_frase';
        const dados = {
            'frase': novaFrase,
            'traducao': novaTraducao
        }

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dados)
        })
        .then((res)=>res.json())
        .then((json)=>setResponseAddFrase(json.msg))
        .catch((error)=>alert(error))

    }
    async function deletarFrase(){
        const url = 'http://192.168.43.58:3000/adm/deletar_frase';
        const dado = {
            'frase': fraseParaDeletar
        }

        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dado)
        })
        .then((res)=>res.json())
        .then((json)=>setResponseDelFrase(json.msg))

    }

    async function deletarTodasFrases(){
        const url = 'http://192.168.43.58:3000/adm/deletar_todas_frases'
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res)=>res.json())
        .then((json)=>setResponseDelTodasFrase(json.msg))
    }
    async function deletarTodasPalavras(){
        const url = 'http://192.168.43.58:3000/adm/deletar_todas_palavra'
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res)=>res.json())
        .then((json)=>setResponseDelTodasPalavra(json.msg))
    }
    
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} key={chave}>


            <View style={[styles.header]}>
                <Text style={[styles.admName, {color: temaActual.text_color}]}>
                    Belchior Sapalo
                </Text>

                <TouchableOpacity activeOpacity={.8} style={[styles.logOutBtn, {backgroundColor: temaActual.detalhes_color}]} onPress={()=>logOut()}>
                    <Entypo name='log-out' color='#FFFF' size={30}/>
                </TouchableOpacity>
            </View>

            <View style={[styles.appInfoContainer]}>
                <View style={[styles.appInfo, {backgroundColor: temaActual.detalhes_color, borderColor: temaActual.border_color}]}>
                    <Text 
                        style={[styles.appInfoText, {}]}
                    >
                        Palavras
                    </Text>
                    <Text style={[styles.numIten]}>
                        {
                            numPalavras
                        }
                    </Text>
                </View>
                <View style={[styles.appInfo, {backgroundColor: temaActual.detalhes_color, borderColor: temaActual.border_color}]}>
                    <Text 
                        style={[styles.appInfoText, {}]}
                    >
                        Frases
                    </Text>
                    <Text style={[styles.numIten]}>
                        {
                            numFrases
                        }
                    </Text>
                </View>
            </View>

            <ScrollView  showsVerticalScrollIndicator={false} style={[styles.actionsContainer, {height: 20}]}>
                    <TouchableOpacity 
                        style={[styles.action, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=>setModalAddPlavraVisible(true)}
                    >
                        <View 
                            style={[styles.actionIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <Entypo name='add-to-list' size={35} color={temaActual.detalhes_color}/>
                        </View>
                        <Text style={[styles.actionName, {color: temaActual.text_color}]}>
                            Adicionar palavra
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.action, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=>setModalDelPalavra(true)}
                    >
                        <View 
                            style={[styles.actionIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <MaterialCommunityIcons name='delete' size={35} color={temaActual.detalhes_color}/>
                        </View>
                        <Text style={[styles.actionName, {color: temaActual.text_color}]}>
                            Deletar uma palavra
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.action, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=>setModalDelTodasPalavra(true)}
                    >
                        <View 
                            style={[styles.actionIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <MaterialCommunityIcons name='delete-alert-outline' size={35} color={temaActual.detalhes_color}/>
                        </View>
                        <Text style={[styles.actionName, {color: temaActual.text_color}]}>
                            Deletar todas as palavras
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.action, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=>setModalAddFraseVisible(true)}
                    >
                        <View 
                            style={[styles.actionIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <Entypo name='add-to-list' size={35} color={temaActual.detalhes_color}/>
                        </View>
                        <Text style={[styles.actionName, {color: temaActual.text_color}]}>
                            Adicionar frase
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.action, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=>setModalDelFrase(true)}
                    >
                        <View 
                            style={[styles.actionIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <MaterialCommunityIcons name='delete' size={35} color={temaActual.detalhes_color}/>
                        </View>
                        <Text style={[styles.actionName, {color: temaActual.text_color}]}>
                            Deletar uma frase
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.action, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=>setModalDelTodasFrase(true)}
                    >
                        <View 
                            style={[styles.actionIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <MaterialCommunityIcons name='delete-alert-outline' size={35} color={temaActual.detalhes_color}/>
                        </View>
                        <Text style={[styles.actionName, {color: temaActual.text_color}]}>
                            Deletar todas as frases
                        </Text>
                    </TouchableOpacity>
            </ScrollView>

            <Modal
                animationType='slide'
                visible={modalAddPalavraVisible}
                transparent={true}
                onRequestClose={() => setModalAddPlavraVisible(false)}
            >
                <View style={[styles.modal, {backgroundColor: temaActual.background_color}]}>
                    <View style={styles.modalContent}>
                        
                    <View style={[styles.modalIconContainer]}>
                        <Entypo name='add-to-list' size={50} color={temaActual.detalhes_color}/>
                    </View>
                        <View style={[styles.modalForm]}>
                            <TextInput
                                 placeholder='Insira a palavra em Português' 
                                 placeholderTextColor={temaActual.text_color}
                                 selectionColor={temaActual.detalhes_color} 
                                 style={[styles.modalFormInput, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                                 autoFocus={true}
                                 value={novaPalavraPortugues}
                                 onChangeText={setNovaPalavraPortugues}
                            />
                            <TextInput
                                 placeholder='Insira o significado em Umbundo' 
                                 placeholderTextColor={temaActual.text_color}
                                 selectionColor={temaActual.detalhes_color} 
                                 style={[styles.modalFormInput, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                                 value={novaPalavraUmbundo}
                                 onChangeText={setNovaPalavraUmbundo}
                            />
                            <Button
                                title='Adicionar'
                                color={temaActual.detalhes_color}
                                onPress={()=>adicionarPalavra()}
                            />
                        </View>

                        <View style={[styles.actionResponse]}>
                            {
                                responseAddPalavra ? (
                                    <View>
                                        {
                                            responseAddPalavra === 'Nova palavra adicionada com sucesso' ? (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='verified' color='green'size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseAddPalavra
                                                        }
                                                    </Text>
                                                </View>

                                            ): (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='sms-failed' color='red' size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseAddPalavra
                                                        }
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                ): (
                                    <Text>

                                    </Text>
                                )
                            }
                        </View>
                    </View>
                </View>

            </Modal>
            <Modal
                animationType='slide'
                visible={modalDelPalavra}
                transparent={true}
                onRequestClose={() => setModalDelPalavra(false)}
            >
                <View style={[styles.modal, {backgroundColor: temaActual.background_color}]}>
                    <View style={styles.modalContent}>
                        
                    <View style={[styles.modalIconContainer]}>
                        <MaterialCommunityIcons name='delete' size={50} color={temaActual.detalhes_color}/>
                    </View>
                        <View style={[styles.modalForm]}>
                            <TextInput
                                 placeholder='Insira a palavra que pretende deletar' 
                                 placeholderTextColor={temaActual.text_color}
                                 selectionColor={temaActual.detalhes_color} 
                                 style={[styles.modalFormInput, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                                 value={palavraParaDeletar}
                                 onChangeText={setPalavraParaDeletar}
                            />
                            <Button
                                title='Deletar'
                                color={temaActual.detalhes_color}
                                onPress={()=>deletarPalavra()}
                            />
                        </View>

                        <View style={[styles.actionResponse]}>
                            {
                                responseDelPalavra ? (
                                    <View>
                                        {
                                            responseDelPalavra === 'Palavra excluída com sucesso' ? (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='verified' color='green'size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseDelPalavra
                                                        }
                                                    </Text>
                                                </View>

                                            ): (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='sms-failed' color='red' size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseDelPalavra
                                                        }
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                ): (
                                    <Text>

                                    </Text>
                                )
                            }
                        </View>
                    </View>
                </View>

            </Modal>
            <Modal
                animationType='slide'
                visible={modalAddFraseVisible}
                transparent={true}
                onRequestClose={() => setModalAddFraseVisible(false)}
            >
                <View style={[styles.modal, {backgroundColor: temaActual.background_color}]}>
                    <View style={styles.modalContent}>
                        
                    <View style={[styles.modalIconContainer]}>
                        <Entypo name='add-to-list' size={50} color={temaActual.detalhes_color}/>
                    </View>
                        <View style={[styles.modalForm]}>
                            <TextInput
                                 placeholder='Insira uma frase em Português' 
                                 placeholderTextColor={temaActual.text_color}
                                 selectionColor={temaActual.detalhes_color} 
                                 style={[styles.modalFormInput, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                                 autoFocus={true}
                                 value={novaFrase}
                                 onChangeText={setNovaFrase}
                            />
                            <TextInput
                                 placeholder='Insira a tradução em Umbundo' 
                                 placeholderTextColor={temaActual.text_color}
                                 selectionColor={temaActual.detalhes_color} 
                                 style={[styles.modalFormInput, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                                 value={novaTraducao}
                                 onChangeText={setNovaTraducao}
                            />
                            <Button
                                title='Adicionar'
                                color={temaActual.detalhes_color}
                                onPress={()=>adicionarFrase()}
                            />
                        </View>

                        <View style={[styles.actionResponse]}>
                            {
                                responseAddFrase ? (
                                    <View>
                                        {
                                            responseAddFrase === 'Nova frase adicionada com sucesso' ? (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='verified' color='green'size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseAddFrase
                                                        }
                                                    </Text>
                                                </View>

                                            ): (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='sms-failed' color='red' size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseAddFrase
                                                        }
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                ): (
                                    <Text>

                                    </Text>
                                )
                            }
                        </View>
                    </View>
                </View>

            </Modal>
            <Modal
                animationType='slide'
                visible={modalDelFrase}
                transparent={true}
                onRequestClose={() => setModalDelFrase(false)}
            >
                <View style={[styles.modal, {backgroundColor: temaActual.background_color}]}>
                    <View style={styles.modalContent}>
                        
                    <View style={[styles.modalIconContainer]}>
                        <MaterialIcons name='delete' size={50} color={temaActual.detalhes_color}/>
                    </View>
                        <View style={[styles.modalForm]}>
                            <TextInput
                                 placeholder='Insira a frase que pretende deletar' 
                                 placeholderTextColor={temaActual.text_color}
                                 selectionColor={temaActual.detalhes_color} 
                                 style={[styles.modalFormInput, {borderColor: temaActual.border_color, color: temaActual.text_color}]}
                                 autoFocus={true}
                                 value={fraseParaDeletar}
                                 onChangeText={setFraseParaDeletar}
                            />
                            <Button
                                title='Deletar'
                                color={temaActual.detalhes_color}
                                onPress={()=>deletarFrase()}
                            />
                        </View>

                        <View style={[styles.actionResponse]}>
                            {
                                responseDelFrase ? (
                                    <View>
                                        {
                                            responseDelFrase === 'Frase excluída com sucesso' ? (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='verified' color='green'size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseDelFrase
                                                        }
                                                    </Text>
                                                </View>

                                            ): (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='sms-failed' color='red' size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseDelFrase
                                                        }
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                ): (
                                    <Text>

                                    </Text>
                                )
                            }
                        </View>
                    </View>
                </View>

            </Modal>
            <Modal
                animationType='slide'
                visible={modalDelTodasPalavra}
                transparent={true}
                onRequestClose={() => setModalDelTodasPalavra(false)}
            >
                <View style={[styles.modal, {backgroundColor: temaActual.background_color}]}>
                    <View style={styles.modalContent}>
                        
                    <View style={[styles.modalIconContainer]}>
                        <MaterialCommunityIcons name='delete-alert-outline' size={50} color={temaActual.detalhes_color}/>
                    </View>

                            <View>
                                <Text style={[styles.formQuest, {color: temaActual.text_color}]}>
                                    Deseja eliminar todas as palavras do dicionário?
                                </Text>
                                <Button
                                     title='Sim'
                                     color={temaActual.detalhes_color}
                                     onPress={()=>deletarTodasPalavras()}
                                />
                            </View>

                        <View style={[styles.actionResponse]}>
                            {
                                responseDelTodasPalavra ? (
                                    <View>
                                        {
                                            responseDelTodasPalavra === 'Todas as palavras do dicionário foram deletadas' ? (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='verified' color='green'size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseDelTodasPalavra
                                                        }
                                                    </Text>
                                                </View>

                                            ): (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='sms-failed' color='red' size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseDelTodasPalavra
                                                        }
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                ): (
                                    <Text>

                                    </Text>
                                )
                            }
                        </View>
                    </View>
                </View>

            </Modal>
            <Modal
                animationType='slide'
                visible={modalDelTodasFrase}
                transparent={true}
                onRequestClose={() => setModalDelTodasFrase(false)}
            >
                <View style={[styles.modal, {backgroundColor: temaActual.background_color}]}>
                    <View style={styles.modalContent}>
                        
                    <View style={[styles.modalIconContainer]}>
                        <MaterialCommunityIcons name='delete-alert-outline' size={50} color={temaActual.detalhes_color}/>
                    </View>

                            <View>
                                <Text style={[styles.formQuest, {color: temaActual.text_color}]}>
                                    Deseja eliminar todas as frases do tradutor?
                                </Text>
                                <Button
                                     title='Sim'
                                     color={temaActual.detalhes_color}
                                     onPress={()=>deletarTodasFrases()}
                                />
                            </View>

                        <View style={[styles.actionResponse]}>
                            {
                                responseDelTodasFrase ? (
                                    <View>
                                        {
                                            responseDelTodasFrase === 'Todas as frases do tradutor foram deletadas' ? (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='verified' color='green'size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseDelTodasFrase
                                                        }
                                                    </Text>
                                                </View>

                                            ): (
                                                <View style={[styles.response]}>
                                                    <MaterialIcons name='sms-failed' color='red' size={30}/>
                                                    <Text style={[styles.responseText, {color: temaActual.text_color}]}>
                                                        {
                                                            responseDelTodasFrase
                                                        }
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                ): (
                                    <Text>

                                    </Text>
                                )
                            }
                        </View>
                    </View>
                </View>

            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    admName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    logOutBtn: {
        width: 50,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionsContainer: {
        marginVertical: 10,
        paddingVertical: 5
    },
    action: {
        marginHorizontal: 10,
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
     },
    actionIcon: {
        borderRadius: 60/2,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginRight: 20,
        borderWidth: 2,
    },
    actionName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    appInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    appInfo: {
        marginVertical: 10,
        height: 150,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        flex: 1,
        marginHorizontal: 5
    },
    appInfoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff'
    },
    numIten: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffff'
    },
    modal: {
        flex: 1,
        padding: 14,
    },
    modalTitle: {
        fontSize: 20
    },
    modalForm: {
        alignItems: 'center',
        marginVertical: 20,
    },
    modalFormInput: {
        borderWidth: 1,
        margin: 15,
        width: '90%',
        padding: 15,
        borderRadius: 5,
        fontSize: 18,
        height: 100,
        textAlignVertical: 'top',
    },
    submitModalBtn: {
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    submitText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFF'
    },
    modalIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    actionResponse: {

    },
    response: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    responseText: {
        fontSize: 25
    },
    formQuest: {
        fontSize: 20,
        marginVertical: 10,
        justifyContent: 'center'
    }
})