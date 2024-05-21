// __tests__/PaywallScreen.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store/configureStore';
import PaywallScreen from '../src/screens/paywall/Paywall';
import {NavigationContainer} from '@react-navigation/native';

test('clicking "Try for Free" button sets flowCompleted to true', () => {
  const {getByTestId} = render(
    <Provider store={store}>
      <NavigationContainer>
        <PaywallScreen />
      </NavigationContainer>
    </Provider>,
  );

  fireEvent.press(getByTestId('CommonButton'));

  const state = store.getState();
  expect(state.user.flowCompleted).toBe(true);
});
