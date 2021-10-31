import React from 'react'
import {
    View,
    Dimensions,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import LottieView from 'lottie-react-native'

const Post = ({
    // user,
    id,
    postOwner,
    firstName,
    lastName,
    avatar,
    postPhoto,
    isLiked = false,
    onLikePost = () => { }
}) => {

    const animation = React.useRef(null);
    const isFirstRun = React.useRef(true);

    React.useEffect(() => {
        if (isFirstRun.current) {
            if (isLiked) {
                animation.current.reset();
            } else {
                animation.current.play(20, 60);
            }
            isFirstRun.current = false;
        } else if (isLiked) {
            animation.current.reset();
        } else {
            animation.current.play(20, 60);
        }
    }, [isLiked]);

    return (
        <View style={styles.item}>
            <View style={{
                flexGrow: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
                paddingHorizontal: 10,
            }}>
                <Image source={require('../../../assets/images/kids/boy2.jpg')} style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginRight: 10
                }} />
                <Text style={{
                    color: '#2d3436',
                    fontFamily: 'WhaleTriedRegular',
                    fontSize: 25,
                    fontWeight: 'bold',
                    shadowColor: "#fff",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>{firstName} {lastName}</Text>
            </View>
            <View style={{ flexGrow: 1 }}>
                <Text style={{
                    color: '#2d3436',
                    paddingHorizontal: 10,
                    fontSize: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10
                }}>WHAT A VACATION WITH YOU GUYS</Text>
                <Image source={require('../../../assets/images/EXAMPLES/post1.jpg')} style={{
                    marginTop: 10,
                    maxWidth: Dimensions.get('screen').width / 1.1,
                    maxHeight: Dimensions.get('screen').height / 4
                }} />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => {
                            onLikePost(id);
                        }}>
                            <LottieView
                                ref={animation}
                                style={styles.lottieHeart}
                                source={require('../../../assets/lottie_animations/likeButton2.json')}
                                autoPlay={false}
                                loop={false}
                            />
                        </TouchableOpacity>

                        <Text style={{ color: '#2d3436', fontFamily: 'SandyKidsRegular', fontSize: 25, letterSpacing: 2 }}>11 Likes</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {
                            alert('HELLO')
                        }}>
                            <Image
                                style={styles.commentIcon}
                                source={require('../../../assets/images/tabIcons/comment.png')}
                            />

                            <Text style={{ color: '#2d3436', fontFamily: 'SandyKidsRegular', fontSize: 25, letterSpacing: 2 }}>2 Comments</Text>

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/images/kids/daugther.jpg')}
                        style={{ width: 35, height: 35, borderRadius: 35, marginRight: 12, marginLeft: 20 }}
                    />
                    <Text>Wow, we had so much FUN </Text>
                </View>

                <View style={{
                    marginTop: 10,
                    alignSelf: 'center',
                    width: Dimensions.get('window').width / 1.3,
                    borderTopColor: 'rgba(45, 52, 54, 0.3)',
                    borderTopWidth: 1,
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    lottieHeart: {
        width: 70,
        height: 70,
        marginRight: -5
    },

    commentIcon: {
        width: 48,
        height: 48,
        marginRight: 12
    },

    item: {
        flexGrow: 1,
        height: Dimensions.get('screen').height / 2,
        marginBottom: 30,
        borderRadius: 10
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height
    },
});

export default Post;