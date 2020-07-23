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
          ],
        },
        mac: {
          target: [
            {
              target: "dmg",
              contents: [
                {
                  x: 110,
                  y: 150,
                },
                {
                  x: 240,
                  y: 150,
                  type: "link",
                  path: "/Applications",
                },
              ],
            },
          ],
        },
      },
    },
  },
};
