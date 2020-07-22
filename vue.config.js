module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "electron-test-3",
        publish: "github",
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
        linux: {
          target: [
            {
              target: "appImage",
              arch: ["armv7l", "arm64"],
            },
          ],
        },
        win: {
          target: [
            {
              target: "nsis",
              arch: ["x64"],
              createDesktopShortcut: "always",
            },
          ],
        },
      },
    },
  },
};
