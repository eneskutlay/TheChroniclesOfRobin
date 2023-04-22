module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@containers': './src/containers',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
