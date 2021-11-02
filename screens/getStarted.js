import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

export default class GetStarted extends React.Component {
    // componentDidMount() {
    //     this.animation.play();
    //     // Or set a specific startFrame and endFrame with:
    //     // this.animation.play(30, 120);
    // }

    // resetAnimation = () => {
    //     this.animation.reset();
    //     this.animation.play();
    // };

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#ffe200', '#ff5000', '#ff5000']}
                    style={styles.background}
                    start={{ x: 0.0, y: 0.02 }} end={{ x: 0.5, y: 1.7 }}
                    locations={[0, 0.5, 0.6, 1]}
                />

                <View style={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 250,
                            height: 250
                        }}
                        source={require('../assets/lottie_animations/chatting-animation.json')}
                    // OR find more Lottie files @ https://lottiefiles.com/featured
                    // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                    /> */}
                    <Image
                        source={require('../assets/images/getStarted/earth.png')}
                        style={{
                            width: 250,
                            height: 280
                        }}
                    />
                </View>
                <View style={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    >
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#FF00F0', '#FF00F0']}
                            style={styles.buttonSignin}
                        >
                            <Text style={styles.text}>Sign in</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#894DFD', '#894DFD']}
                            style={styles.buttonSignup}
                        >
                            <Text style={styles.text}>Create an account</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <StatusBar style="auto" />
            </View>
        );
    }
}

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
