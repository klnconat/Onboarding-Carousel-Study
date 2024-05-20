import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import service from '../../api/service';
import {Question} from '../../types/Question';
import QuestionBox from '../home/QuestionBox';

const QuestionListBox = () => {
  const [questionList, setQuestionList] = useState([]);

  const getQuestions = async () => {
    service
      .getQuestions()
      .then(res => {
        setQuestionList(res.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <View>
      <FlatList
        data={questionList}
        renderItem={({item}: {item: Question}) => {
          return <QuestionBox question={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default QuestionListBox;
