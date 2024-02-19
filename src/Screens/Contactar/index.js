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
import {detalhes, primary_color, secondary_color, dark_color} from '../../Components/Cores/index'

export default function Contactar(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Logo sizeIcon={30} sizeText={30} color={detalhes}/>
            </View>
            <View style={styles.copy}>
                <Text style={styles.copyText}>
                    &copy; Belchior Sapalo/Huambo-Angola 2024
                </Text>
            </View>
            <View style={styles.contacts}>
                <TouchableOpacity style={styles.contact} activeOpacity={1}>
                    <MaterialIcons name='attach-email' color={dark_color} size={20}/>
                    <Text style={styles.contactText}>
                        belchiorsapalo@gmail.com
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contact} activeOpacity={1}>
                    <MaterialIcons name='phone' color={dark_color} size={20}/>
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
        color: dark_color,
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
        color: detalhes,
        marginLeft: 20,
        textDecorationLine: 'underline'
    }
})