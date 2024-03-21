import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Button
} from 'react-native';
import {
    Entypo
} from '@expo/vector-icons'
import Links from '../../Components/Links';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home(){
    async function getToken(){
        try{
            const token = await AsyncStorage.getItem('token')
            alert(token)
        }catch(error){
            alert(error)
        }
    }
    return(
        <SafeAreaView>
            <Links />
        </SafeAreaView>
    )
}
