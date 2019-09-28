module.exports = {
  browser: true,
  collectCoverageFrom: ['client/**/*.ts', 'client/**/*.tsx'],
  setupFiles: ['./setupTests.js'],
  coverageReporters: ['json', 'text'],
};
