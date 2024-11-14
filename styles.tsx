import { StyleSheet } from 'react-native';

// Cria um objeto de estilos
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 20,
        paddingHorizontal: 10,
        position: 'relative',
    },
    header: {
        flexDirection: 'row', //organiza os itens em uma linha ho
        alignItems: 'center', // alinha os itens vertical e no centro
        padding: 10, //espaçamento em torno
    },
    user: {
        width: 35,
        height: 35,
        marginRight: 10, //espaço da direita
    },
    headerText: {
        color: '#FFFFFF',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold', //negrito
    },
    pesquisa: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    pesquisaIcon: {
        position: 'absolute',
        top: -6,  //dis topo
        right: -130, //dis direita
    },
    mais: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    maisIcon: {
        position: 'absolute',
        top: -7,
        right: -180,
    },
    playlistButton: {
        alignSelf: 'flex-start', //inicio da linha
        backgroundColor: '#333',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginVertical: 10,
    },
    playlistButtonText: {
        fontSize: 16,
        color: '#FFF',
    },
    playlistContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
    },
    playlistName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    playlistOwner: {
        fontSize: 14,
        color: '#AAA',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopColor: '#333',
        borderTopWidth: 1,
    },
    footerButton: {
        alignItems: 'center',
    },
    footerIcon: {
        width: 22,
        height: 22,
        marginBottom: 5,
    },
    footerText: {
        fontSize: 12,
        color: '#FFF',
    },
});