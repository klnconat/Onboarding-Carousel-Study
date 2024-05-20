import {createStackNavigator} from '@react-navigation/stack';

import GetStarted from '../screens/getStarted/GetStarted';
import Onboarding from '../screens/onboarding/Onboarding';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

type CustomProps = {
  initialRouteName: string;
};

function StartNavigation(props: CustomProps) {
  debugger;
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={props.initialRouteName}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
}

export default StartNavigation;
