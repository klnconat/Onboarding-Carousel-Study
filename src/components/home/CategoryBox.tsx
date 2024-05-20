import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

import {CategoryBoxProps} from '../../types/CategoryBoxProps';

const CategoryBox = (props: CategoryBoxProps) => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={{uri: props.category.image.url}}
        style={styles.backgroundImage}
        imageStyle={styles.categoryImage}>
        <View style={styles.subView}>
          <Text style={styles.text} numberOfLines={2}>
            {props.category.name}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 16,
    color: 'rgba(19, 35, 27, 1)',
    textTransform: 'capitalize',
    paddingTop: 16,
    paddingLeft: 16,
  },
  mainView: {
    width: 158,
    height: 152,
  },
  subView: {maxWidth: 120},
  backgroundImage: {
    width: '100%',
    height: '100%',
    elevation: 8,
  },
  categoryImage: {
    borderRadius: 12,
    marginTop: 10,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#000',
  },
});
export default CategoryBox;
