import { request } from "./request.js";

export function getCart(){
    return request({
        url: "/cart.json"
    })
}