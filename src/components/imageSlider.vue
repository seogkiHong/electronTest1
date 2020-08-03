<template>
  <div style="position: relative; width: 100%; height: 100%;">
    <transition-group
      tag="div"
      name="slide"
      style="position: relative; width: 100%; height: 100%;"
    >
      <div v-for="number in [currentNumber]" :key="number">
        <img
          :src="
            require(`@/assets/img/${
              options.images[Math.abs(currentNumber) % options.images.length]
            }`)
          "
          style="width: 100%; height: 100%; object-fit:contain; position: absolute; "
          rel="preload"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "image-slider",
  props: {
    options: {
      type: Object,
    },
  },
  data() {
    return {
      currentNumber: 0,
      timer: null,
      ms: 5000,
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
