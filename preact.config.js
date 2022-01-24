//const tailwind = require("preact-cli-tailwind");
import path from 'path';
import tailwind from 'preact-cli-tailwind';


import envVars from 'preact-cli-plugin-env-vars';


module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  envVars(config, env, helpers);
  config.resolve.alias.src = path.resolve(__dirname, 'src');
  config.resolve.alias.routes = path.resolve(__dirname, 'src', 'routes')
  
  return config;
};
