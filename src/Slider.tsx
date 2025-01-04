import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Animated } from 'react-native';
import SliderItem from './SliderItem';

const { width } = Dimensions.get('screen');

type SliderProps = {
  data: { source: any }[];
  interval?: number;
};

export default function Slider({ data, interval = 8000 }: SliderProps) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length; // Loop back to start
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, interval);

    return () => clearInterval(autoScroll);
  }, [currentIndex, data.length, interval]);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => <SliderItem item={item} index={index} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
      />

      <View style={styles.pagination}>
        {data.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [6, 12, 6],
            extrapolate: 'clamp',
          });

          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#a9a9a8', '#fff', '#a9a9a8'],
            extrapolate: 'clamp',
          });

          return <Animated.View key={index} style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 6,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    paddingVertical: 1.8,
    borderRadius: 15,
    paddingHorizontal: 5,
  },
  dot: {
    height: 6,
    borderRadius: 8,
    marginHorizontal: 2,
  },
});
