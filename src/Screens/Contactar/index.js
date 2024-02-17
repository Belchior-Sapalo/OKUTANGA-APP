import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Logo from '../../Components/AppLogo/index';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons'

export default function Contactar(){
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Logo sizeIcon={30} sizeText={30} color='#FF6B35'/>
            </View>
            <View style={styles.copy}>
                <Text style={styles.copyText}>
                    &copy; Belchior Sapalo/Huambo-Angola 2024
                </Text>
            </View>
            <View style={styles.contacts}>
                <TouchableOpacity style={styles.contact} activeOpacity={1}>
                    <MaterialIcons name='attach-email' color='#eaeaea' size={20}/>
                    <Text style={styles.contactText}>
                        belchiorsapalo@gmail.com
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contact} activeOpacity={1}>
                    <MaterialIcons name='phone' color='#eaeaea' size={20}/>
                    <Text style={styles.contactText}>
                        +244 921082076
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0d0d06',
        paddingVertical: 50
    },
    copy: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    copyText: {
        color: '#eaeaea',
        margin: 10,
        fontWeight: '100'
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    contactText: {
        color: '#139FCB',
        marginLeft: 20,
        textDecorationLine: 'underline'
    }
})