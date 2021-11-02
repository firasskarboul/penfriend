import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker'

const _FourthPage = (props) => {

  const [familyImage, setFamilyImage] = useState(null);

  const family_avatar = require('../../assets/images/getStarted/signup/family.png')

  const { FAMILY_IMAGE } = props

  useEffect(() => {
    FAMILY_IMAGE('../../assets/images/family_avatar.png')
  }, []);

  const pickImage = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      setFamilyImage(image.path)
      FAMILY_IMAGE(image.path)
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/getStarted/signup/parentBG.png')} style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.title}>Family Photo</Text>
        </View>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={pickImage}>
          <Image source={familyImage !== null ? { uri: familyImage } : family_avatar} style={{ width: 200, height: 200, borderRadius: 100, marginTop: 100 }} />
          <Text style={{ textAlign: 'center', color: 'yellow', margin: 50 }}>Select an image that contain you and all your kids that are going to have profiles in Penfriend</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  FAMILY_IMAGE: (familyPhoto) => {
    dispatch({ type: 'FAMILY_IMAGE', familySelfie: familyPhoto })
  }
})

const FourthPage = connect(null, mapDispatchToProps)(_FourthPage)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
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

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height
  },

  title: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'WhaleTriedRegular',
    color: '#fff',
    letterSpacing: 3
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  gender: {
    fontSize: 20,
    color: 'black',
    letterSpacing: 3
  }
})

export { FourthPage };