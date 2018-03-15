const path = require('path');

module.exports = {
  entry: {
    app: './src/js/app.js',
    app2: './src/js/app2.js',
    app3: './src/js/app3.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'public/js'),
  },
  optimization: {
    splitChunks: {
      // cacheGroups内にバンドルの設定を複数記述できる
      cacheGroups: {
        // 今回はvendorだが、任意の名前で問題ない
        vendor: {
          // node_modules配下のモジュールをバンドル対象とする
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        },
        vendorModules: {
          // 今回はsrc/js/modules配下にバンドルしたいモジュールが存在するため指定は以下になる
          test: /src\/js\/modules/,
          name: 'vendor-modules',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },

  // デフォルト設定のchunksだけ上書きする設定
  // optimization: {
  //   splitChunks: {
  //     chunks: 'initial'
  //   }
  // }
};