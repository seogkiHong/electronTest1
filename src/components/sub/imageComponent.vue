<template>
  <div
    class="fixed background-black"
    id="image-component"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <template v-if="isSlide">
      <image-slider :options="imageOptions" />
    </template>
    <template v-else>
      <img src="@/assets/img/test/eco.png" style="width: 100%; height: 100%;" />
    </template>
  </div>
</template>

<script>
import crypto from "crypto-js";
export default {
  name: "imageComponent",
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

      this.encryptTestv3();
      this.encryptTestv2();
    },

    encryptTestv2() {
      var cryptoObj = window.crypto;
      console.log(cryptoObj);
      var array = new Uint32Array(10);
      var randNum = window.crypto.getRandomValues(array);
      console.log(randNum);
    },

    encryptTest() {
      var pos = this;

      var images = require.context("@/assets/img/test/", true, /\.png$/);

      images.keys().forEach(function(key) {
        console.log(`${key}`);

        var img = new Image();
        img.src = require("@/assets/img/test/" +
          key.replace("/", "").replace(".", ""));
        console.log(img);
        pos.encrpyt();
      });
    },

    encryptTestv3() {
      var cryptos = require("crypto");
      console.log(cryptos);
    },

    encrpyt() {
      var iv = crypto.lib.WordArray.random(32);
      var randNum = iv.words[Math.floor(Math.random() * iv.words.length)];
      console.log(randNum);
    },
  },
};
</script>

<style>
@import "~@/assets/css/imageComponent.css";
</style>
