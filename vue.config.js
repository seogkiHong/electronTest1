module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "electron-test-3",
        publish: "github",
        dmg: {
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
        appImage: {},
        nsis: {
          createDesktopShortcut: "always",
        },
        files: ["./build/**/*", "./src/background.js"],
      },
    },
  },
};
