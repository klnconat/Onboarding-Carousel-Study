// jest.setup.js
import 'react-native-gesture-handler/jestSetup';

global.setImmediate = (callback) => setTimeout(callback, 0);
global.clearImmediate = (id) => clearTimeout(id);

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
  
    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};
  
    return Reanimated;
  });