import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {
    Entypo
} from '@expo/vector-icons'
import Links from '../../Components/Links';



export default function Home(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Links />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

})