<template>
  <div
    class="fixed background-black "
    id="os-info-component"
    v-bind:style="{ left: left1, top: top1, height: height, width: width }"
  >
    <div class="relative max-size" style="margin: 0px 48px; overflow: scroll;">
      <div style="color: white; text-align:left; display: block;">
        <br />
        호스트명: {{ osInfos.hostname }}
        <br />
        타입: {{ osInfos.type }}
        <br />
        플랫폼: {{ osInfos.platform }}
        <br />
        아키텍쳐: {{ osInfos.arch }}
        <br />
        배포: {{ osInfos.release }}
        <br />
        가동시간: {{ osInfos.uptime }}
        <br />
        메모리 합계: {{ osInfos.totalmem }}
        <br />
        남은 메모리: {{ osInfos.freemem }}
        <br />
        CPU:
        {{
          osInfos.cpus && osInfos.cpus.length > 0 ? osInfos.cpus[0].model : ""
        }}

        <br />
        <br />
        === 네트워크 ===
        <div
          v-for="(value, key) in osInfos.networkInterfaces"
          :key="key"
          style="margin-left: 24px;"
        >
          <br />
          ==
          {{ key }} ==
          <br />
          <div
            v-for="(subValue, idx) in value"
            :key="idx"
            style="margin-left: 24px;"
          >
            <br />
            IP ADDRESS: {{ subValue.address }}
            <br />
            NETMASK: {{ subValue.netmask }} <br />FAMILY: {{ subValue.family }}
            <br />MAC ADDRESS: {{ subValue.mac }} <br />INTERNAL:
            {{ subValue.internal }} <br />CIDR: {{ subValue.cidr }}
          </div>
          <br />
          == END ==
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "osInfoComponent",
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
      osInfos: {},
      networkInfos: {},
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

      const os = window.require("os");
      this.osInfos.hostname = os.hostname();
      this.osInfos.type = os.type();
      this.osInfos.platform = os.platform();
      this.osInfos.arch = os.arch();
      this.osInfos.release = os.release();
      this.osInfos.uptime = os.uptime();
      this.osInfos.loadavg = os.loadavg();
      this.osInfos.totalmem = os.totalmem();
      this.osInfos.freemem = os.freemem();
      this.osInfos.cpus = os.cpus();
      this.osInfos.networkInterfaces = os.networkInterfaces();

      /* var os_utils = require("os-utils");
      this.osInfos.cpupercent = os_utils.cpuUsage(); */
    },
  },
};
</script>

<style>
@import "~@/assets/css/osInfoComponent.css";
</style>
