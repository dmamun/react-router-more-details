import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const Products = () => {
    const {products}=useLoaderData();
    console.log(products);
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                products.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
            }
            
        </div>
    );
};

export default Products;