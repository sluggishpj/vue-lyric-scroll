import vue from 'rollup-plugin-vue' // Handle .vue SFC files
import buble from 'rollup-plugin-buble' // Transpile/polyfill with reasonable browser support
import sass from 'rollup-plugin-sass'
import { terser } from 'rollup-plugin-terser' // 压缩js

export default {
    input: 'src/index.js', // Path relative to package.json
    output: {
        name: 'lyricScroll',
        exports: 'named',
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
        sass(),
        terser()
    ]
}