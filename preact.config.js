import Dotenv from 'dotenv-webpack';

const tailwind = require("preact-cli-tailwind");


module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  config.plugins.push(new Dotenv({path: "./.env"}));
  config.resolve.alias = {
    "src": env.src,
    "react": "preact/compat",
    "react-dom/test-utils": "preact/test-utils",
    "react-dom": "preact/compat", // Must be below test-utils
    "react/jsx-runtime": "preact/jsx-runtime",
    ...config.resolve.alias
  };
  return config;
};
