import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  TouchableOpacity,
  View,
  ViewProps,
  TouchableOpacityProps,
} from 'react-native';

export const ComponentRegistry = {
  TextInput: (props: TextInputProps) => <TextInput {...props} />,
  Typography: (props: TextProps) => <Text {...props}>{props.children}</Text>,
  Card: (props: ViewProps) => {
    return <View {...props}>{props.children}</View>;
  },
  Button: (props: TouchableOpacityProps) => {
    return (
      <TouchableOpacity
        style={{backgroundColor: 'red', paddingVertical: 10}}
        onPress={props?.onPress}>
        <Text>Press</Text>
      </TouchableOpacity>
    );
  },
};
