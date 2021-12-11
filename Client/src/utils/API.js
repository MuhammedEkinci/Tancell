import axios from "axios";

export default {
    getProducts: function(){
        return axios.get("/api/products");
    },
    getProductsByCategory: function(category){
        return axios.get("/api/products/" + category);
    }
};