import './App.css';
import { useState, useEffect } from "react";
import Product from "./components/Product";
export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/products?limit=20")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        })
        .catch((err) => {

          console.log(err);
        });
  }, []);

  return (
      <div className="App">
        <h1 style={{ margin: "2em" }}>Liste des produits</h1>

        <div>
          <label htmlFor="pet-select">Résultat</label>

          <select name="pets" id="pet-select">
            <option value="30">tous</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div
            style={{
              display: "flex",
              flexDirection: "flex",
              flexWrap: "wrap",
              width: "90%",
              margin: "auto"
            }}
        >
          {products.map((product) => (
              <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
  );
}
