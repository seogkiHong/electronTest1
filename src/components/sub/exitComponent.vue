<template>
  <div
    class="fixed background-black"
    id="exit-component"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <div class="relative max-size">
      <button
        style="color: black;
    width: 50%;
    height: 50%;
    background: 1px solid silver;
    border: 10px solid red;
    background-color: white;"
        @click="closeApp()"
      >
        IPC ELECTRON 앱 종료
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "exitComponent",
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
    };
  },
  created() {},
  mounted() {},
  methods: {
    init() {
      this.myType = this.$data.type;
      this.isSlide = this.myType.isSlide;
      this.imageOptions = this.myType.imageOptions;
      this.left1 = this.myType.left1 + "%";
      this.top1 = this.myType.top1 + "%";
      this.width = Number(this.myType.left2) - Number(this.myType.left1) + "%";
      this.height = Number(this.myType.top2) - Number(this.myType.top1) + "%";
    },

    closeApp() {
      const { ipcRenderer } = window.require("electron");
      ipcRenderer.send("ipc-exit", true);
    },
  },
};
</script>

<style></style>
