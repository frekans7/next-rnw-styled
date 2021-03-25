module.exports = (api) => {
  api.cache(true);

  const presets = [
    "next/babel",
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["> 1%", "last 2 versions", "not ie <= 10"],
        },
        useBuiltIns: "entry",
        corejs: "3.9.1",
      },
    ],
  ];

  const plugins = [
    [
      "module-resolver",
      {
        alias: {
          "^react-native$": "react-native-web",
        },
      },
    ],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-object-rest-spread",
  ];

  return { plugins, presets };
};
