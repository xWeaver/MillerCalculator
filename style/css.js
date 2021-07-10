import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    conteiner:{
        height: Dimensions.get('window').height,
        flex:1,
        backgroundColor:'#4a2673',
    },
    txtContent:{
        color:'#fff',
        fontSize:20,
        marginBottom:2,
        marginTop:2,
    },
    buttonCalc:{
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 15,
        marginBottom: 30,
        padding: 10,
        borderRadius: 50,
    },
    logoStyle:{
        width:350,
        height:200,
        resizeMode: 'contain'
    },
})