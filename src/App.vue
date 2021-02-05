<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      imageUrl:
        "https://ccunknown.github.io/tanita/static/custom/images/logo.png",
      height: 90,
    };
  },
};
</script>
<style spoced>
.h3 {
  font-size: 25px;
  font-weight: bold;
  font-family: sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(57, 73, 94);
}
</style>
