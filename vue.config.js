module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        extraResources: [
          {
            from: "./extraResources/",
            to: "extraResources",
            filter: ["**/*"],
          },
        ],
      },
    },
  },
};
