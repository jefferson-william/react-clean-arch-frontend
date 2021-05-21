module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-inline-react-svg',
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['styled-jsx/babel', { optimizeForSpeed: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
          '@': './public',
        },
      },
    ],
  ],
}
