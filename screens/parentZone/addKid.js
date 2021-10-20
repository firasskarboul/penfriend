import React from 'react'
import { StyleSheet, View, Dimensions, SafeAreaView, Text, ScrollView, StatusBar, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
// import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-gesture-handler'

export default class _AddKid extends React.Component {

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

        const image = require('../../assets/images/parentZone/backgroundAdd.jpeg');
        const kid_avatar = require('../../assets/images/kid_avatar.png');

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

            alert('hello')
        }

        return (
            <View style={styles.container}>
                {/* <ImageBackground source={image} style={styles.bgImage}> */}
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#067ffc', '#0d0cfa', '#ba01b0', '#c60064', '#af0096']}
                    style={styles.background}
                />
                <SafeAreaView style={styles.SafeAreaViewContainer}>
                    <Image source={require('../../assets/images/parentZone/mapMonde.png')}
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
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'SandyKidsRegular',
                            fontSize: 70,
                            color: '#ff4757',
                            textAlign: 'center'
                        }}>ADD A CHILD</Text>
                    </View>
                    <ScrollView style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <KeyboardAvoidingView style={{
                            flexGrow: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            behavior="padding"
                            enabled
                        >
                            <TextInput
                                style={styles.inputText}
                                onChangeText={fullName => this.setState({ fullName: fullName })}
                                placeholder='Last Name'
                                placeholderTextColor='rgba(61, 61, 61, 0.8)'
                                keyboardType='email-address'
                            />
                            <TextInput
                                style={styles.inputText}
                                onChangeText={name => this.setState({ name: name })}
                                placeholder='First Name'
                                placeholderTextColor='rgba(61, 61, 61, 0.8)'
                                keyboardType='email-address'
                            />
                            <TextInput
                                style={styles.inputText}
                                onChangeText={name => this.setState({ password: name })}
                                placeholder='Password'
                                placeholderTextColor='rgba(61, 61, 61, 0.8)'
                                secureTextEntry
                            />
                            <View style={{ width: 80, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Text style={{ color: '#40ff33', fontSize: 40, fontWeight: 'bold', fontFamily: 'WhaleTriedRegular' }}>Age</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity style={{
                                    padding: 20,
                                    backgroundColor: this.state.selectedAge == 1 ? '#fff833' : '#fff',
                                    margin: 10,
                                    borderRadius: 10
                                }} onPress={() => this.setState({ selectedAge: 1 })}>
                                    <Text>3-5</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    padding: 20,
                                    backgroundColor: this.state.selectedAge == 2 ? '#fff833' : '#fff',
                                    margin: 10,
                                    borderRadius: 10
                                }} onPress={() => this.setState({ selectedAge: 2 })}>
                                    <Text>6-10</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    padding: 20,
                                    backgroundColor: this.state.selectedAge == 3 ? '#fff833' : '#fff',
                                    margin: 10,
                                    borderRadius: 10
                                }} onPress={() => this.setState({ selectedAge: 3 })}>
                                    <Text>11-13</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: 150, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Text style={{ color: '#ffa932', fontSize: 40, fontWeight: 'bold', fontFamily: 'WhaleTriedRegular' }}>Kid Photo</Text>
                            </View>
                            <TouchableOpacity style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={pickImage}>
                                <Image source={this.state.kidImage !== null ? { uri: this.state.kidImage } : kid_avatar} style={{ width: 100, height: 100, borderRadius: 100 }} />
                            </TouchableOpacity>
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

const AddKid = connect(mapStateToProps)(
    _AddKid
)

export { AddKid };

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
