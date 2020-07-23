module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "electron-test-3",
        publish: ["github"],
        win: {
          target: [
            {
              target: "nsis",
              arch: ["x64", "ia32"],
            },
          ],
        },
        linux: {
          target: [
            {
              target: "deb",
              arch: ["amd64", "armv7l", "arm64"],
            },
          ],
        },
      },
    },
  },
};
