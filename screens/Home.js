import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import { signOut } from '../redux/index';

export default class _Home extends React.Component {

    render() {

        const { signOut } = this.props

        return (
            <View style={styles.container}>

                <ImageBackground source={require('../assets/images/HomeScreen/BG.png')} style={{
                    flex: 1,
                    resizeMode: "cover",
                    justifyContent: "center",
                    alignItems: "center",
                    justifyContent: 'space-around'
                }}>
                    <View style={{
                        // height: Dimensions.get('screen').height / 2
                    }}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Kids Zone')
                        }}>
                            <Image
                                source={require('../assets/images/HomeScreen/Kids.png')}
                                style={{
                                    width: Dimensions.get('screen').width / 1.25,
                                    height: 230,
                                    marginBottom: -25
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        borderColor: "#D94DEA",
                        borderTopWidth: 3,
                        borderBottomWidth: 3,
                        alignItems: 'center',
                        padding: 8,
                        width: Dimensions.get('screen').width
                    }}>
                        <Text style={{
                            color: '#0984e3',
                            fontFamily: 'WhaleTriedRegular',
                            fontSize: 34
                        }}>CHOOSE YOUR ZONE</Text>
                    </View>
                    <View style={{

                    }}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Parent Zone')
                        }}>
                            <Image
                                source={require('../assets/images/HomeScreen/Parent.png')}
                                style={{
                                    width: Dimensions.get('screen').width / 1.25,
                                    height: 230
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity style={{
                            paddingVertical: 10,
                            paddingHorizontal: 50,
                            backgroundColor: 'white',
                            borderRadius: 25
                        }}
                            onPress={() => signOut()}
                        >
                            <Text>Sign out</Text>
                        </TouchableOpacity>
                    </View>
                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Home = connect(mapStateToProps, { signOut })(
    _Home
)

export { Home };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height
    },

    buttonSignin: {
        padding: 15,
        paddingHorizontal: 61,
        marginBottom: 25,
        alignItems: 'center',
        borderRadius: 25,
    },

    buttonSignup: {
        alignItems: 'center',
        borderRadius: 25,
        padding: 15,
    },

    text: {
        backgroundColor: 'transparent',
        fontSize: 22,
        color: '#fff',
    },
});
