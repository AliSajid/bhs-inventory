const tailwind = require("preact-cli-tailwind");

module.exports = (config, env, helpers) => {
    config = tailwind(config, env, helpers);
    config.resolve.alias.src = env.src;
  return config;
};