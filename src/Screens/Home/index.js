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
        <SafeAreaView style={styles.container}>
            <Links />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },

})