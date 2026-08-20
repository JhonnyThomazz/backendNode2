import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  clearMocks: true,
  testEnviroment: 'node',
};
export default createJestConfig(config);