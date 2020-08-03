<template>
  <div
    class="fixed background-black "
    id="text-container"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  ></div>
</template>

<script>
export default {
  name: "systemComponent",
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

    //{type: "image",left1: 0, left2: 100,top1: 0,top2: 20,}
  },
  created() {},
  mounted() {},
  methods: {
    init() {
      this.myType = this.$data.type;
      this.isSlide = this.myType.isSlide;
      this.textOptions = this.myType.textOptions;
      this.left1 = this.myType.left1 + "%";
      this.top1 = this.myType.top1 + "%";
      this.width = Number(this.myType.left2) - Number(this.myType.left1) + "%";
      this.height = Number(this.myType.top2) - Number(this.myType.top1) + "%";

      var os = window.require("os");
      console.log(os);
    },
  },
};
</script>

<style>
@import "~@/assets/css/systemComponent.css";
</style>
