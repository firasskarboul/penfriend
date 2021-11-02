import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, SafeAreaView, Text, ScrollView, StatusBar, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-crop-picker'

export default class _AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            password: '',
            selectedAge: 1,
            kidImage: null
        };
    }

    render() {

        const pickImage = async () => {
            ImagePicker.openPicker({
                cropping: false
            }).then(image => {
                this.setState({ kidImage: image.path })
            });
        }

        const addPost = () => {
            alert('hi')
        }

        return (
            <View style={styles.container}>
                <LinearGradient
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
                            <TouchableOpacity onPress={pickImage}>
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
                                        } : {
                                            marginTop: 28,
                                            width: 207,
                                            height: 235,
                                            borderRadius: 0
                                        }} />
                            </TouchableOpacity>
                            <LinearGradient
                                colors={['#FFFC1A', '#1A2FFF', '#FF1AEE', '#FFFC1A']}
                                start={{ x: -1, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    marginTop: 35,
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
                                }} onPress={addPost}>

                                    <Text style={{ fontFamily: 'SandyKidsRegular', fontSize: 30, letterSpacing: 2, color: '#fff' }}>Add post</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                        </KeyboardAvoidingView>
                    </ScrollView>
                </SafeAreaView>

                <StatusBar style="auto" />
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
