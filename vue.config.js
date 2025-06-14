const path = require('path')

module.exports = {
  // Vue CLI automatically uses vue-loader for .vue files

  chainWebpack: config => {
    config.entry('app').clear()            // Clear existing entries
    config.entry('app').add('./src/main.ts')  // Add your desired entry file
    // Make sure TypeScript loader handles <script lang="ts"> in .vue files
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