import type { Linter } from 'eslint'
import vue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

export const vueConfig: Linter.Config[] = [
    ...vue.configs['flat/recommended'],
    {
        languageOptions: {
            parserOptions: {
                parser: ts.parser
            }
        },
        rules: {
            'vue/html-indent': [
                'error',
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: []
                }
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'never',
                        normal: 'always',
                        component: 'always'
                    },
                    svg: 'always',
                    math: 'always'
                }
            ],
            'vue/return-in-computed-property': 'off',
            // Priority A
            'vue/multi-word-component-names': 'off',
            // Priority C
            'vue/component-tags-order': [
                'error',
                {
                    order: ['template', 'script', 'style']
                }
            ],
            'vue/no-v-html': ['warn'],
            // Uncategorized
            'vue/no-undef-components': [
                'error',
                {
                    ignorePatterns: ['RouterLink', 'RouterView']
                }
            ],
            'vue/no-v-text-v-html-on-component': ['error'],
            'vue/prefer-use-template-ref': 'warn'
        }
    }
]
