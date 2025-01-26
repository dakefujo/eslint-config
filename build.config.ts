import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: ['./src/index', './src/vue-nuxt/index'],
    outDir: 'dist',
    declaration: true,
    rollup: {
        emitCJS: true
    },
    failOnWarn: false
})
