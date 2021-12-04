import Dotenv from 'dotenv-webpack';

const tailwind = require("preact-cli-tailwind");


module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  config.plugins.push(new Dotenv({path: "./.env"}));
  config.resolve.alias.src = "src";
  
  return config;
};
