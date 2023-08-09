module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    // this is for sorting WITHIN an import
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    // this is for sorting imports
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'internal',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
          },
          {
            pattern: '@contexts/**',
            group: 'internal',
          },
          {
            pattern: '@styles/**',
            group: 'internal',
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
          },
          {
            pattern: '@modules/**',
            group: 'internal',
          },
          {
            pattern: '@navigators/**',
            group: 'internal',
          },
          {
            pattern: '@screens/**',
            group: 'internal',
          },
          {
            pattern: '@app-types/**',
            group: 'internal',
          },
          {
            pattern: '@utils/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
