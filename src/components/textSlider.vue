<template>
  <div style="position: relative; width: 100%; height: 100%;">
    <transition-group
      tag="div"
      name="slide"
      style="position: relative; width: 100%; height: 100%;"
    >
      <div
        v-for="number in [currentNumber]"
        :key="number"
        style="text-align:center; width: 100%;height: 100%; position: absolute; color: white; margin: auto; top: 50%; font-size: x-large;"
      >
        {{ options.texts[Math.abs(currentNumber) % options.texts.length] }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "text-slider",

  props: {
    options: {
      type: Object,
    },
  },
  data() {
    return {
      currentNumber: 0,
      timer: null,
      ms: 1500,
    };
  },

  created() {},
  mounted() {
    this.ready();
  },

  methods: {
    ready() {
      this.startRotation();
    },
    startRotation() {
      this.timer = setInterval(this.next, this.ms);
    },

    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next() {
      this.currentNumber += 1;
    },
    prev() {
      this.currentNumber -= 1;
    },
    beforeDestroy() {
      this.stopRotation();
    },
  },
};
</script>
