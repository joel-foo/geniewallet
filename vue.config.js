const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    experiments: {
      asyncWebAssembly: true,
    },
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.electron.genie-wallet',
        productName: 'genie wallet',
        mac: {
          category: 'public.app-category.finance',
          icon: 'build/icon.icns',
        },
        win: {
          target: [
            {
              target: 'nsis',
              arch: ['x64', 'ia32'],
            },
          ],
          icon: 'build/icon.png',
        },
        nsis: {
          allowToChangeInstallationDirectory: true,
          oneClick: false,
          perMachine: false,
        },
        linux: {
          target: ['deb', 'AppImage'],
        },
      },
    },
  },
})

// {
//   target: 'nsis',
//   arch: ['x64', 'ia32'],
// },
