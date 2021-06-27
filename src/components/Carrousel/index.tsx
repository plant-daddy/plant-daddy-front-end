import React, { useRef, useState } from 'react';
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { SVGIntroOne, SVGIntroTwo, SVGIntroThree } from '../../assets/';
import { Button, Title, Text } from '../UI';
import { Steps } from '../Steps';


const carrouselItems = [
  {
    id: 0,
    title: 'Learn anytime and anywhere',
    text: 'Just got a new plant and don\'t know what to do? Plant Daddy has your back! Learn how to take care of any plant, from anywhere!',
    Image: SVGIntroOne
  },
  {
    id: 1,
    title: 'Never forget to water them again!',
    text: 'Plant Daddy reminds you when water is needed, how much and much more!',
    Image: SVGIntroTwo
  },
  {
    id: 2,
    title: 'Find the perfect plant for your enviroment',
    text: 'Find what goes well with your apartment or house, what plant can handle your city weather, climate and plenty of other factors',
    Image: SVGIntroThree
  }
]

const MAX_WIDTH = Dimensions.get('screen').width;

export function Carrousel() {
  const carrouselAnimation = useRef(new Animated.Value(0));
  const [currentItem, setCurrentItem] = useState(0);

  function handleNext() {
    const newCurrentItem = (currentItem < 2) ? currentItem + 1 : 0;

    Animated.spring(carrouselAnimation.current, {
      toValue: -(MAX_WIDTH * newCurrentItem),
      useNativeDriver: true,
    }).start();

    setCurrentItem(newCurrentItem);
  }

  return (
    <View>
      <Animated.View style={[
        style.animation,
        { transform: [{translateX: carrouselAnimation.current}] }
      ]}>
        {carrouselItems.map(item => (
          <View key={item.id} style={style.carrousel}>
            <item.Image width={MAX_WIDTH} height="508" />
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </View>
        ))}
      </Animated.View>

      <View style={style.controls}>
        <Steps quantity={3} current={currentItem} />
        <Button
          onPress={() => handleNext()}
          title={currentItem < 2 ? 'Next' : 'Let\'s start'}
        />
        <Button
          onPress={() => alert('hello')}
          title="Skip"
          type="link"
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  animation: {
    flexDirection: 'row'
  },
  carrousel: {
    width: MAX_WIDTH,
    alignItems: 'center',
  },
  controls: {
    alignItems: 'center'
  },
})