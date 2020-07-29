<template>
  <div
    class="fixed background-black "
    id="text-container"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <template v-if="isSlide">
      <text-slider :options="textOptions" />
    </template>
    <template v-else>
      <div
        class="text_wrap"
        style="text-align:center; width: 100%;height: 100%; position: absolute; color: white; margin: auto; top: 50%; font-size: x-large;"
      >
        {{ curText }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "textComponent",
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
      isSlide: false,
      curHeight: window.innerHeight,
      curWidth: window.innerWidth,
      textOptions: {},
      curText: "",
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

      if (!this.isSlide) {
        this.curText = this.textOptions.texts[0];
      }
    },
  },
};
</script>

<style>
@import "~@/assets/css/textComponent.css";
</style>
