import React, { useState } from 'react'
import { StyleSheet, View, Text, Platform, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { connect } from 'react-redux'

const _ThirdPage = (props) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    BIRTHDAY(currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear())
  };

  const { BIRTHDAY } = props

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/getStarted/signup/BGPersonalInfos.png')} style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <View style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.title}>Birthday</Text>
        </View>

        <View style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontFamily: "SandyKidsRegular",
            fontSize: 40,

          }}>{date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear()}</Text>
        </View>

        <View style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableOpacity style={{
            backgroundColor: "#fff",
            paddingRight: 50,
            paddingLeft: 50,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 10
          }}
            onPress={() => setShow(true)}>
            <Text style={{
              fontSize: 20,
              textAlign: 'center',
              fontFamily: 'SandyKidsRegular',
              letterSpacing: 3,
              color: "#2d3436"
            }}>CHOOSE DATE</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="spinner"
              onChange={onChange}
              style={{
                width: Dimensions.get('window').width - 80,
              }}
              textColor='blue'
              maximumDate={new Date()}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  BIRTHDAY: (date) => {
    dispatch({ type: 'BIRTHDAY', birthday: date })
  }
})

const ThirdPage = connect(null, mapDispatchToProps)(_ThirdPage)

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
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'WhaleTriedRegular',
    color: '#81ecec',
    letterSpacing: 3
  },

  gender: {
    fontSize: 30,
    fontFamily: 'WhaleTriedRegular',
    color: '#dfe6e9',
    letterSpacing: 3
  }
})

export { ThirdPage };