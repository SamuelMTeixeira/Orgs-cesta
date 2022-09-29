import React from 'react'
import { Image, StyleSheet, Text, Dimensions, ScrollView, FlatLis, View, FlatList } from 'react-native'
import topo from '../assets/topo.png'
import Dashboard from '../views/Dashboard'
import ListaItens from './Lista'



const width = Dimensions.get('screen').width

const Cesta = ({ title, itens }) => {
    
    const renderItem = ({ item: { nome, imagem } }) => (
        <View key={nome} style={lista.item}>
            <Image source={imagem} style={lista.imagem} />
            <Text style={lista.texto}> {nome} </Text>
        </View>
    )

    return (
        <>
            <FlatList data={itens} renderItem={renderItem}
                ListHeaderComponent={() => {
                    return <>
                        <Image source={topo} style={estilos.topo} />
                        <Text style={estilos.titulo}>Detalhes da cesta</Text>
                        <Dashboard />
                    </>
                }} />
        </>
    )
}

export default Cesta


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 16,
    }
})

const lista = StyleSheet.create({
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 6,
    },
    texto: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',

    },
})