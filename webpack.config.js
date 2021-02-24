const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

class ConfiguracaoPagina{
  constructor(fileEntry, keyEntry, nomePagina, titulo){
    this.fileEntry = fileEntry;
    this.keyEntry = keyEntry;
    this.nomePagina = nomePagina;
    this.titulo = titulo;
  }
}

var paginas = [
  new ConfiguracaoPagina('./src/index.ts','index', 'index'),
  new ConfiguracaoPagina('./src/sobre.ts','sobre', 'sobre'),
]

module.exports = (env, argv) => {
  var config = ({
    mode: argv.mode === 'development' ? 'development': 'production',
    entry: {},
    devtool: argv.mode === 'development' ? 'inline-source-map' : false,
    output: {
      path: path.resolve(__dirname, 'public/js'),
      publicPath: '/js/dist',
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },      
      ],
    },
    plugins:[],
    resolve: {
      extensions: [ '.ts', '.js' ],
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 9000
    }
  })

  paginas.forEach(pagina=>{
    config.plugins.push(
      new HtmlWebpackPlugin({
        hash: true,
        filename: path.resolve(__dirname, `public/${pagina.nomePagina}.html`),
        template: './src/templates/html/page.defalt.html',
        chunks:[
          pagina.keyEntry
        ]
      })
    );

    config.entry[pagina.keyEntry] = pagina.fileEntry;
  });

  return config;
}