const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/entry",
  mode: "development",
  devServer: {
    port: 3010, // Puerto donde se levanta la app
    historyApiFallback: true, // Necesario para que funcione React Router
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "host_microfrontend", // Aqui se define el nombre de la aplicación
      remotes: {
        MF_LOGIN: "login_microfrontend@http://localhost:3011/remoteEntry.js", // Nombre de la aplicación hijo + @http://4.228.227.51:puertoMFhijo/RemoteEntry.js
        MF_HOME: "home_microfrontend@http://4.228.227.51:3012/remoteEntry.js",
        MF_USERS: "users_microfrontend@http://4.228.227.51:3013/remoteEntry.js",
        MF_COURSES:
          "courses_microfrontend@http://4.228.227.51:3014/remoteEntry.js",
        MF_SURVEYS:
          "surveys_microfrontend@http://4.228.227.51:3015/remoteEntry.js",
      },
      shared: {
        ...dependencies, // other dependencies
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  target: "web",
};
