import { Dimensions, Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import React from 'react';

type ImageSource = {
  source: ImageSourcePropType;
};

type Props = {
  item: ImageSource;
  index: number;
};

const {width} = Dimensions.get('screen');

export default function SliderItem({ item, index }: Props) {
  return (
    <View style={styles.ItemContainer}>
      <Image source={item.source} style={styles.image} resizeMode='cover'></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width-30,
    height: (width-30) * 9 / 19,
    borderRadius:7
  },
  ItemContainer:{
    width:width,
    alignItems:'center'
  }
});
