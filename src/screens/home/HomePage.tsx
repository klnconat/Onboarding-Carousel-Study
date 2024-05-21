import React from 'react';
import {StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

import WelcomeTextBox from '../../components/home/WelcomeTextBox';
import SearchBox from '../../components/home/SearchBox';
import NotificationBox from '../../components/home/NotificationBox';
import QuestionListBox from '../../components/home/QuestionListBox';
import CategoryListBox from '../../components/home/CategoryListBox';

import SearchIcon from '../../assets/home/searchIcon.svg';
import MailBoxIcon from '../../assets/home/mailBoxIcon.svg';
import ProceedIcon from '../../assets/home/proceedIcon.svg';

const HomePage = () => {
  return (
    <SafeAreaView style={{flexGrow: 1}} testID='HomePage'>
      <ScrollView contentContainerStyle={styles.container}>
        <WelcomeTextBox />
        <SearchBox svg={<SearchIcon />} placeholder="Search for plants" />
        <NotificationBox
          badgeSvg={<MailBoxIcon />}
          header="FREE Premium Available"
          infoText="Tap to upgrade your account!"
          proceedSvg={<ProceedIcon />}
        />
        <Text style={styles.getStartedText} testID="GetStarted">Get Started</Text>
        <QuestionListBox />
        <CategoryListBox />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {paddingBottom: 50, flexGrow: 1},
  getStartedText: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 15,
    color: 'rgba(19, 35, 27, 1)',
    marginLeft: 24,
    marginBottom: 16,
  },
});
export default HomePage;
