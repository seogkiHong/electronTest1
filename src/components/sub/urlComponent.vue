<template>
  <div
    class="fixed"
    id="url-container"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <webview
      v-bind:src="type.data.url"
      style="width: 100%; height: 100%"
    ></webview>
  </div>
</template>

<script>
export default {
  name: "urlContainer",
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
      this.left1 = this.myType.left1 + "%";
      this.top1 = this.myType.top1 + "%";
      this.width = Number(this.myType.left2) - Number(this.myType.left1) + "%";
      this.height = Number(this.myType.top2) - Number(this.myType.top1) + "%";
    },
  },
};
</script>
