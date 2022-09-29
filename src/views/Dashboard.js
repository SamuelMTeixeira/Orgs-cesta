import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import logo from '../assets/logo.png'

const Dashboard = () => {
    return (
        <View style={estilos.container}>
            {/* Titulo */}
            <Text style={estilos.titulo}>Cesta de verduras</Text>

            {/* Vendedor */}
            <View style={estilos.fazenda}>
                <Image style={estilos.imgFazenda} source={logo} />
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>

            {/* Descrição */}
            <Text style={estilos.descricacao}>
                Cesta com as melhores verduras da região. Feita com muito amor, cuidado para você.
            </Text>

            <Text style={estilos.preco}>
                R$ 41,30
            </Text>

            <TouchableOpacity style={estilos.button} onPress={ () => {}}>
                <Text style={estilos.textButton}>Comprar</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Dashboard

const estilos = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    titulo: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontFamily: 'MontserratBold',
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'MontserratRegular',
    },
    descricacao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    imgFazenda: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    fazenda: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        borderRadius: 6,
        paddingVertical: 16,
    },
    textButton: {
        fontSize: 16,
        lineHeight: 26,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})