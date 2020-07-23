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
              target: ["nsis", "portable"],
              arch: ["x64", "ia32"],
            },
          ],
        },
        linux: {
          target: [
            {
              target: ["appImage", "deb", "snap"],
              arch: ["amd64", "armv7l", "arm64"],
            },
          ],
        },
      },
    },
  },
};
