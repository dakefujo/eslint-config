export = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked'
    ],
    parserOptions: {
        project: true
    },
    rules: {
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                disallowTypeAnnotations: false,
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports'
            }
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-duplicate-type-constituents': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false
            }
        ],
        '@typescript-eslint/no-redundant-type-constituents': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        '@typescript-eslint/strict-boolean-expressions': [
            'error',
            {
                allowNullableBoolean: true
            }
        ],
        '@typescript-eslint/switch-exhaustiveness-check': [
            'error',
            {
                allowDefaultCaseForExhaustiveSwitch: true,
                requireDefaultForNonUnion: true
            }
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }
        ],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-extra-semi': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-param-reassign': ['error', { props: false }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
        'semi-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'semi-style': ['error', 'first']
    }
}
