export default function Product({ product }) {
    return (
        <div style={{ width: "150px", border: "1px solid #000", margin: "20px" }}>
            <img
                style={{ width: "100%" }}
                src={product.thumbnail}
                alt={product.title}
            />
            <h5> {product.title} </h5>
            <h4>{product.brand}</h4>
            <p> {product.price} &euro; </p>
            <p> {product.description} </p>
        </div>
    );
}