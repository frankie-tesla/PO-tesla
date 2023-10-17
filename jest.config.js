export default {
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "\\.svg$": "<rootDir>/__mocks__/svg.js"
  },
  testEnvironment: "jest-environment-jsdom"
};
