module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: false,

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // 현재까지 테스트 완료 Window 10, Mac OS Mid 2011, Ubuntu 18.04 x64, Centos 7 x64 (libxscrnsaver 설치 필요 rpm -Uvh로 설치), RaspberryPi 3b+
        appId: "electron-test-3",
        publish: ["github"],
        win: {
          target: [
            /* {
              target: "nsis",
              arch: ["x64", "ia32"],
            }, */
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
            /* {
              target: "appImage",
              arch: ["x64"],
            },
            {
              target: "rpm",
              arch: ["x64"],
            }, */
          ],
        },
        /* mac: {
          target: [
            {
              target: "dmg",
            },
          ],
        }, */
      },
    },
  },
};
