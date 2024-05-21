// GetStarted.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store/configureStore';
import Paywall from '../src/screens/paywall/Paywall';
import HomePage from '../src/screens/home/HomePage';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Paywall" component={Paywall} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

describe('Test Navigation', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('navigates to HomePage on button press and finds the home page search box', () => {
    const {getByTestId} = render(<App />);

    // Clicking Get Started button
    fireEvent.press(getByTestId('CommonButton'));

    // Checking expected text on target screen
    expect(getByTestId('HomePage')).toBeTruthy();
  });
});
