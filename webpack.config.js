const path = require("path");

module.exports = {
  entry: "./js/script.js", //Arquivo de entrada
  output: {
    path: path.resolve(__dirname, "./"), //Caminho para arquivo de saida
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Arquivos terminados com .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
