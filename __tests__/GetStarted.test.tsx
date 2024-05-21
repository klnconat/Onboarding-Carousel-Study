// GetStarted.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store/configureStore';
import GetStarted from '../src/screens/getStarted/GetStarted';
import Onboarding from '../src/screens/onboarding/Onboarding';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
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

  test('navigates to Onboarding on button press and finds the carousel', () => {
    const {getByTestId} = render(<App />);

    // Clicking Get Started button
    fireEvent.press(getByTestId('CommonButton'));

    // Checking expected text on target screen
    expect(getByTestId('ReanimatedCarousel')).toBeTruthy();
  });
});
