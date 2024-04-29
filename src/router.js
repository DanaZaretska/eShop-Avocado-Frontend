import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductList from './components/ProductList.vue'
import ProductItem from './components/ProductItem.vue'
import Cart from './components/Cart.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductList,
    },
    {
        path: '/product/item/:id',
        name: 'ProductItem',
        component: ProductItem,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
