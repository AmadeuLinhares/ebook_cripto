module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@routes': './src/routes',
          '@modules': './src/modules',
          '@theme': './src/theme',
          '@services': './src/services',
          '@api': './src/api',
          '@screens': './src/screens',
          '@layouts': './src/layouts',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@stores': './src/stores',
          '@hooks': './src/hooks',
          '@configs': './src/configs',
        },
      },
    ],
  ],
};
