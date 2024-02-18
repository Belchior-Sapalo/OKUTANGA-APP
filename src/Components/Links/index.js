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
    Entypo,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome
} from '@expo/vector-icons'



export default function Links(){
    const navigation = useNavigation()
    return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.btnContainer}>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnIcon} onPress={()=> navigation.navigate('Abecedario')}>
                        <MaterialCommunityIcons name='translate' size={40} color='#DF6E1A'/>
                    </TouchableOpacity>
                    <Text style={styles.btnName}>
                        Abecedário
                    </Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnIcon} onPress={()=> navigation.navigate('Gramatica')}>
                        <Entypo name='book' size={40} color='#DF6E1A'/>
                    </TouchableOpacity>
                    <Text style={styles.btnName}>
                        Gramática
                    </Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnIcon} onPress={()=> navigation.navigate('Historia')}>
                        <FontAwesome name='book' size={40} color='#DF6E1A'/>
                    </TouchableOpacity>
                    <Text style={styles.btnName}>
                        História
                    </Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnIcon} onPress={()=> navigation.navigate('Quiz')}>
                        <MaterialIcons name='quiz' size={40} color='#DF6E1A'/>
                    </TouchableOpacity>
                    <Text style={styles.btnName}>
                        Quiz
                    </Text>
                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        paddingStart: 10,
        paddingEnd: 10,
        paddingVertical: 20,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#ffff',
        width: '100%'
    },
    btn: {
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 10,
    },
    btnIcon: {
        backgroundColor: '#eaeaea',
        borderRadius: 87/2,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    btnName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    

})