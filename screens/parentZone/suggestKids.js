import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    SafeAreaView,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Item = ({ user }) => (
    <View style={styles.item}>
        {
            user.id == 1 ?
                <Image source={require('../../assets/images/kids/boy2.jpg')} style={{ width: 85, height: 85, borderRadius: 100 }} />
                : (user.id == 2) ?
                    <Image source={require('../../assets/images/kids/boy1.jpeg')} style={{ width: 85, height: 85, borderRadius: 100 }} />
                    : (user.id == 3) ?
                        <Image source={require('../../assets/images/kids/daugther.jpg')} style={{ width: 85, height: 85, borderRadius: 100 }} />
                        : (user.id == 4) ?
                            <Image source={require('../../assets/images/kids/girl2.jpeg')} style={{ width: 85, height: 85, borderRadius: 100 }} />
                            : (user.id == 5) ?
                                <Image source={require('../../assets/images/kids/boy1.jpeg')} style={{ width: 85, height: 85, borderRadius: 100 }} />
                                : (user.id == 6) ?
                                    <Image source={require('../../assets/images/kids/daugther.jpg')} style={{ width: 85, height: 70, borderRadius: 100 }} />
                                    : (user.id == 7) ?
                                        <Image source={require('../../assets/images/kids/girl2.jpeg')} style={{ width: 85, height: 85, borderRadius: 100 }} />
                                        : (user.id == 8) ?
                                            <Image source={require('../../assets/images/kids/boy2.jpg')} style={{ width: 85, height: 85, borderRadius: 100 }} />
                                            :
                                            <Image source={require('../../assets/images/kids/boy1.jpeg')} style={{ width: 85, height: 85, borderRadius: 100 }} />

        }
        <View style={{ marginRight: Dimensions.get('screen').width / 18, marginLeft: Dimensions.get('screen').width / 18, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>{user.firstName} {user.lastName}</Text>
        </View>

        <TouchableOpacity
            onPress={() => alert('added!')}
            style={{
                backgroundColor: 'rgba(254, 211, 48,1.0)',
                width: Dimensions.get('window').width / 2.7,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                paddingLeft: 20,
                paddingRight: 20,

                paddingTop: 10,
                paddingBottom: 10,
                flexDirection: 'row'
            }}>
            <Icon name="user-plus" size={20} color='rgba(75, 101, 132,1.0)' />
            <Text style={{
                fontFamily: 'WhaleTriedRegular',
                fontSize: 20,
                paddingLeft: 10,
                color: 'rgba(75, 101, 132,1.0)'
            }}>Add Friend</Text>
        </TouchableOpacity>

    </View>
);

const data = [
    { id: 3, firstName: 'Ahlem', lastName: 'Trabelsi', avatar: '../../assets/images/kids/daugther.jpg', email: 'hrebaii@gmail.com' },
    { id: 5, firstName: 'Hamza', lastName: 'Rebaii', avatar: '../../assets/images/kids/boy2.jpeg', email: 'arezigg@gmail.com' },
    { id: 1, firstName: 'Firas', lastName: 'Karboul', avatar: '../../assets/images/kids/boy2.jpg', email: 'fkarboul@gmail.com' },
    { id: 7, firstName: 'Firas', lastName: 'Jaidii', avatar: '../../assets/images/kids/daugther.jpeg', email: 'arezigg@gmail.com' },
    { id: 2, firstName: 'Selim', lastName: 'Mahjoub', avatar: '../../assets/images/kids/boy1.jpeg', email: 'smahjoub@gmail.com' },
    { id: 8, firstName: 'Firas', lastName: 'Karboul', avatar: '../../assets/images/kids/girl2.jpeg', email: 'arezigg@gmail.com' },
    { id: 4, firstName: 'Sirin', lastName: 'Khelifa', avatar: '../../assets/images/kids/girl2.jpeg', email: 'arezigg@gmail.com' },
    { id: 9, firstName: 'Firas', lastName: 'Khelifa', avatar: '../../assets/images/kids/boy1.jpeg', email: 'arezigg@gmail.com' },
    ,
]

export default class _SuggestKids extends React.Component {

    render() {

        const renderItem = ({ item }) => <Item user={item} />
        const image = require('../../assets/images/BGs/BG11/BG11.png');

        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.background}>
                    {/* <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(46, 204, 113,1.0)', 'rgba(52, 152, 219,1.0)']}
                    style={styles.background}
                /> */}
                    <Image source={require('../../assets/images/parentZone/mapMonde.png')}
                        style={{
                            width: 900,
                            height: 600,
                            position: 'absolute',
                            shadowOpacity: 0.4,
                            top: 110,
                            opacity: 0.4,
                            tintColor: 'blue'
                        }}
                    />

                    <SafeAreaView style={styles.SafeAreaViewContainer}>
                        <FlatList
                            // data={this.state.data}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                        />
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

const SuggestKids = connect(mapStateToProps)(
    _SuggestKids
)

export { SuggestKids }

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    searchTextInput: {
        width: Dimensions.get('screen').width / 1.5,
        borderColor: '#ecf0f1',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        marginTop: 15,
        marginRight: 20,
        color: '#ecf0f1'
    },

    item: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: Dimensions.get('screen').width / 2.3,
        height: Dimensions.get('screen').height / 4,
        margin: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10
    },

    title: {
        color: 'black',
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

        elevation: 24,
    },

    searchView: {
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row'
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
        height: Dimensions.get('screen').height / 1.165
    }
});
