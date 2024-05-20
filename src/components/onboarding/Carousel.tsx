import React, {useState, useRef} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';

import FirstCarouselItem from './FirstCarouselItem';
import SecondCarouselItem from './SecondCarouselItem';
import Paywall from '../../screens/paywall/Paywall';
import Pagination from './Pagination';

const Carousel = () => {
  const width = Dimensions.get('window').width;

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const increaseActiveIndex = () => {
    (carouselRef.current as any)?.next();
    setActiveIndex(activeIndex => activeIndex + 1);
  };

  const data = [
    <FirstCarouselItem setIndex={increaseActiveIndex} />,
    <SecondCarouselItem setIndex={increaseActiveIndex}/>,
    <Paywall />,
  ];

  return (
    <View style={styles.mainView}>
      <ReanimatedCarousel
        ref={carouselRef}
        loop={false}
        width={width}
        style={styles.mainView}
        data={data}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({item}) => item}
      />
      {activeIndex != 2 && <Pagination activeIndex={activeIndex} />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1},
});

export default Carousel;
