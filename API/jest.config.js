module.exports = {
   moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
   testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
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
      'src/core/constantes/httpStatusCodes.js',
      'src/models/index.js',
      'src/database/config/db.config.js',
      'src/database/models/*',
   ],
};
