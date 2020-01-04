module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Components: './src/components',
          Screens: './src/screens',
        },
      },
    ],
  ],
};
