import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import {FontAwesome5} from '@expo/vector-icons'
import ThemeContext from '../../Contexts/ThemeContext'
import {useContext} from 'react'

export default function AppLogo(){
    const { tema, temaActual } = useContext(ThemeContext)
    return(
        <View style={styles.container}>
            <Text style={[styles.text, {
                color: temaActual.detalhes_color
            }]}>
                OKUTANGA
            </Text>
            <FontAwesome5 name='user-graduate' size={30} color={temaActual.detalhes_color}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginEnd: 14,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    }
})