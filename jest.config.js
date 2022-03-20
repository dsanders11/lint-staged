const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'lib/**/*.js',
    // Avoid ESM import.meta parse error.
    // (Can't measure coverage anyway, it's always mocked)
    '!lib/resolveConfig.js',
  ],
  setupFiles: ['./testSetup.js'],
  snapshotSerializers: ['jest-snapshot-serializer-ansi'],
  testEnvironment: 'node',
  transform: {},
}

export default config
