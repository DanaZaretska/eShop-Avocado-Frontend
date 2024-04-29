<script setup>
defineProps({
  img: String
})
</script>

<template>
  <div class="container">
    <img :src="img">
    <router-link tag="a" :to="{ name: 'Products' }" class="centered-text-on-photo">Buy now</router-link>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  text-align: center;
  color: white;

  img {
    height: 320px;
    width: 100%;
  }
}

.centered-text-on-photo {
  color: white;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 28px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 60px 15px 60px;
  border: 2px solid white;
  background-color: rgba(24, 27, 29, 0.4);
  text-decoration: none;
}

.centered-text-on-photo:hover {
  border: 3px solid white;
  transition: all 0.1s ease;
}
</style>
