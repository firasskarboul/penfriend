import React from 'react';
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import axios from 'axios'
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

const Item = ({ user }) => (
    <View style={styles.item}>
        {
            user.id == 1 ?
                <Image source={require('../../assets/images/kids/boy2.jpg')} style={{ width: 50, height: 50, borderRadius: 100, marginRight: 15 }} />
                : (user.id == 2) ?
                    <Image source={require('../../assets/images/kids/boy1.jpeg')} style={{ width: 50, height: 50, borderRadius: 100, marginRight: 15 }} />
                    : (user.id == 3) ?
                        <Image source={require('../../assets/images/kids/daugther.jpg')} style={{ width: 50, height: 50, borderRadius: 100, marginRight: 15 }} />
                        :
                        <Image source={require('../../assets/images/kids/girl2.jpeg')} style={{ width: 50, height: 50, borderRadius: 100, marginRight: 15 }} />

        }
        <View style={{ marginRight: Dimensions.get('screen').width / 3 }}>
            <Text style={styles.title}>{user.firstName} {user.lastName}</Text>
        </View>
        <TouchableOpacity
            onPress={() => alert('added!')}
            style={{
                backgroundColor: 'rgba(254, 211, 48,1.0)',
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 80,
                padding: 8
            }}>
            <Icon2 name="user-plus" size={20} color="rgba(75, 101, 132,1.0)" />
        </TouchableOpacity>
    </View>
);

const data = [
    { id: 1, firstName: 'Firas', lastName: 'Karboul', avatar: '../../assets/images/kids/boy2.jpg', email: 'fkarboul@gmail.com' },
    { id: 2, firstName: 'Firas', lastName: 'Mahjoub', avatar: '../../assets/images/kids/boy1.jpeg', email: 'smahjoub@gmail.com' },
    { id: 3, firstName: 'Firas', lastName: 'Trabelsi', avatar: '../../assets/images/kids/daugther.jpg', email: 'hrebaii@gmail.com' },
    { id: 4, firstName: 'Firas', lastName: 'Khelifa', avatar: '../../assets/images/kids/girl2.jpeg', email: 'arezigg@gmail.com' }
]

export default class _searchKids extends React.Component {

    render() {

        const renderItem = ({ item }) => <Item user={item} />
        const image = require('../../assets/images/BGs/BG06/BG06.png');

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
                            tintColor: 'cyan'
                        }}
                    />

                    <SafeAreaView style={styles.SafeAreaViewContainer}>
                        <View style={styles.searchView}>
                            <TextInput style={styles.searchTextInput}
                                placeholder={'Search'}
                                placeholderTextColor={'rgba(0, 0, 0,0.7)'}
                            />
                            <TouchableOpacity
                                onPress={() => alert('hi')}
                            >
                                <Icon1 name="md-search-circle" size={60} color="#FF00FF" />
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            // data={this.state.data}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
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

const SearchKids = connect(mapStateToProps)(
    _searchKids
)

export { SearchKids }

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    searchTextInput: {
        width: Dimensions.get('screen').width / 1.5,
        borderColor: '#FF00FF',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        marginTop: 15,
        marginRight: 20,
        color: '#ecf0f1'
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

    item: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 10
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
        justifyContent: 'center'
    }
});
