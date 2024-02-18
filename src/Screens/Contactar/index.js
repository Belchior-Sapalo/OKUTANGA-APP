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

export default function Contactar(){
    return(
        <SafeAreaView style={styles.container}>
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
                    <MaterialIcons name='attach-email' color='#000' size={20}/>
                    <Text style={styles.contactText}>
                        belchiorsapalo@gmail.com
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contact} activeOpacity={1}>
                    <MaterialIcons name='phone' color='#000' size={20}/>
                    <Text style={styles.contactText}>
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
        paddingVertical: 50
    },
    copy: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    copyText: {
        color: '#000',
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