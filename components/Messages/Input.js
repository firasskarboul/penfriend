import React from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Input = ({ inputMessage, onSendPress, setMessage }) => {
    return(
        <View style={{...styles.container, marginBottom: 15}}>
            <TextInput
                placeholder='Write a message...'
                placeholderTextColor= 'rgba(255,255,255,0.7)'
                value={inputMessage}
                onChangeText={setMessage}
                style={styles.input}
            />
            <TouchableOpacity onPress={onSendPress}>
                <Ionicons name='ios-send' color='#FFF' size={20}/>
            </TouchableOpacity>
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.2)',
        width:'85%',
        position:'absolute',
        bottom:10,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:30
    },
    input:{
        // fontFamily:'Montserrat_600SemiBold',
        fontSize:11,
        color:'#fff',
        paddingHorizontal:10,
        flex:1
    }
})