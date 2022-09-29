import { FlatList, Image, StyleSheet, Text, View } from "react-native"


const Lista = ({ title, itens }) => {

    const renderItem = ({ item: { nome, imagem } }) => (
        <View key={nome} style={estilos.item}>
            <Image source={imagem} style={estilos.imagem} />
            <Text style={estilos.texto}> {nome} </Text>
        </View>
    )

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{title}</Text>

            <FlatList data={itens} renderItem={renderItem}
                keyExtractor={({ nome }) => nome} />

        </View>
    )
}

export default Lista