import http from "../lib/http"

const PRODUCT_LIST = "/product/list"
const PRODUCT_VIEW = "/product/view"

function list() {
    return http.post(
        PRODUCT_LIST
    )
}

function view(id) {
    return http.post(
        `${PRODUCT_VIEW}/${id}`
    )
}

export default {
    list,
    view
}
