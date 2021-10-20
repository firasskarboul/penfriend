import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Sent = ({ message }) => {
    return (

        <View
            style={{
                padding: 15,
                marginLeft: '40%',
                flexDirection: 'row',
                marginTop: 5,
                alignItems:'center',
                alignSelf: 'flex-end',
                borderRadius: 30,
            }}
        >
            <Text style={styles.text}>{message}</Text>
            <Image source={require('../../assets/images/kids/boy1.jpeg')} style={styles.img}/>

            {/* <View style={styles.rightArrow}></View>
            <View style={styles.rightArrowOverlap}></View> */}
        </View>

    )
}
export default Sent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        alignSelf: 'flex-end',
    },
    
    duration: {
        color: '#b6b6b6',
        fontSize: 11,
        marginTop: 5,
        // fontFamily:'Montserrat_600SemiBold',
        alignSelf: 'flex-end'
    },

    img:{
        width:40,
        height:40,
        borderRadius:20
    },

    rightArrow: {
        position: "absolute",
        // backgroundColor: "#fcf2ab",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },

    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "blue",
        //backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20
    },

    gradient: {
        maxWidth: 220,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderRadius: 15

    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginHorizontal: 15
        // fontFamily:'Montserrat_700Bold'
    }
})