import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

const _SecondPage = (props) => {

  const [selected, setSelected] = useState('female')

  const { GENDER } = props

  return (
    <View
      style={{
        flex: 1
      }}
    >
      <ImageBackground source={require('../../assets/images/getStarted/signup/BG.png')} style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <View style={styles.container}>
          <Text style={styles.title}>Gender</Text>
        </View>

        <View style={styles.container}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30
          }}>
            <TouchableOpacity style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              marginBottom: 20
            }}
              onPress={() => {
                setSelected('female')
                GENDER('female')
              }}
            >
              {selected == 'female'
                ?
                <Image
                  source={require('../../assets/images/getStarted/signup/mother_selected.png')}
                  style={{ width: 150, height: 150 }}
                />
                :
                <Image
                  source={require('../../assets/images/getStarted/signup/mother.png')}
                  style={{ width: 150, height: 150 }}
                />
              }
            </TouchableOpacity>
            <Text style={styles.gender}>MOTHER</Text>
          </View>

          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TouchableOpacity style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              marginBottom: 20
            }}
              onPress={() => {
                setSelected('male')
                GENDER('male')
              }}
            >
              {selected == 'male' ?
                <Image
                  source={require('../../assets/images/getStarted/signup/father_selected.png')}
                  style={{ width: 150, height: 150 }}
                />
                :
                <Image
                  source={require('../../assets/images/getStarted/signup/father.png')}
                  style={{ width: 150, height: 150 }}
                />
              }
            </TouchableOpacity>
            <Text style={styles.gender}>FATHER</Text>
          </View>
        </View>
      </ImageBackground>

    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  GENDER: (gender) => {
    dispatch({ type: 'GENDER', gender: gender })
  }
})

const SecondPage = connect(null, mapDispatchToProps)(_SecondPage)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'WhaleTriedRegular',
    color: 'white',
    letterSpacing: 3
  },

  gender: {
    fontSize: 30,
    fontFamily: 'WhaleTriedRegular',
    color: 'white',
    letterSpacing: 3
  }
})

export { SecondPage };