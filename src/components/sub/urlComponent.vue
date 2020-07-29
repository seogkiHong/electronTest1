<template>
  <div
    class="fixed background-black"
    id="url-container"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <webview
      v-bind:class="{ hide: hideWebView }"
      v-bind:src="type.data.url"
      plugins
      allowpopups
      style="width: 100%; height: 100%"
    ></webview>

    <img
      class="back_btn"
      src="@/assets/img/before_48dp.png"
      @click="webview.goBack()"
    />
    <img
      class="forward_btn"
      src="@/assets/img/next_48dp.png"
      @click="webview.goForward()"
    />
  </div>
</template>

<script>
export default {
  name: "urlComponent",
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
      webview: "",
      hideWebView: true,
      curHeight: window.innerHeight,
      curWidth: window.innerWidth,
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

      this.setWebViewOptions();
    },
    setWebViewOptions() {
      this.webview = this.$el.querySelector("webview");
      this.webview.addEventListener("dom-ready", () => {
        this.webview.insertCSS(
          "::-webkit-scrollbar { width: 6px }" +
            "::-webkit-scrollbar-thumb {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);  border-radius: 10px;}" +
            "body:hover, body:active, body:focus {overflow-y : overlay}" +
            "body {overflow: hidden;}"
        );

        this.hideWebView = false;
      });
    },
  },
};
</script>

<style scoped>
@import "~@/assets/css/urlComponent.css";
</style>
