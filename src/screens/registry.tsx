import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from 'react-native';

export const ComponentRegistry = {
  TextInput: (props: TextInputProps) => <TextInput {...props} />,
  Typography: (props: TextProps) => <Text {...props}>{props.children}</Text>,
  Card: (props: ViewProps) => {
    console.log(props);

    return <View {...props}>{props.children}</View>;
  },
};
