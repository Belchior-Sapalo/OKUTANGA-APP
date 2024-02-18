import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Linking,
    TouchableOpacity
} from 'react-native';

import {Feather} from '@expo/vector-icons'

export default function SobreLingua(){
    function abrirLink(){
        Linking.openURL('https://pt.wikipedia.org/wiki/L%C3%ADngua_umbundo#')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.sec}>
                <Text style={styles.title}>
                    Língua umbundo
                </Text>
                <Text style={styles.parag}>
                    Umbundo (umbundu; m'bundo, mbundu do sul, nano, mbali, mbari ou mbundu de Benguela) é uma língua banta falada pelos ovimbundos, povo originário do Planalto Central de Angola. É a língua banta mais falada em Angola.
                </Text>
            </View>
            <View style={styles.sec}>
                <Text style={styles.title}>
                    Difusão
                </Text>
                <Text style={styles.parag}>
                    O umbundo é falado principalmente nas províncias centrais de Angola (Bié, Huambo e Benguela), mas também em outras regiões do país, como Huila, Cuando-Cubango, Moxico, Namibe, Cuanza Sul, Malanje, Lunda Norte, Lunda Sul e Luanda. Isso se deve ao êxodo rural de falantes da língua causado pela Guerra Civil Angolana, espalhando seu uso. Muitas palavras do umbundo passaram para a língua portuguesa fora de Angola, como em Portugal, mas especialmente no Brasil.
                </Text>
            </View>
            <View style={styles.sec}>
                <Text style={styles.title}>
                    Utilização
                </Text>
                <Text style={styles.parag}>
                    Umbundo, apesar de não ser reconhecido como uma das línguas nacionais de Angola, tem sido usado extensivamente em projetos de alfabetização, incluindo um notavelmente conduzido pela UNESCO em 1981-1982, que padronizou sua ortografia. Também é utilizado na Rádio Nacional de Angola. É uma língua de comércio no país e se encontra em situação ativa classificada como nível 3 na Escala de Interrupção Intergeracional Graduada Expandida (EGIDS).

                    Enquanto 71,1% da população do país fala português, 23% fala umbundo, sendo as próximas línguas mais faladas congo e quimbundo, com 8,2% e 7,8% de falantes respectivamente.
                </Text>
            </View>

            <View style={styles.fontes}>
                <TouchableOpacity activeOpacity={.7} onPress={()=> abrirLink()} style={styles.link}>
                    <Feather name='external-link' size={20} color='#2B7595'/>
                    <Text style={styles.linkName}>
                        Wikpedia
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    sec: {

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    parag: {
        fontSize: 18,
    },
    fontes: {

    },
    link: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    linkName: {
        fontSize: 18,
        color: '#2B7595',
        marginHorizontal: 10
    }

})