<script setup>
import {ref} from 'vue'
import productAPI from '../api/product'
import cartAPI from '../api/cart'

const props = defineProps({
  id: String
})

let product = ref({})
let label = ref('Add to Cart')

function add(product_id) {
  cartAPI.item_add(product_id).then(response => {
    console.log(product)
    label.value = 'Done'
  }).catch(e => console.log(e))
}

productAPI.view(props.id).then(response => {
  product.value = response.data
}).catch(e => console.log(e))
</script>

<template>
  <section>
    <div class="item-section">
            <div class="item-image">
              <img :src="`/src/assets/images/products/${product.image}`">
            </div>
            <div class="item-info-box">
                <div class="item-info">
                    <a href="#"><h3>{{ product.title }}</h3></a>
                    <h4>${{ product.price / 100 }}</h4>
                  <button @click="add(product.id)" class="add-to-cart-button">{{label}}</button>
                </div>
            </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.item-section {
    height: 400px;
}

.item-image {
    float: left;
}

.item-info-box {
    float: left;
    margin-left: 50px;
}

.item-info a{
    text-decoration: none;
    color: #1b1e21;
}

.item-info h3, .item-info h4, .item-info p{
    font-family: 'Ubuntu Condensed', sans-serif;
}
.add-to-cart-button, .delete-item-from-cart-button, .buy-items-button{
    background-color: white;
    border: 2px solid #1b1e21;
    color: #1b1e21;
    width: 200px;
    height: 44px;
    font-family: 'Ubuntu Condensed', sans-serif;
    font-size: 20px;
    letter-spacing: 1px;

}
.add-to-cart-button:hover, .delete-item-from-cart-button:hover, .buy-items-button:hover{
    border: 2px solid #2b9464;
    color: #2b9464;
    transition: all 0.3s ease;
    cursor: pointer;
}
</style>
