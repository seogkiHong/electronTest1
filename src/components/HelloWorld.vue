<template>
  <div ref="main">ㅎㅎㅎ</div>
</template>

<script>
import imageContainer from "@/components/sub/imageComponent";
import urlContainer from "@/components/sub/urlComponent";
import videoContainer from "@/components/sub/videoComponent";
import Vue from "vue";
import store from "@/store";
export default {
  name: "HelloWorld",
  components: { imageContainer, urlContainer, videoContainer },
  data() {
    return {
      types: [
        {
          type: "image",
          height: 50,
          weight: 50,
          order: 1
        },
        {
          type: "url",
          height: 50,
          weight: 50,
          order: 2
        }
      ]
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
      var ComponentClass = Vue.extend(imageContainer);
      var instance = new ComponentClass({ store });
      instance.$mount();

      this.$refs.main.appendChild(instance.$el);

      var ComponentClass = Vue.extend(urlContainer);
      var instance = new ComponentClass({ store });
      instance.$mount();

      this.$refs.main.appendChild(instance.$el);

      var ComponentClass = Vue.extend(videoContainer);
      var instance = new ComponentClass({ store });
      instance.$mount();
      this.$refs.main.appendChild(instance.$el);
    }
  }
};
</script>
