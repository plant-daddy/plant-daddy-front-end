import React from 'react';
import { View, Text, Image } from 'react-native';

import { PNGLogin } from '~assets';
import { Title, Input, Button } from '~components/UI';
import { style } from './style';

export function Login() {
  return (
    <View style={style.container}>
      <Image source={PNGLogin} style={style.image} />
      <Title>Login</Title>
      <Input
        placeholder="Email"
      />
      <Input
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button
        title="Forgot Password?"
        type="link"
        style={style.forgotButton}
        onPress={() => { }}
      />
      <Button
        title="Login"
        style={[style.button, style.loginButton]}
        onPress={() => { }}
      />
      <Button
        type="link"
        title="Sign up"
        style={style.button}
        onPress={() => { }}
      />
    </View>
  );
}