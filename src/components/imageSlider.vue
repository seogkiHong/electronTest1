<template>
  <div style="width: 100%; height: 100%;">
    <div
      v-for="number in [currentNumber]"
      transition="slide"
      :key="number"
      style="width: 100%; height: 100%;"
    >
      <img
        :src="
          require(`@/assets/img/8k/${
            images[Math.abs(currentNumber) % images.length]
          }`)
        "
        style="width: 100%; height: 100%;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "image-slider",
  data() {
    return {
      images: ["test5.jpg", "test6.jpg", "test7.jpg", "test8.jpg"],
      currentNumber: 0,
      timer: null,
      ms: 3000,
    };
  },

  created() {
    this.ready();
  },
  mounted() {},

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
  },
};
</script>
