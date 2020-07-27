<template>
  <div ref="main" class="relative no-scroll"></div>
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

      types2: [
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
    };
  },
  created() {
    this.getScreenType();
  },
  mounted() {
    this.dynamicAdd();
  },
  methods: {
    getScreenType() {
      //현재 관리기에서 저장된 스크린타입을 불러온다.
    },
    dynamicAdd() {
      for (var i = 0; i < this.types2.length; i++) {
        var curType = this.types2[i];
        if (curType.type == "image") {
          this.setInstance(imageContainer, { type: curType });
        } else if (curType.type == "url") {
          this.setInstance(urlContainer, { type: curType });
        } else if (curType.type == "video") {
          this.setInstance(videoContainer, { type: curType });
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
  },
};
</script>
