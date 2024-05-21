// __mocks__/react-navigation-stack.js
export const createStackNavigator = jest.fn(() => {
    return {
      Navigator: ({ children }) => children,
      Screen: ({ children }) => children,
    };
  });
  