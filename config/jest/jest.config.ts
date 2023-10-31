import path from 'path';

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    modulePaths: ['<rootDir>src'],
    rootDir: '../../',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent'),
        axios: 'axios/dist/node/axios.cjs',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
