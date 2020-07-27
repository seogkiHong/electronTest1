<template>
  <div>
    <video ref="videoPlayer" class="video-js vjs-theme-city"></video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
// City
import "@videojs/themes/dist/city/index.css";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
