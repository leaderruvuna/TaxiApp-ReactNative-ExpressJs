module.exports = {
   moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
   testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
   "bail": true,
   testEnvironment: 'node',
   clearMocks: true,
   verbose: true,
   coverageDirectory: 'coverage',
   collectCoverageFrom: ['src/**/*.js'],
   coveragePathIgnorePatterns: [
      'node_modules',
      'coverage',
      'src/index.js',
      'src/app.js',
      'src/core/constants/httpStatusCodes.js',
      'src/models/index.js',
      'src/database/models/*',
   ],
};
