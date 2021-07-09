import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#4a2673',
        alignItems:'center', // Alinhamento vertical (eixo transversal/secundário)
        justifyContent:'center', // Alinhamento horizontal (eixo principal)
    },
    txtHeader:{
        color:'#fff',
        fontSize:40,
    },
    txtContent:{
        color:'#fff',
        fontSize:20,
    },
    txtResult:{
        color:'#fff',
        fontSize:25,
    },
    buttonCalc:{
        color:'#fff',
    }
})