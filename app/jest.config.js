module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage", // Ensure this is set
  coverageReporters: ["lcov"],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};