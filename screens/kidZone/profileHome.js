import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    SafeAreaView,
    FlatList,
    StatusBar,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import LottieView from 'lottie-react-native'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'
import { AntDesign, FontAwesome5 } from 'react-native-vector-icons'
import Post from './profileKids/post'

export default class _ProfileHome extends React.Component {

    constructor(props) {
        super(props);
        this.animation = React.createRef(null);
        this.state = {
            posts: [
                { id: "1", postOwner: 3, firstName: 'Ahlem', lastName: 'Trabelsi', avatar: '../../assets/images/kids/daugther.jpg', postPhoto: '../../assets/images/EXAMPLES/1.jpg', isLiked: false },
                { id: "2", postOwner: 5, firstName: 'Hamza', lastName: 'Rebaii', avatar: '../../assets/images/kids/girl2.jpeg', postPhoto: '../../assets/images/EXAMPLES/2.jpg', isLiked: true },
                { id: "3", postOwner: 1, firstName: 'Firas', lastName: 'Karboul', avatar: '../../assets/images/kids/boy2.jpg', postPhoto: '../../assets/images/EXAMPLES/3.jpg', isLiked: false },
                { id: "4", postOwner: 7, firstName: 'Amine', lastName: 'Jaidii', avatar: '../../assets/images/kids/daugther.jpeg', postPhoto: '../../assets/images/EXAMPLES/4.jpg', isLiked: false },
                { id: "5", postOwner: 2, firstName: 'Selim', lastName: 'Mahjoub', avatar: '../../assets/images/kids/boy1.jpeg', postPhoto: '../../assets/images/EXAMPLES/5.jpg', isLiked: true }
            ]
        };
    }

    render() {
        const renderItem = ({ item }) => (
            <Post
                // user={item}
                {...item}
                onLikePost={(id) => {
                    let newArr = this.state.posts.map(post =>
                        post.id === item.id ?
                            { ...post, isLiked: !post.isLiked }
                            :
                            post
                    )
                    this.setState({
                        posts: newArr
                    })
                }

                }
            />
        )

        const image = require('../../assets/images/BGs/BG09/BG09.png');
        
        return (
            <View style={styles.container}>
                {/* <ImageBackground source={image} style={styles.background}> */}
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#7d57c6', '#63a3f7', '#71d258', '#f1cc35', '#71d258', '#63a3f7', '#7d57c6']}
                    style={styles.background}
                />
                <Image source={require('../../assets/images/parentZone/mapMonde.png')}
                    style={{
                        width: 400,
                        height: 600,
                        position: 'absolute',
                        shadowOpacity: 0.2,
                        top: 110,
                        opacity: 0.2,
                        tintColor: 'white'
                    }}
                />
                <SafeAreaView style={styles.SafeAreaViewContainer}>
                    <FlatList
                        // data={this.state.data}
                        data={this.state.posts}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
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

const ProfileHome = connect(mapStateToProps)(
    _ProfileHome
)

export { ProfileHome }

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

    lottieHeart: {
        width: 90,
        height: 90,
        marginLeft: -2,
    },

    item: {
        flexGrow: 1,
        // backgroundColor: 'rgba(255,255,255,0.5)',
        height: Dimensions.get('screen').height / 2,
        marginBottom: 30,
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
        paddingBottom: Dimensions.get('screen').width / 4,
        height: Dimensions.get('screen').height / 1.165
    }
});
