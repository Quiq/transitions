module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
      },
    ],
    '@babel/typescript',
    '@babel/react',
  ],
  env: {
    test: {
      presets: ['@babel/env', '@babel/react', '@babel/typescript'],
    },
  },
};
