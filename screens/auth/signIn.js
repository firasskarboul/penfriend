import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, KeyboardAvoidingView, ActivityIndicator, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux'
import { signIn } from '../../redux/index';

class _SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    // componentDidMount() {
    //     this.animation.play();
    //     // Or set a specific startFrame and endFrame with:
    //     // this.animation.play(30, 120);
    // }

    render() {

        const { userReducer, signIn } = this.props

        const { loading } = userReducer

        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#FC4FFF', '#00FFB3', '#6BFF2B', '#FFFF00']}
                    style={styles.background}
                    start={{ x: 0.0, y: 0.02 }} end={{ x: 0.5, y: 1.7 }}
                    locations={[0, 0.5, 0.6, 1]}
                />

                {/* <View style={styles.animationView}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 250,
                            height: 250
                        }}
                        source={require('../../assets/lottie_animations/login-animation.json')}
                    />
                </View> */}

                <KeyboardAvoidingView style={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    behavior="padding"
                    enabled
                >
                    <View style={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../assets/images/getStarted/signin/earth.png')}
                            style={{
                                width: 350,
                                height: 350
                            }}
                        >
                        </Image>
                    </View>
                    <View style={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={email => this.setState({ email: email })}
                            placeholder='Email'
                            placeholderTextColor='white'
                            keyboardType='email-address'
                        />

                        <TextInput
                            style={styles.inputText}
                            onChangeText={password => this.setState({ password: password })}
                            placeholder='Password'
                            placeholderTextColor='white'
                            secureTextEntry
                        />

                        <TouchableOpacity
                            style={{
                                height: 40,
                                width: Dimensions.get('window').width - 200,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#edff8f',
                                borderRadius: 25,
                            }}
                            onPress={() => {
                                (this.state.email == '' && this.state.password == '')
                                    ?
                                    alert('Please write your email and password!')
                                    :
                                    (this.state.email == '' ) ?
                                    alert('Please write your email!')
                                    :
                                    (this.state.password == '') ?
                                    alert('Please write your password!'):
                                    signIn({ email: this.state.email, password: this.state.password })
                            }}
                        >

                            {
                                loading
                                    ?
                                    <ActivityIndicator size="small" color="black" />
                                    :
                                    <Text>Sign In</Text>
                            }

                        </TouchableOpacity>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{ marginTop: 10 }}>or</Text>
                            <TouchableOpacity
                                style={{
                                    height: 40,
                                    width: Dimensions.get('window').width - 250,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#ff9668',
                                    borderRadius: 25,
                                    marginTop: 10
                                }}
                            // onPress={() => {props.navigation.navigate('SignUp')}}
                            >
                                <Text style={{ color: 'white' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </KeyboardAvoidingView>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const SignIn = connect(mapStateToProps, { signIn })(
    _SignIn
)

export { SignIn };

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

    inputText: {
        height: 40,
        width: Dimensions.get('window').width - 80,
        borderColor: 'white',
        borderWidth: 1,
        paddingLeft: 14,
        borderRadius: 25,
        marginBottom: 15
    },

    animationView: {
        flexGrow: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '10%',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
    }
});
