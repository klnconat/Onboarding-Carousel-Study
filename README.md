# Onboarding-Carousel-Study
## Description
Onboarding-Carousel-Study is a React Native application designed to demonstrate a case study implementation. It showcases features such as navigation, state management, local storage, and testing. The project is structured using TypeScript for enhanced type safety and maintainability.
## Features
- **React Native with TypeScript**: Leverage the power of TypeScript in a React Native environment.
- **React Navigation**: Seamless navigation between different screens.
- **Redux**: State management using Redux.
- **Jest**: Unit testing for reliable code.
- **AsyncStorage**: Local storage solution for storing key-value pairs.
## Installation
1. Clone the repository:
   git clone https://github.com/klnconat/HubxCaseStudy.git
2. Navigate to the project directory:
   cd HubxCaseStudy
3. Install the dependencies:
   npm install
4. Navigate to ios folder:
   cd ios
5. Install pod:
   pod install
6. Navigate back to root:
   cd ..
## Project Running
1. Open an emulator and a simulator
2. Start application:
   npm start
3. Choose platform from metro:
   press a for android / press i for ios
4. Use debug tool to avoid subtle differences between the JavaScript execution environments on the device:
    press cmd + m (for windows users it is ctrl + m) and choose chrome debug tool
## Testing
1. Run the tests using:
   npm test
## Project Structure
src/ - Contains the main source code for the application.
   - api/ - Contains API service calls and configurations.
   - assets/ - image assets.
   - components/ - Reusable components.
   - navigation/ - Navigation configuration and navigators.
   - redux/ - Redux store configuration and slices.
   - screens/ - Screen components for navigation.
   - types/ - TypeScript type definitions.

__test__/ - Contains unit tests for the application.

assets/ - font assets.

App.tsx - Entry point of the application.

