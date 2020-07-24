module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: false,

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
            {
              target: "portable",
              arch: ["x64", "ia32"],
            },
          ],
        },
        linux: {
          target: [
            {
              target: "deb",
              arch: ["armv7l", "x64"],
            },
            {
              target: "appImage",
              arch: ["x64"],
            },
            {
              target: "rpm",
              arch: ["x64"],
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
