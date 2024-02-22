import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Linking
} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {
    Entypo,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
    FontAwesome5,
    Feather
} from '@expo/vector-icons'
import ThemeContext from '../../Contexts/ThemeContext';
import {useContext} from 'react'


export default function Links(){
    
    const { temaActual } = useContext(ThemeContext)
    const navigation = useNavigation()
    function abrirLink(){
        Linking.openURL('https://pt.wikipedia.org/wiki/L%C3%ADngua_umbundo#Invent%C3%A1rio_Fon%C3%A9tico')
    }
    return(
            <ScrollView showsHorizontalScrollIndicator={false} style={[styles.btnContainer, {backgroundColor: temaActual.background_color}]}>
                <View>
                    <TouchableOpacity 
                        style={[styles.btn, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=> navigation.navigate('Dicionario')}
                    >
                        <View 
                            style={[styles.btnIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <FontAwesome5 name='book-reader' size={35} color={temaActual.detalhes_color}/>
                        </View>
                    <Text style={[styles.btnName, {color: temaActual.text_color}]}>
                        Dicionário
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                        style={[styles.btn, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=> navigation.navigate('Alfabeto')}
                    >
                        <View 
                            style={[styles.btnIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <Text style={[styles.abIcon, {color: temaActual.detalhes_color}]}>
                                A-Z
                            </Text>
                        </View>
                    <Text style={[styles.btnName, {color: temaActual.text_color}]}>
                        Alfabeto
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                        style={[styles.btn, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=> abrirLink()}
                    >
                        <View 
                            style={[styles.btnIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <Entypo name='book' size={35} color={temaActual.detalhes_color}/>
                        </View>
                        <Text style={[styles.btnName, {color: temaActual.text_color}]}>
                            Gramática <Feather name='external-link' size={15} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity 
                        style={[styles.btn, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=> navigation.navigate('Tradutor')}
                    >
                        <View 
                            style={[styles.btnIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <MaterialCommunityIcons name='translate' size={35} color={temaActual.detalhes_color}/>
                        </View>
                    <Text style={[styles.btnName, {color: temaActual.text_color}]}>
                        Tradutor
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                        style={[styles.btn, {backgroundColor: temaActual.background_color, borderColor: temaActual.border_color}]} 
                        activeOpacity={.7} 
                        onPress={()=> navigation.navigate('Sobre_a_lingua')}
                    >
                        <View 
                            style={[styles.btnIcon, {backgroundColor: temaActual.background_color, borderColor: temaActual.detalhes_color}]}
                        >
                            <FontAwesome name='book' size={35} color={temaActual.detalhes_color}/>
                        </View>
                        <Text style={[styles.btnName, {color: temaActual.text_color}]}>
                            Sobre a língua
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}
const styles = StyleSheet.create({
    btnContainer: {
        paddingStart: 10,
        paddingEnd: 10,
        paddingVertical: 20,
        marginBottom: 10,
        height: '100%',
    },
    btn: {
       marginHorizontal: 10,
       marginBottom: 20,
       alignItems: 'center',
       flexDirection: 'row',
       padding: 10,
       borderRadius: 10,
       borderWidth: 1,
    },
    btnIcon: {
        borderRadius: 60/2,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginRight: 20,
        borderWidth: 2,
    },
    btnName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    abIcon: {
        fontSize: 25,
        fontWeight: 'bold',
    }
})