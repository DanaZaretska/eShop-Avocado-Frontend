<script setup>
import {ref} from 'vue'
import api from '../api/cart'

let cart = ref([])

function increment(item) {
  api.item_increment(item.id).then(response => {
    item.quantity++;
  }).catch(e => console.log(e))
}

function decrement(item) {
  if (item.quantity > 1) {
    api.item_decrement(item.id).then(response => {
      item.quantity--;
    }).catch(e => console.log(e))
  }
}

function remove(i, item, cart) {
  api.item_remove(item.id).then(response => {
    cart.splice(i, 1);
  }).catch(e => console.log(e))
}

api.view().then(response => {
  cart.value = response.data
}).catch(e => console.log(e))
</script>

<template>
  <section class="cart-section">
    <div class="cart-item-section" v-for="(item, i) in cart" :key="item.id">
      <div class="item-image">
        <img :src="`/src/assets/images/products/${item.product.image}`">
      </div>
      <div class="item-info-box">
        <div class="item-info">
          <a href="#"><h3>{{ item.product.title }}</h3></a>
          <h4>$ {{ item.product.price / 100 }}</h4>
          <button @click="remove(i, item, cart)" class="delete-item-from-cart-button">Delete</button>
          <button @click="decrement(item)" class="delete-item-from-cart-button">-</button>
          &nbsp;{{ item.quantity }}&nbsp;
          <button @click="increment(item)" class="delete-item-from-cart-button">+</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cart-item-section {
  height: 230px;
}

.photo-section, .shop-section, .footer-section, .about-section, .item-section, .cart-section {
  width: 70%;
  margin-left: 15%;
}

.item-image {
  float: left;

  margin-right: 20px;

  img {
    height: 200px;
  }
}

.item-info-box {
  //float: left;
}

.item-info a {
  text-decoration: none;
  color: #1b1e21;
}

.item-info h3, .item-info h4, .item-info p {
  font-family: 'Ubuntu Condensed', sans-serif;
}
</style>
