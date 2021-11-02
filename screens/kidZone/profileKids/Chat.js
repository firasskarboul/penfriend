import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    SafeAreaView,
    Text,
    FlatList,
    ScrollView,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import LottieView from 'lottie-react-native'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

const Item = ({ user, navigation }) => (
    <View style={styles.item}>
        <TouchableOpacity
            style={{ width: Dimensions.get('screen').width / 1.5, flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('Discussion', {
                itemId: user.id,
                itemName: user.firstName + ' ' + user.lastName
            })}
        >
            {
                user.id == 1 ?
                    <Image source={require('../../../assets/images/kids/boy2.jpg')} style={{ width: 75, height: 75, borderRadius: 100, marginRight: 15 }} />
                    : (user.id == 2) ?
                        <Image source={require('../../../assets/images/kids/boy1.jpeg')} style={{ width: 75, height: 75, borderRadius: 100, marginRight: 15 }} />
                        : (user.id == 3) ?
                            <Image source={require('../../../assets/images/kids/daugther.jpg')} style={{ width: 75, height: 75, borderRadius: 100, marginRight: 15 }} />
                            :
                            <Image source={require('../../../assets/images/kids/girl2.jpeg')} style={{ width: 75, height: 75, borderRadius: 100, marginRight: 15 }} />
            }
            <View style={{ marginRight: Dimensions.get('screen').width / 7.3 }}>
                <Text style={styles.title}>{
                    ((user.firstName + ' ' + user.lastName).length >= 15) ?
                        (((user.firstName + ' ' + user.lastName).substring(0, 15 - 3)) + '...') :
                        user.firstName + ' ' + user.lastName}
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => alert('added!')}
            style={{
                backgroundColor: '#2ecc71',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 80,
                padding: 8,
                marginRight: 9
            }}>
            <Icon2 name="phone" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => alert('added!')}
            style={{
                backgroundColor: '#FFFF00',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 80,
                padding: 8
            }}>
            <Icon1 name="video-camera" size={20} color="#000" />
        </TouchableOpacity>
    </View>
);

export default class _Chat extends React.Component {

    constructor(props) {
        super(props);
        this.animation = React.createRef(null);
        this.state = {
            users: [
                { id: 1, firstName: 'Firas', lastName: 'Karboul', avatar: '../../../assets/images/kids/boy2.jpg', email: 'fkarboul@gmail.com' },
                { id: 2, firstName: 'Selim', lastName: 'Mahjoub', avatar: '../../../assets/images/kids/boy1.jpeg', email: 'smahjoub@gmail.com' },
                { id: 3, firstName: 'Ahlem', lastName: 'Trabelsi', avatar: '../../../assets/images/kids/daugther.jpg', email: 'hrebaii@gmail.com' },
                { id: 4, firstName: 'Sirin', lastName: 'Khelifa', avatar: '../../../assets/images/kids/girl2.jpeg', email: 'arezigg@gmail.com' },
                { id: 5, firstName: 'Hamza', lastName: 'Rebaii', avatar: '../../../assets/images/kids/boy2.jpeg', email: 'arezigg@gmail.com' },
                { id: 6, firstName: 'Aymen', lastName: 'Rezigg', avatar: '../../../assets/images/kids/boy1.jpeg', email: 'arezigg@gmail.com' },
                { id: 7, firstName: 'Hamadi', lastName: 'Jaidii', avatar: '../../../assets/images/kids/daugther.jpeg', email: 'arezigg@gmail.com' },
                { id: 8, firstName: 'Saief', lastName: 'Karboul', avatar: '../../../assets/images/kids/girl2.jpeg', email: 'arezigg@gmail.com' },
                { id: 9, firstName: 'Ameni', lastName: 'Khelifa', avatar: '../../../assets/images/kids/boy1.jpeg', email: 'arezigg@gmail.com' }
            ]
        };
    }

    render() {
        const renderItem = ({ item }) => (
            <Item user={item} navigation={this.props.navigation} />
        )

        const image = require('../../../assets/images/BGs/BG08/BG08.png');
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.background}>
                    <Image source={require('../../../assets/images/parentZone/mapMonde.png')}
                        style={{
                            width: 400,
                            height: 600,
                            position: 'absolute',
                            shadowOpacity: 0.2,
                            top: 110,
                            opacity: 0.16,
                            tintColor: 'blue'
                        }}
                    />
                    <View style={styles.SafeAreaViewContainer}>
                        <FlatList
                            data={this.state.users}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            vertical
                            ItemSeparatorComponent={() => <View style={{
                                height: 0.5, width: "90%", alignSelf: 'center', backgroundColor: "#fff"
                            }} />}
                        />
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

const Chat = connect(mapStateToProps)(
    _Chat
)

export { Chat }

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    lottieHeart: {
        width: 90,
        height: 90,
        marginLeft: -2,
    },

    item: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        borderRadius: 10
    },

    title: {
        color: '#2d3436',
        fontSize: 23,
        fontFamily: 'WhaleTriedRegular',
        fontWeight: 'bold',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1.0,
        shadowRadius: 18.00,
        width: Dimensions.get('screen').width / 3.2,
        elevation: 24,
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
        paddingBottom: Dimensions.get('screen').width / 5.5,
        height: Dimensions.get('screen').height / 1.165
    }
});
