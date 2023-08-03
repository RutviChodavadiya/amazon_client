import axios from "axios";

class ApiHelper {
    constructor(){
        this.baseUrl = "http://localhost:5000/api"
    }

    fetchProducts(){
        return axios.get(`${this.baseUrl}/product`)
    }


    fetchProductById(id){
        return axios.get(`${this.baseUrl}/product/${id}`)
    }
 }

 const apiHelper = new ApiHelper()

 export default apiHelper
