import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity,
    View,
    Dimensions,
    SafeAreaView,
    FlatList,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

const Item = ({ user, navigation }) => (
    <TouchableOpacity
        style={styles.item}
        onPress={() => { navigation.navigate('Kid Navigation') }}
    >
        <View
            style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                backgroundColor: '#fff'
            }}
        >
            {
                user.id == 1 ?
                    <Image source={require('../../assets/images/kids/boy2.jpg')} style={{ width: 120, height: 120, borderRadius: 100 }} />
                    : (user.id == 2) ?
                        <Image source={require('../../assets/images/kids/boy1.jpeg')} style={{ width: 120, height: 120, borderRadius: 100 }} />
                        : (user.id == 3) ?
                            <Image source={require('../../assets/images/kids/daugther.jpg')} style={{ width: 120, height: 120, borderRadius: 100 }} />
                            :
                            <Image source={require('../../assets/images/kids/girl2.jpeg')} style={{ width: 120, height: 120, borderRadius: 100 }} />

            }
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>{user.firstName} {user.lastName}</Text>
        </View>

    </TouchableOpacity>
);

const data = [
    { id: 1, firstName: 'Firas', lastName: 'Karboul', avatar: '../../assets/images/kids/boy2.jpg', email: 'fkarboul@gmail.com' },
    { id: 2, firstName: 'Selim', lastName: 'Mahjoub', avatar: '../../assets/images/kids/boy1.jpeg', email: 'smahjoub@gmail.com' },
    { id: 3, firstName: 'Ameni', lastName: 'Trabelsi', avatar: '../../assets/images/kids/daugther.jpg', email: 'hrebaii@gmail.com' },
    { id: 4, firstName: 'Ahlem', lastName: 'Khelifa', avatar: '../../assets/images/kids/girl2.jpeg', email: 'arezigg@gmail.com' }
]

export default class _KidsHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {

        this.githubGetUrl()
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    }

    githubGetUrl = async () => {
        this.setState({ isLoading: true })
        await axios.get('https://reqres.in/api/users')
            .then((response) => {
                this.setState({ data: response.data.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        this.setState({ isLoading: false })
    }

    render() {

        const renderItem = ({ item }) => <Item user={item} navigation={this.props.navigation} />
        const image = require('../../assets/images/BGs/BG.png');

        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.bgImage}>
                    <SafeAreaView style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* <Image source={require('../../assets/images/parentZone/mapMonde.png')}
                            style={{
                                width: 900,
                                height: 600,
                                position: 'absolute',
                                shadowOpacity: 0.4,
                                opacity: 0.4,
                                tintColor: '#fff'
                            }}
                        /> */}
                        <View style={{
                            margin: Dimensions.get('screen').width /8,
                        }}>
                            <Text style={{
                                fontFamily: 'SandyKidsRegular',
                                fontSize: 70,
                                color: 'yellow',
                                textAlign: 'center',
                                paddingLeft: 50,
                                paddingRight: 50,
                                shadowColor: '#7F5DF0',
                                shadowOffset: {
                                    width: 0,
                                    height: 10
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.5,
                                elevation: 5
                            }}>KIDS ZONE</Text>
                        </View>
                        {
                            this.state.isLoading
                                ?
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <ActivityIndicator size="small" color="#0000ff" />
                                </View>
                                :
                                <View style={{ flex: 1 }}
                                    showsVerticalScrollIndicator={false}
                                >
                                    <FlatList
                                        // data={this.state.data}
                                        data={data}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                        numColumns={2}
                                    />
                                </View>
                        }
                    </SafeAreaView>

                    <StatusBar style="auto" />
                </ImageBackground>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const KidsHome = connect(mapStateToProps)(
    _KidsHome
)

export { KidsHome };

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    bgImage: {
        flexGrow: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height
    },

    text: {
        backgroundColor: 'transparent',
        fontSize: 22,
        color: '#fff',
    },

    item: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: Dimensions.get('screen').width / 25,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4.65,

        elevation: 7,
    },

    title: {
        fontSize: 22,
        color: 'black',
        fontFamily: 'WhaleTriedRegular'
    },
});
