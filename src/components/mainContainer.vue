<template>
  <div>
    <div ref="main" class="relative no-scroll"></div>
  </div>
</template>

<script>
import imageContainer from "@/components/sub/imageComponent";
import urlContainer from "@/components/sub/urlComponent";
import videoContainer from "@/components/sub/videoComponent";
import textContainer from "@/components/sub/textComponent";
import Vue from "vue";
import store from "@/store";
export default {
  name: "mainContainer",
  components: { imageContainer, urlContainer, videoContainer, textContainer },
  data() {
    return {
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
          left2: 100,
          top1: 0,
          top2: 10,
        },
        {
          type: "url",
          left1: 0,
          left2: 25,
          top1: 10,
          top2: 90,
          data: {
            url: "https://www.eplib.or.kr", // 반응형 테스트 url: "https://www.eplib.or.kr",
          },
        },
        {
          type: "video",
          left1: 25,
          left2: 65,
          top1: 10,
          top2: 90,
          isWeb: true,
        },
        {
          type: "url",
          left1: 65,
          left2: 100,
          top1: 10,
          top2: 90,
          data: {
            url: "https://www.youtube.com", // 반응형 테스트 url: "https://www.eplib.or.kr",
          },
        },
        {
          type: "image",
          left1: 0,
          left2: 100,
          top1: 90,
          top2: 100,
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
            images: [
              "test/2.png",
              "test/6.png",
              "test/10.png",
              "test/10_1.png",
              "test/11.png",
              "test/12.png",
              "test/20.png",
              "test/22.png",
              "test/24.png",
              "test/24_1.png",
              "test/29.png",
            ],
          },
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
            images: [
              "test/2.png",
              "test/6.png",
              "test/10.png",
              "test/10_1.png",
              "test/11.png",
              "test/12.png",
              "test/20.png",
              "test/22.png",
              "test/24.png",
              "test/24_1.png",
              "test/29.png",
            ],
          },
        },
        {
          type: "url",
          left1: 50,
          left2: 100,
          top1: 0,
          top2: 100,
          data: {
            url: "https://www.youtube.com", // 반응형 테스트 url: "https://www.eplib.or.kr",
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
    this.selectedType = this.totalType;
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
          this.setInstance(imageContainer, { type: curType });
        } else if (curType.type == "url") {
          this.setInstance(urlContainer, { type: curType });
        } else if (curType.type == "video") {
          this.setInstance(videoContainer, { type: curType });
        } else if (curType.type == "text") {
          this.setInstance(textContainer, { type: curType });
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
        }
        this.$refs.main.innerHTML = "";
        this.dynamicAdd();
      });

      this.dynamicAdd();
    },
  },
};
</script>
