import React from 'react';
import { View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'plant-daddy/route';

import { PNGSignup } from '~assets';
import { Title, Text, Input, Button } from '~components/UI';

import { style } from './style';

type SignupNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

interface SignupProps {
  navigation: SignupNavigationProp;
}

export function Signup({ navigation }: SignupProps) {


  return (
    <View style={style.container}>
      <Image source={PNGSignup} style={style.image} />
      <Title>Sign up</Title>
      <Text>Create your account</Text>

      <View>
        <Input
          placeholder="Name"
        />

        <Input
          placeholder="Email"
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button
          title="Sign up"
          style={style.signupButton}
          onPress={() => { }}
        />

        <Button
          title="Login"
          type="link"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}