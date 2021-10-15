import { request } from "./request.js";

export function getListdata(){
    return request({
        // url: './index.json'   //不能写./路径，要不然其他页面调取会在请求地址上面加上文件夹目录，导致请求数据错误
        url: '/list.json'
    })
}