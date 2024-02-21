import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Button
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function PainelAdm(){
    const navigation = useNavigation()
    function logOut(){
        navigation.navigate('Admistrador')
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Painel Administrativo

                <Button 
                    title='Log Out'
                    onPress={()=>logOut()}
                />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})