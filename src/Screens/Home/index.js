import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import {
    Entypo
} from '@expo/vector-icons'
import Links from '../../Components/Links';

export default function Home(){
    return(
        <SafeAreaView>
            <Links />
        </SafeAreaView>
    )
}
