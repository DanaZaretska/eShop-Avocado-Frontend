import http from "@/lib/http"

const CART_VIEW = "/cart/view"
// const CART_ITEM_ADD = "/cart/item/{product_id}/add"
// const CART_ITEM_REMOVE = "/cart/item/{item_id}/remove"
// const CART_ITEM_INCREMENT = "/cart/item/{item_id}/increment"
// const CART_ITEM_DECREMENT = "/cart/item/{item_id}/decrement"

function view() {
    return http.post(
        CART_VIEW
    )
}

function item_add(product_id) {
    return http.post(
        `/cart/item/${product_id}/add`
    )
}

function item_remove(item_id) {
    return http.post(
        `/cart/item/${item_id}/remove`
    )
}
function item_increment(item_id) {
    return http.post(
        `/cart/item/${item_id}/increment`
    )
}

function item_decrement(item_id) {
    return http.post(
        `/cart/item/${item_id}/decrement`
    )
}

export default {
    view,
    item_add,
    item_remove,
    item_increment,
    item_decrement
}
