import { request } from "./request.js";

export function getProductdata() {
    return request({
        url: '/product.json'
    })
}