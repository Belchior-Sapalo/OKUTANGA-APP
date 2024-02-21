import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import Logo from '../../Components/AppLogo/index';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons'
import ThemeContext from '../../Contexts/ThemeContext';
import {useContext} from 'react'

export default function Contactar(){
    const { temaActual } = useContext(ThemeContext)
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: temaActual.background_color}]}>
            <View style={styles.logo}>
                <Logo sizeIcon={30} sizeText={30} color={temaActual.detalhes_color}/>
            </View>
            <View style={styles.copy}>
                <Text style={[styles.copyText, {color:temaActual.text_color}]}>
                    &copy; Belchior Sapalo/Huambo-Angola 2024
                </Text>
            </View>
            <View style={styles.contacts}>
                <TouchableOpacity style={styles.contact} activeOpacity={1}>
                    <MaterialIcons name='attach-email' color={temaActual.icons_color} size={20}/>
                    <Text style={[styles.contactText, {color: temaActual.detalhes_color}]}>
                        belchiorsapalo@gmail.com
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contact} activeOpacity={1}>
                    <MaterialIcons name='phone' color={temaActual.icons_color} size={20}/>
                    <Text style={[styles.contactText, {color: temaActual.detalhes_color}]}>
                        +244 921082076
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 50,
    },
    copy: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    copyText: {
        margin: 10,
        fontWeight: '100'
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    contactText: {
        marginLeft: 20,
        textDecorationLine: 'underline'
    }
})