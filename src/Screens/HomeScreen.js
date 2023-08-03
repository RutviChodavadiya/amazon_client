
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import apiHelper from "../Comn/ApiHelper";



export default function HomeScreen() {
    const [products, setProducts] = useState([])

    const Getproducts = async() =>{
        try {
            const result = await apiHelper.fetchProducts()
            setProducts(result.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Getproducts()
    },[])








    return (
        
        <div className="container py-3">
            <h5>Feature Products</h5>
            <div className="d-flex mt-3 flex-wrap gap-3 justify-content-md-start justify-content-center">
                {products.map((product, index) => {
                    return <ProductCard key={index}product={product} />;
                })}
            </div>
        </div>
    )

}