const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = (env, argv)=>{

}
module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'static/js/main.[contenthash:6].js', // Thêm mã hash tên file dựa vào content để tránh bị cache bởi CDN hay browser.
    path: path.resolve(__dirname, 'dist'), // Build ra thư mục dist
    publicPath: '/'
  },
  devServer: {
    hot: true, //enable Hot Module Replacement, reload faster
    port: 3000, 
    historyApiFallback: true, // must set true when use lazyload module React if not will get error when load file
    // Configuration file html in public
    static: {
      directory: path.resolve(__dirname, 'public', 'index.html'),
      serveIndex: true,
      watch: true // when change content in index.html will reload
    }
  },
  module: {
    rules: [ 
        {
          test: /\.(ts|js)x?$/,
          exclude: '/node_modules/',
          use: {  
            loader: "babel-loader" 
          }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, //  import file image, video, svg, ...
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        },
    ]
  },
 resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      alias: {
        '@root': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@common': path.resolve(__dirname, './src/common'),
        '@services': path.resolve(__dirname, './src/api/services'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@stores': path.resolve(__dirname, './src/stores')
      }
    },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      favicon: "./public/favicon.ico"
    })
  ]
}
