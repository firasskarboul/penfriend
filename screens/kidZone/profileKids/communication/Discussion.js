import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import LastWatch from '../../../../components/Messages/LastWatch';
import Received from '../../../../components/Messages/Received';
import Sent from '../../../../components/Messages/Sent';
import Data from '../../../../components/Messages/Data.json';
import Input from '../../../../components/Messages/Input';

const Discussion = ({ route, navigation }) => {
    const { itemName, itemPic } = route.params;
    const [inputMessage, setMessage] = useState('');

    const send = () => {
        Data.push({ id: inputMessage, message: inputMessage, type: "sender" });
        setMessage('');
    };

    var txt = []
    for (var i = 5; i < Data.length; i++) {
        txt.push(<Sent key={Data[i].id} message={Data[i].message} type={Data[i].type} />);
    }

    return (
        <LinearGradient
            colors={["yellow", "#FF00FF", "blue"]}
            start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
            style={styles.container}
        >
            {/* <View style={styles.main}> */}
            <LinearGradient
                colors={["yellow", "#FF00FF", "blue"]}
                start={{ x: 0.1, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                style={styles.main}
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Icon name='left' color='#000' size={24} />
                    </TouchableOpacity>
                    <Text style={styles.username}>{itemName}</Text>
                    <Image source={require('../../../../assets/images/kids/boy2.jpg')} style={styles.avatar} />
                </View>
                <Image source={require('../../../../assets/images/parentZone/mapMonde.png')}
                    style={{
                        width: 400,
                        height: 600,
                        position: 'absolute',
                        shadowOpacity: 0.2,
                        top: 110,
                        opacity: 0.2,
                        tintColor: 'blue'
                    }}
                />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <FlatList
                        data={Data}
                        style={{
                            marginBottom: 30
                        }}
                        renderItem={({ item, index }) => {
                            if (item.type === "sender") {
                                return (
                                    <Sent
                                        message={item.message}
                                    />
                                )
                            } else {
                                return (
                                    <View>
                                        <Received
                                            image={itemPic}
                                            message={item.message}
                                        />
                                    </View>
                                )
                            }
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />

                    {/* <LastWatch checkedOn='Yesterday' />
                    <Received
                        image={itemPic}
                        message={Data[0].message}
                    />
                    <Sent
                        message={Data[1].message}
                    />
                    <Received
                        image={itemPic}
                        message={Data[2].message}
                    />
                    <Sent
                        message={Data[3].message}
                    />
                    <LastWatch checkedOn='Today' />
                    <Received
                        image={itemPic}
                        message={Data[4].message}
                    />
                    <View>
                        {txt}
                    </View> */}
                </ScrollView>
            </LinearGradient>

            {/* </View> */}
            <Input
                inputMessage={inputMessage}
                setMessage={(inputMessage) => setMessage(inputMessage)}
                onSendPress={send}
            />
        </LinearGradient>
    )
}
export default Discussion;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%"
    },
    main: {
        backgroundColor: '#FFF',
        height: '88%',
        paddingHorizontal: 20,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        paddingTop: 40
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 12
    },
    username: {
        color: "#000",
        // fontFamily:'Montserrat_700Bold',
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }

})