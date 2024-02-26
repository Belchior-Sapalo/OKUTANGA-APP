import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { useContext } from 'react';
import ThemeContext from '../../Contexts/ThemeContext'

export default function Alfabeto(){
    const {temaActual } = useContext(ThemeContext)
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: temaActual.background_color}]}>
            <ScrollView>
                <SafeAreaView style={styles.letras}>
                    <View 
                        style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}
                    >
                        <Text style={styles.port}>
                            A-a
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            C-c
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            E-e
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            F-f
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            H-h
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            I-i
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            K-k
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            L-l
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            M-m
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            MB-mb
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            N-n
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            ND-nd
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            NG-ng
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            NJ-nj
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            O-o
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            P-p
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            S-s
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            T-t
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            U-u
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            V-v
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            W-w
                        </Text>
                    </View>
                    <View style={[styles.letra, {borderColor: temaActual.border_color, backgroundColor: temaActual.btn_icon_color}]}>
                        <Text style={styles.port}>
                            Y-y
                        </Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    letras: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    letra: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 110,
        borderRadius: 110/2,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    port: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    umb: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})