import globals from 'globals';
import pluginJs from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import appsScript from 'eslint-plugin-googleappsscript';

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc,
      googleappsscript: appsScript,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'comma-dangle': ['error', 'never'],
      'max-len': ['error', { code: 120, 'ignoreTrailingComments': true  }],
      'camelcase': [
        'error',
        {
          ignoreDestructuring: true,
          ignoreImports: true,
          allow: ['access_type', 'redirect_uris'],
        },
      ],
      'guard-for-in': 'off',
      'no-var': 'off',
      'no-unused-vars': 'off', // Functions aren't used.
      'no-undef': 'off', // Ignore undefined errors for global variables
    },
  }
];
