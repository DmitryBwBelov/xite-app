module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                cwd: 'babelrc',
                extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
                alias: {
                    '@actions': './src/actions',
                    '@app': './src/actions',
                    '@components': './src/components',
                    '@redux': './src/redux',
                    '@screens': './src/screens',
                    '@selectors': './src/selectors',
                    '@interfaces': './src/interfaces',
                    '@libs': './src/libs',
                    '@reducers': './src/reducers',
                    '@enums': './src/enums',
                    '@states': './src/states',
                    '@epics': './src/epics',
                    '@api': './src/api',
                },
            },
        ],
        'jest-hoist',
    ],
};
