import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import {FontAwesome5} from '@expo/vector-icons'
import { detalhes } from '../Cores'

export default function AppLogo( {color, sizeIcon, sizeText} ){
    return(
        <View style={styles.container}>
            <Text style={[styles.text, {
                fontSize: sizeText
            }]}>
                OKUTANGA
            </Text>
            <FontAwesome5 name='user-graduate' size={sizeIcon ? sizeIcon: 30} color={color}/>
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
        color: detalhes,
        marginRight: 10,
    }
})