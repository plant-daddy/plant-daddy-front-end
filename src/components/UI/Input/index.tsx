import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { style } from './style';

type InputProps = TextInputProps;

export function Input(props: InputProps) {
  return (
    <TextInput {...props} style={[style.input, props.style]} />
  );
}
