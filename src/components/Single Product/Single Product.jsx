import { React } from "react";
// import styles from "../../../styles/single product.css";

function SingleProduct() {
    const product = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    };

    return (
        <div className="small-container single-product">
            <div className="row">
                <div className="col-2">
                    <img src={product.image} alt="" width="100%" />
                </div>
                <div className="col-2">
                    <p>{product.category}</p>
                    <h1>{product.title}</h1>
                    <h4>${product.price}</h4>
                    <h5>{product.rating.rate}</h5>

                    {/* Not Working */}
                    <div className="rating"> 
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>

                    <input type="number" defaultValue={1} />
                    <a href="" className="btn">Add To Cart</a>

                    <h3>Product Details <i className="fas fa-indent"></i></h3> {/* Not Working */}
                    <br />
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;