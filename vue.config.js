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
              arch: ["armv7l", "arm64", "x64"],
            },
            {
              target: "appImage",
              arch: ["armv7l", "arm64", "x64"],
            },
            {
              target: "rpm",
              arch: ["armv7l", "arm64", "x64"],
            },
          ],
        },
        mac: {
          target: [
            {
              target: "dmg",
            },
          ],
        },
      },
    },
  },
};
