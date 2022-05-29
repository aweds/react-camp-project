import axios from "axios";

export default class ProductService {
        getProducts(){
            // ürünleri getiren apinin ismi buraya yazılacak
            return axios.get("http://localhost:8080/api/products/getall");
        }
}