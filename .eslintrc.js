module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:jest/recommended'],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '/(react|react-native|@react-navigation/.*)/',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@constants',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@screens',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@hooks',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@config',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@components',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@api',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@helpers',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@assets',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'internal'],
        distinctGroup: false,
      },
    ],
    'import/named': 'error',
  },
};
