<template>
  <div
    class="fixed background-black "
    id="image-container"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <template v-if="isSlide">
      <image-slider :options="imageOptions" />
    </template>
    <template v-else>
      <img
        src="@/assets/img/random/riot.jpg"
        style="width: 100%; height: 100%;"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "imageComponent",
  components: {},
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
      isSlide: false,
      imageOptions: {},
    };

    //{type: "image",left1: 0, left2: 100,top1: 0,top2: 20,}
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
  },
};
</script>

<style>
@import "~@/assets/css/imageComponent.css";
</style>
