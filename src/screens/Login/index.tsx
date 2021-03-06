import React from "react";
import { View, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "plant-daddy/route";

import { PNGLogin } from "~assets";
import { Title, Input, Button } from "~components/UI";
import { style } from "./style";

type LoginNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

interface LoginProps {
  navigation: LoginNavigationProp;
}

export function Login({ navigation }: LoginProps) {
  return (
    <View style={style.container}>
      <Image source={PNGLogin} style={style.image} />
      <Title>Login</Title>
      <Input placeholder="Email" />
      <Input secureTextEntry={true} placeholder="Password" />
      <Button
        title="Forgot Password?"
        type="link"
        style={style.forgotButton}
        onPress={() => {}}
      />
      <Button
        title="Login"
        style={style.loginButton}
        onPress={() => navigation.navigate("Introduction")}
      />
      <Button
        type="link"
        title="Sign up"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
}
