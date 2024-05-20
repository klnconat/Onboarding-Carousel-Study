import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import {QuestionBoxProps} from '../../types/QuestionBoxProps';

const QuestionBox = (props: QuestionBoxProps) => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={{uri: props.question.image_uri}}
        style={styles.backgroundImage}
        imageStyle={styles.questionImage}>
        <View style={styles.subView}>
          {/* in case of more than 3 lines in container, line number is set to 2 */}
          <Text style={styles.textStyle} numberOfLines={2}>
            {props.question.title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 15,
    paddingLeft: 14,
    color: 'rgba(255, 255, 255, 1)',
  },
  mainView: {
    width: 240,
    height: 160,
    marginRight: 10,
    marginLeft: 24,
    marginBottom: 24,
  },
  subView: {height: 64, justifyContent: 'center'},
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  questionImage: {borderRadius: 12},
});

export default React.memo(QuestionBox);
