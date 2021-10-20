import React from 'react'
import { StyleSheet, View, Dimensions, SafeAreaView, Text, ScrollView, StatusBar, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
// import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler'

export default class _AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            password: '',
            selectedAge: 1,
            kidImage: null,
        };
    }

    render() {

        const image = require('../../../assets/images/parentZone/backgroundAdd.jpeg');
        const kid_avatar = require('../../../assets/images/kid_avatar.png');

        const pickImage = async () => {
            // if (Platform.OS !== 'web') {
            //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            //     if (status !== 'granted') {
            //         alert('Sorry, we need camera roll permissions to make this work!');
            //     } else {
            //         let result = await ImagePicker.launchImageLibraryAsync({
            //             mediaTypes: ImagePicker.MediaTypeOptions.All,
            //             allowsEditing: true,
            //             aspect: [4, 3],
            //             quality: 1,
            //         });

            //         if (!result.cancelled) {
            //             this.setState({ kidImage: result.uri })
            //         }
            //     }
            // }
        }

        return (
            <View style={styles.container}>
                {/* <ImageBackground source={image} style={styles.bgImage}> */}
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#017c35', '#02c18c', '#0048f6', '#0048f6']}
                    style={styles.background}
                />
                <SafeAreaView style={styles.SafeAreaViewContainer}>
                    <Image source={require('../../../assets/images/parentZone/mapMonde.png')}
                        style={{
                            width: 900,
                            height: 600,
                            position: 'absolute',
                            shadowOpacity: 0.4,
                            opacity: 0.4,
                            tintColor: '#fff'
                        }}
                    />

                    <View style={{
                        margin: 50,
                        width: 350,
                        paddingTop: 5,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'row'
                    }}>
                        <Text style={{ ...styles.title, color: '#FF00FF', shadowColor: 'red' }}>ADD </Text>
                        <Text style={{ ...styles.title, color: 'yellow', shadowColor: 'yellow' }}>NEW </Text>
                        <Text style={{ ...styles.title, color: '#FF00FF', shadowColor: 'red' }}>POST</Text>
                    </View>
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                        <KeyboardAvoidingView style={{
                            flexGrow: 1,
                            alignItems: 'center',
                        }}
                            behavior="padding"
                            enabled
                        >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Type something..."
                                placeholderTextColor="rgba(0, 0, 0, 0.7)"
                                multiline={true}
                            />
                            <Image
                                source={this.state.kidImage !== null ?
                                    { uri: this.state.kidImage } :
                                    require('../../../assets/images/kids/uploadImage.png')}
                                style={this.state.kidImage !== null
                                    ? {
                                        marginTop: 50,
                                        marginBottom: 8,
                                        width: Dimensions.get('screen').width / 1.2,
                                        height: Dimensions.get('screen').height / 3.4,
                                        borderRadius: 0,
                                        shadowColor: 'red',
                                        shadowOffset: {
                                            width: 0,
                                            height: 5,
                                        },
                                        shadowOpacity: 0.36,
                                        shadowRadius: 6.68,

                                        elevation: 11
                                    } : {
                                        marginTop: 60,
                                        marginBottom: 8,
                                        width: 207,
                                        height: 235,
                                        borderRadius: 0
                                    }} />
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['#FFFC1A', '#1A2FFF', '#FF1AEE', '#FFFC1A']}
                                start={{ x: -1, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    marginTop: 60,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    borderRadius: 5,
                                    width: Dimensions.get('screen').width / 1.1,
                                }}
                            >
                                <TouchableOpacity style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 50,
                                    shadowColor: 'red',
                                    shadowOffset: {
                                        width: 0,
                                        height: 5,
                                    },
                                    shadowOpacity: 0.36,
                                    shadowRadius: 6.68,

                                    elevation: 11
                                }} onPress={pickImage}>

                                    <Text style={{ fontFamily: 'SandyKidsRegular', fontSize: 30, letterSpacing: 2, color: '#fff' }}>Select Image/Video</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                        </KeyboardAvoidingView>
                    </ScrollView>
                </SafeAreaView>

                <StatusBar style="auto" />
                {/* </ImageBackground> */}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const AddPost = connect(mapStateToProps)(
    _AddPost
)

export { AddPost };

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'SandyKidsRegular',
        fontSize: 70,
        textAlign: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

    textArea: {
        fontSize: 20,
        width: Dimensions.get('screen').width / 1.05,
        padding: 10,
        justifyContent: "flex-start",
        borderWidth: 2,
        borderColor: 'rgba(45, 52, 54, 1)',
        borderRadius: 15,
        color: 'rgba(45, 52, 54, 1.0)',
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height
    },

    SafeAreaViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    bgImage: {
        flexGrow: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },

    inputText: {
        height: 40,
        width: Dimensions.get('window').width - 80,
        borderColor: '#fff833',
        backgroundColor: '#fff833',
        borderWidth: 1,
        paddingLeft: 14,
        borderRadius: 12,
        marginBottom: 15
    },
});
