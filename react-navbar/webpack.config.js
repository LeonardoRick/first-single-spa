const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "leonardorick",
    projectName: "react-navbar",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object

    // final bundle will exclude react-router-dom because we are setting this dependency
    // with our root-config project to be used by both react-microfrontend and react-navbar
    // and any future react projects that uses this dependecy
    externals: ["react", "react-dom"],
  });
};
