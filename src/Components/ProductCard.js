import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ProductCard(props) {

    const { product } = props

    console.log(product);

    return (
        <>
            <Link className={"link"} to={`/product/${product._id}`}>
                <div className="card" style={{ width: "18rem" }}>

                    <img src={product.image} className="card-img-top" alt={product.name} />

                    <div className="card-body">

                        <h5 className="link fw-bold">{product.name}</h5>

                        <div className="d-flex gap-1 align-items-center">

                            <Rating rating={product.rating} />

                            <span className="text-dark">
                                {product.numReviews} reviews
                            </span>

                        </div>

                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="fw-bold" style={{ color: "black" }}>
                                ${product.price}
                            </h5>
                            <span className="link fw-fold">{product.brand}</span>
                        </div>

                    </div>
                </div>
            </Link>
        </>
    )
}
