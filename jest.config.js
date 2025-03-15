module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest to transform files
  },
  testEnvironment: 'jsdom', // Specify the test environment (you can change it if needed)
};


// "jest": {
//     "testEnvironment": "jsdom",
//     "testMatch": [
//       "<rootDir>/src/**/*.tests.tsx",
//       "<rootDir>/src/**/*.spec.tsx"
//     ],
//     "testPathIgnorePatterns": [
//       "/node_modules/"
//     ],
//     "transform": {
//       "^.+\\.(ts|tsx)$": "babel-jest"
//     }
//   }