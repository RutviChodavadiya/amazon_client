import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiHelper from "../Comn/ApiHelper";
import Rating from "../Components/Rating";

export default function ProductScreen() {
    const { id } = useParams()  
    const [Product, setProduct] = useState({})




    const getProduct = async() =>{
        try {
            const result = await apiHelper.fetchProductById(id)
            setProduct(result.data.product)
        } catch (error) {
           console.log(error)
        }
    }
     
   useEffect(() => {
    getProduct()

   },[])

  
    return <>
        <Link to={"..."} className="link" style={{ fontWeight: "600" }}>Back to result</Link>
        <div className="container pt-2">
            <div className="row">
                <div className="col-12 col-md-6 mb-2 mb-md-0">
                    <img src={Product.image} width={"100%"} alt={Product.name} />
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-2 mb-0 px-0-sm">
                            <h4 className="fw-bold">
                                {Product.name}
                            </h4>
                            <div className="d-flex align-items-center mb-1">
                                <Rating rating={Product.rating} />
                                <span>&nbsp;{Product.numReviews} reviews</span>
                            </div>
                            <p className="mb-1">Price : ${Product.price}</p>
                            <p className="mb-1">Description:</p>
                            <p>high quality product</p>
                        </div>
                        <div className="col-12 col-lg-6 mb-2">
                            <div className="card-body card">
                                <div className="d-flex justify-content-between">
                                    <h6>Price</h6>
                                    <span>${Product.price}</span>
                                </div>
                                <div className="d-flex jstify-content-between">
                                    <h6>Quantity</h6>
                                    <select disabled={Product.countInStock <= 0} className="rounded"        >
                                        {
                                            [...new Array(Product.countInStock).keys()].map((x) =>{
                                                return <option value={x+1}key={x+1}>{x+1}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Status</h6>
                                    <h6 className={Product.countInStock > 0 ? "text-success" : "text-danger"}>{Product.countInStock > 0 ? "In Stock" : "Out of Stock"} </h6>
                                </div>
                                <button disabled={Product.countInStock <= 0} className="btn border border-secondary btn-warning w-100">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}