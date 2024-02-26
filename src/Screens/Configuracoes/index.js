import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Switch
} from 'react-native';
import react,{useState, useContext} from 'react'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import ThemeContext from '../../Contexts/ThemeContext';


export default function Configuracoes(){
    
    const { tema, mudarTema, temaActual } = useContext(ThemeContext)
    
    return(
        <SafeAreaView style={[styles.container, {backgroundColor:temaActual.background_color}]}>
            <View style={styles.configGroup}>
                <Text style={[styles.configTema, {color:temaActual.text_color}]}>
                    Tema
                </Text>
                <View style={[styles.configOptionsContainer, {backgroundColor: temaActual.configs_links_color}]}>
                    <View style={[styles.configOption, {borderBottomWidth: 0}]} activeOpacity={1}>
                        <View style={styles.configOptionInfo}>
                            <MaterialCommunityIcons name='theme-light-dark' size={30} color={temaActual.icons_color}/>

                            <Text style={[styles.configOptionText, {color:temaActual.text_color}]}>
                                Modo escuro
                            </Text>
                        </View>

                        <Switch 
                            thumbColor='#ffff'
                            value={tema === 'claro'}
                            onValueChange={mudarTema}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} 
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
    },
    configGroup: {
        
    },
    configTema: {
        fontSize: 18,
    },
    configOptionsContainer: {
        borderRadius: 20,
        marginVertical: 10
    },
    configOption: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        
    },
    configOptionInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    configOptionText: {
        marginHorizontal: 20,
    },
    configSelect: {
        width: 20,
        height: 20,
        borderRadius: 20/2
    }
})