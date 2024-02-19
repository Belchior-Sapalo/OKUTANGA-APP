import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {detalhes, error_color} from '../../Components/Cores/index'

export default function Error( {route} ){
    const navigation = useNavigation()
    function reload(){
        navigation.navigate(route)
    }
    return(
        <View style={styles.container}>
            <View style={styles.errorIcon}>
                <MaterialIcons name='sms-failed' size={60} color={error_color}/>
            </View>
            <View style={styles.erroInfoContainer}>
                <Text style={styles.errorMsg}>
                    Falha ao requisitar dados
                </Text>
                <Text style={styles.errorDica}>
                    Verifique sua conexão a internet ou reinicie o aplicativo
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    erroInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMsg: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    reloadBtnContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
})