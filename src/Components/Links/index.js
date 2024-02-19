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
import {detalhes, primary_color, secondary_color} from '../Cores/index'


export default function Links(){
    const navigation = useNavigation()
    function abrirLink(){
        Linking.openURL('https://pt.wikipedia.org/wiki/L%C3%ADngua_umbundo#Invent%C3%A1rio_Fon%C3%A9tico')
    }
    return(
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.btnContainer}>
                <View>
                    <TouchableOpacity style={styles.btn} activeOpacity={.7} onPress={()=> navigation.navigate('Dicionario')}>
                        <View style={styles.btnIcon}>
                            <FontAwesome5 name='book-reader' size={35} color={detalhes}/>
                        </View>
                    <Text style={styles.btnName}>
                        Dicionário
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} activeOpacity={.7} onPress={()=> navigation.navigate('Alfabeto')}>
                        <View style={styles.btnIcon}>
                            <Text style={styles.abIcon}>
                                A-Z
                            </Text>
                        </View>
                    <Text style={styles.btnName}>
                        Alfabeto
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} activeOpacity={.7} onPress={()=> abrirLink()}>
                        <View style={styles.btnIcon}>
                            <Entypo name='book' size={35} color={detalhes}/>
                        </View>
                        <Text style={styles.btnName}>
                            Gramática <Feather name='external-link' size={15} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.btn} activeOpacity={.7} onPress={()=> navigation.navigate('Tradutor')}>
                        <View style={styles.btnIcon}>
                            <MaterialCommunityIcons name='translate' size={35} color={detalhes}/>
                        </View>
                    <Text style={styles.btnName}>
                        Tradutor
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} activeOpacity={.7} onPress={()=> navigation.navigate('Sobre_a_lingua')}>
                        <View style={styles.btnIcon}>
                            <FontAwesome name='book' size={35} color={detalhes}/>
                        </View>
                        <Text style={styles.btnName}>
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
    },
    btn: {
       marginHorizontal: 10,
       marginBottom: 20,
       alignItems: 'center',
       flexDirection: 'row',
       backgroundColor: secondary_color,
       padding: 10,
       borderRadius: 10,
    },
    btnIcon: {
        backgroundColor: primary_color,
        borderRadius: 60/2,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginRight: 20,
        borderWidth: 2,
        borderColor: detalhes
    },
    btnName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    abIcon: {
        fontSize: 25,
        fontWeight: 'bold',
        color: detalhes
    }
})