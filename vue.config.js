const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // Vue CLI automatically uses vue-loader for .vue files

  chainWebpack: config => {
    config.entry('app').clear()            // Clear existing entries
    config.entry('app').add('./src/main.ts')  // Add your desired entry file
    // Make sure TypeScript loader handles <script lang="ts"> in .vue files
     // Remove the default Vue CLI ESLint plugin (optional)
    config.plugins.delete('eslint');

    // Add custom ESLint plugin
    config
      .plugin('eslint')
      .use(ESLintPlugin, [
        {
          // ✅ DO NOT use 'extensions': removed in ESLint 9
          overrideConfigFile: './eslint.config.js', // optional if your config is in the root
          emitWarning: true,
          failOnError: false, // set true to fail build on lint errors
        },
      ]);
    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('ts-loader')
      .loader('ts-loader')
      .options({ appendTsSuffixTo: [/\.vue$/] })
      .end()

    

    // Alias example (optional)
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))

    // Add '.ts' to resolve extensions
    config.resolve.extensions
      .add('.ts')
      .add('.tsx')
  }
}