import React, { useRef, useState } from 'react';
import {
  View,
  ScrollView,
  Animated,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';

import { PNGIntroOne, PNGIntroTwo, PNGIntroThree } from '~assets';
import { Button, Title, Text } from '../UI';
import { Steps } from '../Steps';

const carrouselItems = [
  {
    id: 0,
    title: 'Learn anytime and anywhere',
    text: 'Just got a new plant and don\'t know what to do? Plant Daddy has your back! Learn how to take care of any plant, from anywhere!',
    src: PNGIntroOne,
  },
  {
    id: 1,
    title: 'Never forget to water them again!',
    text: 'Plant Daddy reminds you when water is needed, how much and much more!',
    src: PNGIntroTwo
  },
  {
    id: 2,
    title: 'Find the perfect plant for your enviroment',
    text: 'Find what goes well with your apartment or house, what plant can handle your city weather, climate and plenty of other factors',
    src: PNGIntroThree
  }
]

const { width: MAX_WIDTH } = Dimensions.get('window');

export function Carrousel() {
  const carrouselAnimation = useRef(new Animated.Value(0));
  const scroll = useRef<ScrollView>(null);

  const [currentItem, setCurrentItem] = useState(0);
  const [pressed, setPressed] = useState(false);

  function handleNext() {
    const newCurrentItem = (currentItem < 2) ? currentItem + 1 : 0;

    Animated.spring(carrouselAnimation.current, {
      toValue: -(MAX_WIDTH * newCurrentItem),
      useNativeDriver: true,
    }).start();

    setCurrentItem(newCurrentItem);
  }

  function handleScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const xVel = e.nativeEvent.velocity?.x ?? 0;
    const { x } = e.nativeEvent.contentOffset;
    const direction = xVel < 0 ? 'right' : 'left';

    if (direction === 'right') {
      const page = Math.ceil(x / MAX_WIDTH);

      setCurrentItem(page);
    } else {
      const page = Math.floor(x / MAX_WIDTH);

      setCurrentItem(page);
    }
  }

  function handlePress() {
    setCurrentItem(prev => {
      const newCurrentItem = (prev < 2) ? prev + 1 : 0;

      if (scroll && scroll.current) {
        scroll.current.scrollTo({ x: MAX_WIDTH * newCurrentItem, animated: true });
      }

      setPressed(true);

      return newCurrentItem;
    });
  }

  return (
    <View>
      <Animated.View style={[
        style.animation,
        { transform: [{ translateX: carrouselAnimation.current }] }
      ]}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScrollEndDrag={handleScroll}
          ref={scroll}
        >
          {carrouselItems.map(item => (
            <View key={item.id} style={[style.carrousel, { width: MAX_WIDTH }]}>
              <Image source={item.src} style={style.image} />
              <Title marginHorizontal={50}>{item.title}</Title>
              <Text marginHorizontal={40}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </Animated.View>

      <View style={style.controls}>
        <Steps quantity={3} current={currentItem} />
        <Button
          onPress={() => handlePress()}
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
    alignItems: 'center',
  },
  controls: {
    alignItems: 'center'
  },
  image: {
    width: MAX_WIDTH,
    height: 550,
  }
})