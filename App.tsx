/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './src/redux/store/configureStore';
import {loadUserFromStorage} from './src/redux/reducer/userSlice';
import {NavigationContainer} from '@react-navigation/native';

import StartNavigation from './src/navigation/StartNavigation';

const App = () => {
  const dispatch = useDispatch();
  const {flowCompleted, loading} = useSelector(
    (state: RootState) => state.user,
  );

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StartNavigation
          initialRouteName={flowCompleted ? 'Home' : 'GetStarted'}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
