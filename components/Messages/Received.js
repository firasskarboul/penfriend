import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';


const Received = ({image, message}) => {
    return(
        <View style={styles.container}>
          <Image source={require('../../assets/images/kids/boy1.jpeg')} style={styles.img}/>
          <View>
               <Text style={styles.message}>{message}</Text>
               {/* <Text style={styles.duration}>12:13 AM</Text> */}
          </View>
        </View>
    )
}
export default Received;
const styles = StyleSheet.create({
    duration:{
        color:'#b6b6b6',
        fontSize:11,
        marginHorizontal:15,
        marginTop:5,
        // fontFamily:'Montserrat_600SemiBold',
    },
    container:{
        flexDirection:'row',
        marginTop:40,
        marginBottom:40,
        width:250,
        alignItems:'center'
    },
    img:{
        width:40,
        height:40,
        borderRadius:20
    },
    message:{
        fontSize:20,
        marginHorizontal:15,
        color:"black"
        // fontFamily:'Montserrat_700Bold'
    }
})