import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', fontFamily: 'SandyKidsRegular' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;