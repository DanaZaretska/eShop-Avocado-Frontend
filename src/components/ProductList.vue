<script setup>
import {ref} from 'vue'
import api from '../api/product'

let products = ref([])

api.list().then(response => {
  products.value = response.data
}).catch(e => console.log(e))
</script>

<template>
  <section class="products">
    <div class="product-box" v-for="product in products" :key="product.id">
      <div class="product-image">
        <img :src="`/src/assets/images/products/${product.image}`">
      </div>
      <div class="product-info">
        <router-link :to="{ name: 'ProductItem', params: {id: product.id} }"><h4>{{ product.title }}</h4></router-link>
        <h5>$ {{ product.price / 100 }}</h5>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products {
  width: 70%;
  margin-left: 15%;
  display: flex;
  flex-wrap: wrap;
}

.product-box {
  flex: 1 16%;
  padding: 3%;
}

.product-image img {
  max-width: 100%;
}

.product-info a {
  text-decoration: none;
}

.product-info a h4:hover {
  color: #2b9464;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.product-info h4, .product-info h5 {
  font-family: 'Ubuntu Condensed', sans-serif;
  color: #1b1e21;
  letter-spacing: 1px;
}
</style>
