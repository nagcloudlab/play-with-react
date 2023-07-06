

import instance from "./index";

export function getProducts(){
    return instance.get("api/products");
}