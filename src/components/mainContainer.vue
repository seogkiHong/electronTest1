<template>
  <div>
    <div ref="main" class="relative no-scroll"></div>
  </div>
</template>

<script>
import imageContainer from "@/components/sub/imageComponent";
import urlContainer from "@/components/sub/urlComponent";
import videoContainer from "@/components/sub/videoComponent";
import Vue from "vue";
import store from "@/store";
export default {
  name: "mainContainer",
  components: { imageContainer, urlContainer, videoContainer },
  data() {
    return {
      selected: null,
      types: [
        {
          type: "image",
          left1: 0,
          left2: 50,
          top1: 0,
          top2: 10,
        },
        {
          type: "url",
          left1: 0,
          left2: 50,
          top1: 20,
          top2: 70,
          data: {
            url: "https://www.google.com",
          },
        },
        {
          type: "url",
          left1: 50,
          left2: 100,
          top1: 0,
          top2: 100,
          data: {
            url: "https://www.naver.com", // 반응형 테스트 url: "https://www.eplib.or.kr"
          },
        },
        {
          type: "video",
          left1: 0,
          left2: 50,
          top1: 70,
          top2: 100,
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
        /* {
          type: "image",
          left1: 0,
          left2: 100,
          top1: 0,
          top2: 100,
          isSlide: true,
          imageOptions: {
            images: [
              "8k/test5.jpg",
              "8k/test6.jpg",
              "8k/test7.jpg",
              "8k/test8.jpg",
            ],
          },
        }, */
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
        /*{
          type: "image",
          left1: 50,
          left2: 100,
          top1: 0,
          top2: 50,
          isSlide: true,
          imageOptions: {
            images: [
              "test/20.png",
              "test/22.png",
              "test/24.png",
              "test/24_1.png",
              "test/29.png",
            ],
          },
        }, */
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

      selectedType: [],
    };
  },
  created() {},
  mounted() {
    this.selectedType = this.imageType;
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
        }
      }
    },

    changeComponent() {},

    setInstance(container, data) {
      var ComponentClass = Vue.extend(container);
      var instance = new ComponentClass({ store, data: data });
      instance.$mount();
      this.$refs.main.appendChild(instance.$el);
      instance.init();
    },

    setIpcRenderer() {
      window.require("electron").ipcRenderer.on("menu", (event, message) => {
        console.log(message); // Prints 'whoooooooh!'

        if (message == "app") {
          this.selectedType = this.appType;
        } else if (message == "image") {
          this.selectedType = this.imageType;
        } else if (message == "video") {
          this.selectedType = this.videoType;
        }
        this.$refs.main.innerHTML = "";
        this.dynamicAdd();
      });

      this.dynamicAdd();
    },
  },
};
</script>
