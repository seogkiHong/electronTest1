<template>
  <div
    class="fixed"
    id="video-container"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <video-player :options="videoOptions" style="width: 100%; height: 100%;" />
  </div>
</template>

<script>
import VideoPlayer from "@/components/sub/player/VideoPlayer.vue";
export default {
  name: "videoComponent",
  components: { VideoPlayer },
  data: {
    type: Object,
  },

  data() {
    return {
      myType: {},
      left1: "",
      top1: "",
      width: "",
      height: "",
      curHeight: window.innerHeight,
      curWidth: window.innerWidth,
      videoOptions: {
        autoplay: true,
        controls: false,
        fill: true,
        sources: [
          {
            src:
              "http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8",
            type: "application/x-mpegurl",
          },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    init() {
      this.myType = this.$data.type;
      this.left1 = this.myType.left1 + "%";
      this.top1 = this.myType.top1 + "%";
      this.width = Number(this.myType.left2) - Number(this.myType.left1) + "%";
      this.height = Number(this.myType.top2) - Number(this.myType.top1) + "%";
    },
  },
};
</script>
