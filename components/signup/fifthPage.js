import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker'

const _FifthPage = (props) => {

  const [parentImage, setParentImage] = useState(null);

  const family_avatar = require('../../assets/images/getStarted/signup/parents.png')

  const { PARENT_IMAGE } = props

  useEffect(() => {
    PARENT_IMAGE('../../assets/images/father_avatar.png')
  }, []);

  const pickImage = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      setParentImage(image.path)
      PARENT_IMAGE(image.path)
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
          <Text style={styles.title}>Parent Photo</Text>
        </View>

        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={pickImage}>
          <Image source={parentImage !== null ? { uri: parentImage } : family_avatar} style={{ width: 200, height: 200, borderRadius: 100, marginTop: 100 }} />
          <Text style={{ textAlign: 'center', color: '#894DFD', margin: 50, fontSize: 28 }}>Select a real photo {"\n"}containing your face</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  PARENT_IMAGE: (parentPhoto) => {
    dispatch({ type: 'PARENT_IMAGE', parentSelfie: parentPhoto })
  }
})

const FifthPage = connect(null, mapDispatchToProps)(_FifthPage)

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

  title: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'WhaleTriedRegular',
    color: '#fff',
    letterSpacing: 3
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height
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

export { FifthPage };