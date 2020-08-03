<template>
  <div
    class="fixed background-black"
    id="device-io-component"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  ></div>
</template>

<script>
export default {
  name: "deviceIoComponent",
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

      this.findSerialPorts();
    },

    findSerialPorts() {
      const SerialPort = window.require("serialport");

      SerialPort.list().then(
        (ports) => ports.forEach(console.log),
        (err) => console.error(err)
      );
    },
  },
};
</script>

<style></style>
