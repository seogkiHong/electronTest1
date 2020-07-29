<template>
  <div
    class="fixed"
    id="video-container"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <template v-if="isWeb">
      <video-player
        :options="videoOptions"
        style="width: 100%; height: 100%;"
      />
    </template>
    <template v-else>
      <video
        control
        autoplay
        loop
        style="width: 100%; height: 100%; display:block;"
      >
        <source ref="electronVideo" type="video/mp4" />
      </video>
    </template>
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
      path: "",
      isWeb: false,
      videoOptions: {
        autoplay: false,
        controls: false,
        loop: true,
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
      this.isWeb = this.myType.isWeb;
      this.left1 = this.myType.left1 + "%";
      this.top1 = this.myType.top1 + "%";
      this.width = Number(this.myType.left2) - Number(this.myType.left1) + "%";
      this.height = Number(this.myType.top2) - Number(this.myType.top1) + "%";

      if (!this.isWeb) {
        const { app } = window.require("electron").remote;

        this.path = app.getPath("downloads") + "/whale.mp4";
        this.$refs.electronVideo.src = `safe-file-protocol://${this.path}`;
        console.log(this.path);
      }
    },
  },
};
</script>
