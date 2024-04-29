<script setup>
import BuyNow from './BuyNow.vue'
import HomeProductList from './HomeProductList.vue'
</script>

<template>
  <div>
    <div class="photo-section">
      <BuyNow img="/images/avocado.jpg"/>
      <BuyNow img="/images/berries.jpg"/>
      <BuyNow img="/images/nuts.jpg"/>
    </div>

    <p id="our-products-text">Our Products</p>
    <HomeProductList/>
  </div>
</template>

<style lang="scss" scoped>
.photo-section, .shop-section, .footer-section, .about-section, .item-section, .cart-section {
  width: 70%;
  margin-left: 15%;
}

#our-products-text, #footer_text {
    font-family: 'Ubuntu Condensed', sans-serif;
    font-size: 28px;
    text-align: center;
    color: #1b1e21;
    letter-spacing: 1px;
}
</style>
