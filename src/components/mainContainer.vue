<template>
  <div>
    <div ref="main" class="relative no-scroll background-black"></div>
  </div>
</template>

<script>
import imageComponent from "@/components/sub/imageComponent";
import urlComponent from "@/components/sub/urlComponent";
import videoComponent from "@/components/sub/videoComponent";
import textComponent from "@/components/sub/textComponent";
import osInfoComponent from "@/components/sub/osInfoComponent";
import exitComponent from "@/components/sub/exitComponent";
import pptComponent from "@/components/sub/pptComponent";
import deviceIoComponent from "@/components/sub/deviceIoComponent";
import Vue from "vue";
import store from "@/store";
export default {
  name: "mainContainer",
  components: {
    imageComponent,
    urlComponent,
    videoComponent,
    textComponent,
    osInfoComponent,
    exitComponent,
    pptComponent,
    deviceIoComponent,
  },
  data() {
    return {
      exitType: [
        {
          type: "exit",
          left1: 0,
          left2: 100,
          top1: 0,
          top2: 100,
        },
      ],
      textType: [
        {
          type: "text",
          left1: 0,
          left2: 100,
          top1: 0,
          top2: 50,
          isSlide: true,
          textOptions: {
            texts: ["안녕하세요! 텍스트1 테스트 진행중입니다.~~"],
          },
        },
        {
          type: "text",
          left1: 0,
          left2: 100,
          top1: 50,
          top2: 100,
          isSlide: false,
          textOptions: {
            texts: ["안녕하세요! 텍스트2 테스트 진행중입니다.~~"],
          },
        },
      ],

      appType: [
        {
          type: "image",
          left1: 0,
          left2: 10,
          top1: 0,
          top2: 5,
        },
        {
          type: "url",
          left1: 0,
          left2: 25,
          top1: 5,
          top2: 100,
          data: {
            url: "http://www.suwonlib.go.kr:8080/?keyword=", // 반응형 테스트 url: "http://www.suwonlib.go.kr:8080/?keyword=",
          },
        },
        {
          type: "url",
          left1: 25,
          left2: 65,
          top1: 5,
          top2: 100,
          data: {
            url: "https://www.eplib.or.kr", // 반응형 테스트 url: "https://www.eplib.or.kr",
          },
        },
        {
          type: "url",
          left1: 65,
          left2: 100,
          top1: 5,
          top2: 100,
          data: {
            url: "https://www.youtube.com", // 반응형 테스트 url: "https://www.eplib.or.kr",
          },
        },
      ],
      imageType: [
        {
          type: "image",
          left1: 0,
          left2: 100,
          top1: 0,
          top2: 100,
          isSlide: true,
          imageOptions: {
            images: ["1-1.jpg", "1-2.jpg", "1-3.jpg"],
            /* images: [
              "test/2-min.png",
              "test/6-min.png",
              "test/10-min.png",
              "test/10_1-min.png",
              "test/11-min.png",
              "test/12-min.png",
              "test/20-min.png",
              "test/22-min.png",
              "test/24-min.png",
              "test/24_1-min.png",
              "test/29-min.png",
            ], */
          },
        },
      ],

      osInfoType: [
        {
          type: "osinfo",
          left1: 0,
          left2: 100,
          top1: 0,
          top2: 100,
        },
      ],
      videoType: [
        {
          type: "video",
          left1: 0,
          left2: 100,
          top1: 0,
          top2: 100,
          isWeb: false,
        },
      ],

      deviceIoType: [
        {
          type: "deviceio",
          left1: 0,
          left2: 100,
          top1: 0,
          top2: 100,
        },
      ],

      pptType: [
        {
          type: "ppt",
          left1: 0,
          left2: 100,
          top1: 0,
          top2: 100,
        },
      ],

      totalType: [
        {
          type: "text",
          left1: 0,
          left2: 50,
          top1: 0,
          top2: 20,
          isSlide: true,
          textOptions: {
            texts: ["안녕하세요! 텍스트1 테스트 진행중입니다.~~"],
          },
        },

        {
          type: "image",
          left1: 0,
          left2: 50,
          top1: 20,
          top2: 60,
          isSlide: true,
          imageOptions: {
            images: ["1-1.jpg", "1-2.jpg", "1-3.jpg"],
          },
          /* imageOptions: {
            images: [
              "test/2-min.png",
              "test/6-min.png",
              "test/10-min.png",
              "test/10_1-min.png",
              "test/11-min.png",
              "test/12-min.png",
              "test/20-min.png",
              "test/22-min.png",
              "test/24-min.png",
              "test/24_1-min.png",
              "test/29-min.png",
            ],
          }, */
        },
        {
          type: "url",
          left1: 50,
          left2: 100,
          top1: 0,
          top2: 100,
          data: {
            url: "http://www.suwonlib.go.kr:8080/?keyword=", // 반응형 테스트 url: "http://www.suwonlib.go.kr:8080/?keyword=",
          },
        },

        {
          type: "video",
          left1: 0,
          left2: 50,
          top1: 60,
          top2: 80,
          isWeb: true,
        },

        {
          type: "video",
          left1: 0,
          left2: 50,
          top1: 80,
          top2: 100,
          isWeb: false,
        },
      ],

      selectedType: [],
    };
  },
  created() {},
  mounted() {
    this.selectedType = this.deviceIoType;
    this.getScreenType();
  },
  methods: {
    getScreenType() {
      //현재 관리기에서 저장된 스크린타입을 불러온다.

      this.setIpcRenderer();
    },
    dynamicAdd() {
      for (var i = 0; i < this.selectedType.length; i++) {
        var curType = this.selectedType[i];
        if (curType.type == "image") {
          this.setInstance(imageComponent, { type: curType });
        } else if (curType.type == "url") {
          this.setInstance(urlComponent, { type: curType });
        } else if (curType.type == "video") {
          this.setInstance(videoComponent, { type: curType });
        } else if (curType.type == "text") {
          this.setInstance(textComponent, { type: curType });
        } else if (curType.type == "osinfo") {
          this.setInstance(osInfoComponent, { type: curType });
        } else if (curType.type == "exit") {
          this.setInstance(exitComponent, { type: curType });
        } else if (curType.type == "deviceio") {
          this.setInstance(deviceIoComponent, { type: curType });
        } else if (curType.type == "ppt") {
          this.setInstance(pptComponent, { type: curType });
        }
      }
    },

    setInstance(container, data) {
      var ComponentClass = Vue.extend(container);
      var instance = new ComponentClass({ store, data: data });
      instance.$mount();
      this.$refs.main.appendChild(instance.$el);
      instance.init();
    },

    setIpcRenderer() {
      window.require("electron").ipcRenderer.on("menu", (event, message) => {
        console.log(message);

        if (message == "app") {
          this.selectedType = this.appType;
        } else if (message == "image") {
          this.selectedType = this.imageType;
        } else if (message == "video") {
          this.selectedType = this.videoType;
        } else if (message == "text") {
          this.selectedType = this.textType;
        } else if (message == "total") {
          this.selectedType = this.totalType;
        } else if (message == "osinfo") {
          this.selectedType = this.osInfoType;
        } else if (message == "exit") {
          this.selectedType = this.exitType;
        } else if (message == "deviceio") {
          this.selectedType = this.deviceIoType;
        } else if (message == "ppt") {
          this.selectedType = this.pptType;
        }
        this.$refs.main.innerHTML = "";
        this.dynamicAdd();
      });

      this.dynamicAdd();
    },
  },
};
</script>
