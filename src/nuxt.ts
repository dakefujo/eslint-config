import type { Linter } from 'eslint'

import { vueConfig } from './vue'

export const nuxtConfig: Linter.Config[] = [
    ...vueConfig,
    {
        languageOptions: {
            globals: {
                $fetch: true
            }
        },
        rules: {
            'vue/no-undef-components': [
                'error',
                {
                    ignorePatterns: ['Nuxt(\\w)+', 'ClientOnly', 'DevOnly']
                }
            ]
        }
    }
]
